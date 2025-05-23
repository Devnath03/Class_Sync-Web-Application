
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { User, UserRole } from "@/types/auth";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
  sendVerificationEmail: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const mockUsers: User[] = [
  {
    id: "1",
    email: "admin@classsync.com",
    name: "Admin User",
    role: "admin",
    createdAt: new Date(),
    hasVerifiedEmail: true
  },
  {
    id: "2",
    email: "contributor@classsync.com",
    name: "Contributor User",
    role: "contributor",
    createdAt: new Date(),
    hasVerifiedEmail: true
  },
  {
    id: "3",
    email: "learner@classsync.com",
    name: "Learner User",
    role: "learner",
    createdAt: new Date(),
    hasVerifiedEmail: true
  }
];

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check for stored user session on component mount
    const storedUser = localStorage.getItem("user");
    
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Failed to parse stored user data");
        localStorage.removeItem("user");
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulating API call with delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple mock authentication
      const foundUser = mockUsers.find(
        u => u.email === email && u.role === role
      );
      
      if (foundUser) {
        // In a real app, you would validate the password here
        setUser(foundUser);
        localStorage.setItem("user", JSON.stringify(foundUser));
        
        // Navigate based on role
        navigate(`/dashboard/${role}`);
        
        toast({
          title: "Login successful",
          description: `Welcome back, ${foundUser.name}!`,
        });
      } else {
        throw new Error("Invalid credentials or role");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
      toast({
        variant: "destructive",
        title: "Login failed",
        description: err instanceof Error ? err.message : "Invalid credentials",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
  };

  const signup = async (email: string, password: string, name: string, role: UserRole) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Simulating API call with delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if user already exists
      if (mockUsers.some(u => u.email === email)) {
        throw new Error("Email already in use");
      }
      
      // Create new user
      const newUser: User = {
        id: `${mockUsers.length + 1}`,
        email,
        name,
        role,
        createdAt: new Date(),
        hasVerifiedEmail: false
      };
      
      // In a real app, you would store the user in a database
      mockUsers.push(newUser);
      
      toast({
        title: "Account created",
        description: "Please verify your email to continue",
      });
      
      // In a real app, this would trigger an email verification flow
      // For now, we'll just simulate it
      await sendVerificationEmail(email);
      
      // Navigate to login
      navigate("/login");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Signup failed");
      toast({
        variant: "destructive",
        title: "Signup failed",
        description: err instanceof Error ? err.message : "Could not create account",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const sendVerificationEmail = async (email: string) => {
    // In a real app, this would send a verification email
    console.log(`Verification email would be sent to ${email}`);
    
    toast({
      title: "Verification email sent",
      description: "Please check your inbox to verify your email",
    });
    
    return Promise.resolve();
  };

  const value = {
    user,
    isLoading,
    error,
    login,
    logout,
    signup,
    sendVerificationEmail
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
