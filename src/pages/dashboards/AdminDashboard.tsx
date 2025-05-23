import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AdminChatbot } from "@/components/admin/AdminChatbot";
import {
  Users,
  FileText,
  Bell,
  Flag,
  BarChart,
  Settings,
  ChevronRight,
  Search,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for the dashboard
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      change: "+12%",
      icon: <Users className="h-6 w-6" />,
      color: "text-blue-500"
    },
    {
      title: "Content Pieces",
      value: "5,678",
      change: "+23%",
      icon: <FileText className="h-6 w-6" />,
      color: "text-purple-500"
    },
    {
      title: "Notifications",
      value: "32",
      change: "-5%",
      icon: <Bell className="h-6 w-6" />,
      color: "text-yellow-500"
    },
    {
      title: "Flagged Content",
      value: "7",
      change: "+2",
      icon: <Flag className="h-6 w-6" />,
      color: "text-red-500"
    },
  ];

  // Mock user activity data
  const recentActivities = [
    {
      user: "John Doe",
      action: "created a new note",
      content: "Advanced Mathematics",
      time: "3 minutes ago",
    },
    {
      user: "Sarah Smith",
      action: "flagged a content",
      content: "Physics 101",
      time: "15 minutes ago",
    },
    {
      user: "Mike Johnson",
      action: "registered as a contributor",
      content: "",
      time: "1 hour ago",
    },
    {
      user: "Emily Wilson",
      action: "updated flashcard set",
      content: "Biology Terms",
      time: "2 hours ago",
    },
  ];

  // Mock registered users data
  const registeredUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Learner" },
    { id: 2, name: "Sarah Smith", email: "sarah@example.com", role: "Contributor" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "Contributor" },
    { id: 4, name: "Emily Wilson", email: "emily@example.com", role: "Learner" },
    { id: 5, name: "David Brown", email: "david@example.com", role: "Admin" },
    { id: 6, name: "Lisa Garcia", email: "lisa@example.com", role: "Learner" },
  ];

  const filteredUsers = registeredUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownloadReport = () => {
    // Simple implementation to download homepage content as PDF
    const content = `
ClassSync Platform Report
========================

Platform Statistics:
- Total Users: 1,234 (+12%)
- Content Pieces: 5,678 (+23%)
- Notifications: 32 (-5%)
- Flagged Content: 7 (+2)

Recent Activity:
- John Doe created a new note: Advanced Mathematics (3 minutes ago)
- Sarah Smith flagged content: Physics 101 (15 minutes ago)
- Mike Johnson registered as a contributor (1 hour ago)
- Emily Wilson updated flashcard set: Biology Terms (2 hours ago)

User Statistics:
- Total Registered Users: ${registeredUsers.length}
- Learners: ${registeredUsers.filter(u => u.role === 'Learner').length}
- Contributors: ${registeredUsers.filter(u => u.role === 'Contributor').length}
- Admins: ${registeredUsers.filter(u => u.role === 'Admin').length}

Generated on: ${new Date().toLocaleString()}
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'classsync-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your platform, users, and content from one place.
          </p>
        </div>
        
        <div className="flex space-x-2">
          <Button asChild>
            <Link to="/admin/platform-settings">
              <Settings className="mr-2 h-4 w-4" /> Platform Settings
            </Link>
          </Button>
          <Button variant="outline" onClick={handleDownloadReport}>
            <Download className="mr-2 h-4 w-4" /> Download Report
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i} className="glassmorphism hover:shadow-lg transition-all">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <div className={stat.color}>{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search Users Section */}
      <Card className="glassmorphism">
        <CardHeader>
          <CardTitle>Search Registered Users</CardTitle>
          <CardDescription>
            Search and manage platform users
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search users by name or email..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {filteredUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex flex-col">
                    <span className="font-medium">{user.name}</span>
                    <span className="text-sm text-muted-foreground">{user.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs bg-secondary px-2 py-1 rounded">{user.role}</span>
                  </div>
                </div>
              ))}
              {filteredUsers.length === 0 && searchTerm && (
                <div className="text-center text-muted-foreground py-4">
                  No users found matching "{searchTerm}"
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest actions taken by users on the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex flex-col space-y-1">
                    <span className="font-medium">{activity.user}</span>
                    <span className="text-sm text-muted-foreground">
                      {activity.action} {activity.content && <span className="font-medium">{activity.content}</span>}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              ))}
              <div className="pt-2 text-right">
                <Link to="/admin/activity" className="text-sm text-primary hover:underline inline-flex items-center">
                  View all activity <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common administrative tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 grid-cols-2">
              <Button className="h-24 flex flex-col space-y-2" asChild>
                <Link to="/admin/user-management">
                  <Users className="h-6 w-6" />
                  <span>Manage Users</span>
                </Link>
              </Button>
              <Button className="h-24 flex flex-col space-y-2" variant="outline" asChild>
                <Link to="/admin/content-management">
                  <FileText className="h-6 w-6" />
                  <span>Review Content</span>
                </Link>
              </Button>
              <Button className="h-24 flex flex-col space-y-2" variant="outline" asChild>
                <Link to="/admin/flagged-items">
                  <Flag className="h-6 w-6" />
                  <span>Flagged Items</span>
                </Link>
              </Button>
              <Button className="h-24 flex flex-col space-y-2" variant="secondary" asChild>
                <Link to="/admin/analytics">
                  <BarChart className="h-6 w-6" />
                  <span>Analytics</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add the chatbot component */}
      <AdminChatbot />
    </div>
  );
}
