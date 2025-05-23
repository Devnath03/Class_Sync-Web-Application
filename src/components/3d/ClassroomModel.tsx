
import { useEffect, useRef, useState } from 'react';

export function ClassroomModel() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;
    
    const loadThreeJS = async () => {
      try {
        // Dynamically import Three.js to avoid SSR issues
        const THREE = await import('three');
        const { OrbitControls } = await import('three/examples/jsm/controls/OrbitControls.js');
        
        // Create scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0);
        
        // Create camera
        const camera = new THREE.PerspectiveCamera(75, mountRef.current!.clientWidth / mountRef.current!.clientHeight, 0.1, 1000);
        camera.position.set(0, 2, 5);
        
        // Create renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
        renderer.shadowMap.enabled = true;
        mountRef.current!.appendChild(renderer.domElement);
        
        // Add controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.maxPolarAngle = Math.PI / 2;
        
        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 10, 7.5);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        
        // Create classroom floor
        const floorGeometry = new THREE.PlaneGeometry(10, 10);
        const floorMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        floor.receiveShadow = true;
        scene.add(floor);
        
        // Create classroom walls
        const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
        
        // Back wall
        const backWallGeometry = new THREE.BoxGeometry(10, 4, 0.1);
        const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
        backWall.position.set(0, 2, -5);
        scene.add(backWall);
        
        // Create desks with books
        const deskGeometry = new THREE.BoxGeometry(1.5, 0.1, 0.8);
        const deskMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
        
        // Create multiple desks
        for (let i = -2; i <= 2; i += 2) {
          for (let j = -3; j <= 1; j += 2) {
            const desk = new THREE.Mesh(deskGeometry, deskMaterial);
            desk.position.set(i, 0.7, j);
            desk.castShadow = true;
            scene.add(desk);
            
            // Add a book on each desk
            const bookGeometry = new THREE.BoxGeometry(0.3, 0.05, 0.4);
            const bookMaterial = new THREE.MeshStandardMaterial({ color: 0x1E90FF });
            const book = new THREE.Mesh(bookGeometry, bookMaterial);
            book.position.set(i + 0.2, 0.775, j);
            book.castShadow = true;
            scene.add(book);
          }
        }
        
        // Whiteboard
        const whiteboardGeometry = new THREE.BoxGeometry(4, 2, 0.1);
        const whiteboardMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const whiteboard = new THREE.Mesh(whiteboardGeometry, whiteboardMaterial);
        whiteboard.position.set(0, 2.5, -4.9);
        scene.add(whiteboard);
        
        // Animation function
        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        
        animate();
        setIsLoading(false);
        
        // Handle window resize
        const handleResize = () => {
          if (!mountRef.current) return;
          camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Clean up on unmount
        return () => {
          window.removeEventListener('resize', handleResize);
          if (mountRef.current && renderer.domElement.parentNode) {
            mountRef.current.removeChild(renderer.domElement);
          }
          renderer.dispose();
        };
      } catch (err) {
        console.error('Failed to load 3D classroom:', err);
        setError('Failed to load 3D classroom. Please try refreshing the page.');
        setIsLoading(false);
      }
    };
    
    loadThreeJS();
  }, []);
  
  if (error) {
    return (
      <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden flex items-center justify-center bg-muted">
        <div className="text-center">
          <p className="text-muted-foreground">{error}</p>
          <Button 
            variant="outline" 
            className="mt-4"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </Button>
        </div>
      </div>
    );
  }
  
  if (isLoading) {
    return (
      <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden flex items-center justify-center bg-muted">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading 3D Classroom...</p>
        </div>
      </div>
    );
  }
  
  return <div ref={mountRef} className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden" />;
}
