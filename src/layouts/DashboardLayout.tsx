
import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

export function DashboardLayout() {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse-soft">Loading...</div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if user is trying to access a dashboard they don't have permission for
  const currentPath = location.pathname;
  const dashboardRole = currentPath.split('/')[2]; // Extracts role from /dashboard/[role]/*
  
  if (dashboardRole && dashboardRole !== user.role) {
    return <Navigate to={`/dashboard/${user.role}`} replace />;
  }

  return (
    <div className="flex min-h-screen">
      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <div className={`${mobileMenuOpen ? "block" : "hidden"} md:block`}>
        <DashboardSidebar
          collapsed={collapsed}
          onToggleCollapse={toggleCollapse}
        />
      </div>

      {/* Main content */}
      <div className={`flex flex-col flex-1 ${collapsed ? "md:ml-20" : "md:ml-64"}`}>
        <DashboardHeader onMenuClick={toggleMobileMenu} />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
