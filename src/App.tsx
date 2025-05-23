
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AuthProvider } from "@/contexts/AuthContext";

// Layouts
import { DashboardLayout } from "@/layouts/DashboardLayout";

// Pages
import LandingPage from "@/pages/LandingPage";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import AdminDashboard from "@/pages/dashboards/AdminDashboard";
import ContributorDashboard from "@/pages/dashboards/ContributorDashboard";
import LearnerDashboard from "@/pages/dashboards/LearnerDashboard";
import NotFound from "@/pages/NotFound";
import LearnMore from "@/pages/LearnMore";
import Features from "@/pages/Features";
import Pricing from "@/pages/Pricing";

// Admin Pages
import PlatformSettings from "@/pages/admin/PlatformSettings";
import UserManagement from "@/pages/admin/UserManagement";
import ContentManagement from "@/pages/admin/ContentManagement";
import FlaggedItems from "@/pages/admin/FlaggedItems";
import Analytics from "@/pages/admin/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="classsync-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/learn-more" element={<LearnMore />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              
              {/* Dashboard routes */}
              <Route path="/dashboard" element={<DashboardLayout />}>
                {/* Admin routes */}
                <Route path="admin" element={<AdminDashboard />} />
                <Route path="admin/users" element={<div>User Management</div>} />
                <Route path="admin/content" element={<div>Content Management</div>} />
                <Route path="admin/settings" element={<div>Admin Settings</div>} />
                
                {/* Contributor routes */}
                <Route path="contributor" element={<ContributorDashboard />} />
                <Route path="contributor/notes" element={<div>My Notes</div>} />
                <Route path="contributor/notes/new" element={<div>Create Note</div>} />
                <Route path="contributor/flashcards" element={<div>My Flashcards</div>} />
                <Route path="contributor/flashcards/new" element={<div>Create Flashcard Deck</div>} />
                <Route path="contributor/settings" element={<div>Contributor Settings</div>} />
                
                {/* Learner routes */}
                <Route path="learner" element={<LearnerDashboard />} />
                <Route path="learner/materials" element={<div>Study Materials</div>} />
                <Route path="learner/flashcards" element={<div>Flashcards</div>} />
                <Route path="learner/courses" element={<div>My Courses</div>} />
                <Route path="learner/settings" element={<div>Learner Settings</div>} />
              </Route>
              
              {/* Admin standalone routes */}
              <Route path="/admin/platform-settings" element={<PlatformSettings />} />
              <Route path="/admin/user-management" element={<UserManagement />} />
              <Route path="/admin/content-management" element={<ContentManagement />} />
              <Route path="/admin/flagged-items" element={<FlaggedItems />} />
              <Route path="/admin/analytics" element={<Analytics />} />
              
              {/* Catch all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
