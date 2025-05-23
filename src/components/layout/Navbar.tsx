
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Book, 
  Menu, 
  X,
  LogIn
} from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeNav}>
          <Book className="h-7 w-7 text-primary" strokeWidth={2.5} />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            ClassSync
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-4">
            <Link
              to="/features"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <ThemeToggle />
          </div>

          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <Button asChild variant="ghost">
                  <Link to={`/dashboard/${user.role}`}>Dashboard</Link>
                </Button>
                <Button onClick={logout} variant="outline">
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">
                    Sign Up <LogIn className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleNav}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden animate-fade-in absolute top-full left-0 w-full glassmorphism py-4 px-4 space-y-4">
          <div className="flex flex-col space-y-3">
            <Link
              to="/features"
              className="text-sm font-medium transition-colors hover:text-primary px-4 py-2"
              onClick={closeNav}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium transition-colors hover:text-primary px-4 py-2"
              onClick={closeNav}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium transition-colors hover:text-primary px-4 py-2"
              onClick={closeNav}
            >
              About
            </Link>
          </div>

          <div className="pt-4 border-t border-border space-y-2">
            {user ? (
              <>
                <Button 
                  asChild 
                  className="w-full justify-center"
                  variant="outline"
                >
                  <Link to={`/dashboard/${user.role}`} onClick={closeNav}>
                    Dashboard
                  </Link>
                </Button>
                <Button 
                  onClick={() => {
                    logout();
                    closeNav();
                  }}
                  className="w-full justify-center"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full justify-center"
                >
                  <Link to="/login" onClick={closeNav}>
                    Sign In
                  </Link>
                </Button>
                <Button asChild className="w-full justify-center">
                  <Link to="/signup" onClick={closeNav}>
                    Sign Up <LogIn className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
