
import { useEffect, useRef, useState } from 'react';

export function BookModel() {
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
        scene.background = new THREE.Color(0xf5f5f5);
        
        // Create camera
        const camera = new THREE.PerspectiveCamera(75, mountRef.current!.clientWidth / mountRef.current!.clientHeight, 0.1, 1000);
        camera.position.set(0, 0, 3);
        
        // Create renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mountRef.current!.clientWidth, mountRef.current!.clientHeight);
        renderer.shadowMap.enabled = true;
        mountRef.current!.appendChild(renderer.domElement);
        
        // Add controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        
        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 5, 5);
        directionalLight.castShadow = true;
        scene.add(directionalLight);
        
        // Create book
        const bookGroup = new THREE.Group();
        
        // Book cover color
        const coverMaterial = new THREE.MeshStandardMaterial({ 
          color: 0x6366f1,
          roughness: 0.7
        });
        
        // Book pages
        const pagesMaterial = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          roughness: 0.3
        });
        
        // Cover dimensions
        const width = 1.5;
        const height = 2;
        const depth = 0.2;
        const coverThickness = 0.05;
        
        // Front cover
        const frontCoverGeometry = new THREE.BoxGeometry(width, height, coverThickness);
        const frontCover = new THREE.Mesh(frontCoverGeometry, coverMaterial);
        frontCover.position.set(0, 0, depth/2 - coverThickness/2);
        frontCover.castShadow = true;
        bookGroup.add(frontCover);
        
        // Back cover
        const backCover = new THREE.Mesh(frontCoverGeometry, coverMaterial);
        backCover.position.set(0, 0, -depth/2 + coverThickness/2);
        backCover.castShadow = true;
        bookGroup.add(backCover);
        
        // Pages
        const pagesGeometry = new THREE.BoxGeometry(width - coverThickness*2, height - 0.05, depth - coverThickness*2);
        const pages = new THREE.Mesh(pagesGeometry, pagesMaterial);
        pages.position.set(coverThickness/2, 0, 0);
        bookGroup.add(pages);
        
        scene.add(bookGroup);
        
        // Auto-rotate the book
        let autoRotate = true;
        
        // Animation function
        const animate = () => {
          requestAnimationFrame(animate);
          
          if (autoRotate) {
            bookGroup.rotation.y += 0.01;
          }
          
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
        
        // Toggle rotation on click
        const handleClick = () => {
          autoRotate = !autoRotate;
        };
        
        if (mountRef.current) {
          mountRef.current.addEventListener('click', handleClick);
        }
        
        // Clean up on unmount
        return () => {
          window.removeEventListener('resize', handleResize);
          if (mountRef.current) {
            mountRef.current.removeEventListener('click', handleClick);
            if (renderer.domElement.parentNode) {
              mountRef.current.removeChild(renderer.domElement);
            }
          }
          renderer.dispose();
        };
      } catch (err) {
        console.error('Failed to load 3D book:', err);
        setError('Failed to load 3D book. Please try refreshing the page.');
        setIsLoading(false);
      }
    };
    
    loadThreeJS();
  }, []);
  
  if (error) {
    return (
      <div className="w-full h-[400px] rounded-lg overflow-hidden flex items-center justify-center bg-muted">
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
      <div className="w-full h-[400px] rounded-lg overflow-hidden flex items-center justify-center bg-muted">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading 3D Book...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative">
      <div ref={mountRef} className="w-full h-[400px] rounded-lg overflow-hidden" />
      <div className="absolute bottom-4 left-0 right-0 text-center text-sm text-muted-foreground">
        Click to pause/play rotation
      </div>
    </div>
  );
}
