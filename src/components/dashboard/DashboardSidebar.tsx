
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";
import {
  Book,
  FileText,
  Home,
  LayoutDashboard,
  LogOut,
  Settings,
  Users,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function DashboardSidebar({ collapsed, onToggleCollapse }: SidebarProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Define navigation items based on user role
  const getNavItems = () => {
    const baseItems = [
      {
        name: "Dashboard",
        path: `/dashboard/${user?.role}`,
        icon: <Home className="h-5 w-5" />,
      },
    ];

    const adminItems = [
      {
        name: "User Management",
        path: "/dashboard/admin/users",
        icon: <Users className="h-5 w-5" />,
      },
      {
        name: "Content Management",
        path: "/dashboard/admin/content",
        icon: <FileText className="h-5 w-5" />,
      },
    ];

    const contributorItems = [
      {
        name: "My Notes",
        path: "/dashboard/contributor/notes",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        name: "Flashcards",
        path: "/dashboard/contributor/flashcards",
        icon: <Book className="h-5 w-5" />,
      },
    ];

    const learnerItems = [
      {
        name: "Study Materials",
        path: "/dashboard/learner/materials",
        icon: <FileText className="h-5 w-5" />,
      },
      {
        name: "Flashcards",
        path: "/dashboard/learner/flashcards",
        icon: <Book className="h-5 w-5" />,
      },
    ];

    const settingsItem = {
      name: "Settings",
      path: `/dashboard/${user?.role}/settings`,
      icon: <Settings className="h-5 w-5" />,
    };

    let roleSpecificItems: typeof baseItems = [];
    
    if (user?.role === "admin") {
      roleSpecificItems = adminItems;
    } else if (user?.role === "contributor") {
      roleSpecificItems = contributorItems;
    } else if (user?.role === "learner") {
      roleSpecificItems = learnerItems;
    }

    return [...baseItems, ...roleSpecificItems, settingsItem];
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  if (!user) return null;

  return (
    <aside
      className={cn(
        "h-screen fixed left-0 top-0 z-40 flex flex-col glassmorphism border-r transition-all duration-300",
        collapsed && !isMobile ? "w-20" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <Book className="h-8 w-8 text-primary" strokeWidth={2.5} />
          {!collapsed && (
            <span className="ml-2 text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ClassSync
            </span>
          )}
        </div>
        {!isMobile && (
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleCollapse}
            className="hidden md:flex"
          >
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        {getNavItems().map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "flex items-center space-x-2 py-2 px-3 rounded-md transition-colors",
                collapsed && !isMobile ? "justify-center" : "justify-start",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted"
              )
            }
          >
            {item.icon}
            {(!collapsed || isMobile) && <span>{item.name}</span>}
          </NavLink>
        ))}
      </div>

      <div className="border-t p-4">
        <div className="flex items-center justify-between mb-4">
          <div className={cn("flex items-center", collapsed && !isMobile ? "justify-center w-full" : "")}>
            <Avatar className="h-8 w-8">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {user?.name ? getInitials(user.name) : "U"}
              </AvatarFallback>
            </Avatar>
            {(!collapsed || isMobile) && (
              <div className="ml-2">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs text-muted-foreground">{user.role}</p>
              </div>
            )}
          </div>
          {(!collapsed || isMobile) && <ThemeToggle />}
        </div>
        <Button
          variant="outline"
          size={collapsed && !isMobile ? "icon" : "default"}
          className="w-full"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          {(!collapsed || isMobile) && <span className="ml-2">Logout</span>}
        </Button>
      </div>
    </aside>
  );
}
