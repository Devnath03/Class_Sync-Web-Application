
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart
} from "recharts";
import {
  Users,
  FileText,
  BookOpen,
  TrendingUp,
  ArrowLeft,
  Download,
  Calendar,
  Globe,
  Target
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Analytics() {
  const [timeRange, setTimeRange] = useState("30d");

  // Mock data for charts
  const userGrowthData = [
    { month: "Jan", users: 850, contributors: 120, learners: 730 },
    { month: "Feb", users: 920, contributors: 135, learners: 785 },
    { month: "Mar", users: 1050, contributors: 158, learners: 892 },
    { month: "Apr", users: 1180, contributors: 175, learners: 1005 },
    { month: "May", users: 1320, contributors: 195, learners: 1125 },
    { month: "Jun", users: 1450, contributors: 218, learners: 1232 },
  ];

  const contentEngagementData = [
    { subject: "Mathematics", views: 4800, downloads: 1200, ratings: 4.8 },
    { subject: "Science", views: 4200, downloads: 1050, ratings: 4.6 },
    { subject: "History", views: 3600, downloads: 900, ratings: 4.7 },
    { subject: "Literature", views: 3200, downloads: 800, ratings: 4.5 },
    { subject: "Computer Science", views: 5200, downloads: 1400, ratings: 4.9 },
    { subject: "Biology", views: 3800, downloads: 950, ratings: 4.6 },
  ];

  const activityData = [
    { day: "Mon", uploads: 45, questions: 23, answers: 67 },
    { day: "Tue", uploads: 52, questions: 31, answers: 78 },
    { day: "Wed", uploads: 38, questions: 18, answers: 52 },
    { day: "Thu", uploads: 65, questions: 42, answers: 89 },
    { day: "Fri", uploads: 58, questions: 35, answers: 76 },
    { day: "Sat", uploads: 42, questions: 28, answers: 61 },
    { day: "Sun", uploads: 35, questions: 19, answers: 48 },
  ];

  const userRoleDistribution = [
    { name: "Learners", value: 1232, color: "#3b82f6" },
    { name: "Contributors", value: 218, color: "#10b981" },
    { name: "Admins", value: 12, color: "#f59e0b" },
  ];

  const platformStats = [
    {
      title: "Total Users",
      value: "1,462",
      change: "+12.5%",
      icon: <Users className="h-6 w-6" />,
      color: "text-blue-500"
    },
    {
      title: "Content Pieces",
      value: "5,847",
      change: "+23.1%",
      icon: <FileText className="h-6 w-6" />,
      color: "text-purple-500"
    },
    {
      title: "Courses",
      value: "156",
      change: "+8.2%",
      icon: <BookOpen className="h-6 w-6" />,
      color: "text-green-500"
    },
    {
      title: "Engagement Rate",
      value: "78.5%",
      change: "+5.3%",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "text-orange-500"
    },
  ];

  const handleExportData = () => {
    const analyticsData = {
      platform_stats: platformStats,
      user_growth: userGrowthData,
      content_engagement: contentEngagementData,
      activity_data: activityData,
      user_distribution: userRoleDistribution,
      generated_at: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(analyticsData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'classsync-analytics.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/dashboard/admin">
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </Button>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
                <p className="text-muted-foreground">
                  Comprehensive platform analytics and insights.
                </p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Last 7 days</SelectItem>
                  <SelectItem value="30d">Last 30 days</SelectItem>
                  <SelectItem value="90d">Last 90 days</SelectItem>
                  <SelectItem value="1y">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" onClick={handleExportData}>
                <Download className="mr-2 h-4 w-4" /> Export Data
              </Button>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            {platformStats.map((stat, i) => (
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

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {/* User Growth Chart */}
            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle>User Growth Trends</CardTitle>
                <CardDescription>
                  Monthly user registration and role distribution
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={userGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="users" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="contributors" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="learners" stackId="3" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* User Role Distribution */}
            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle>User Role Distribution</CardTitle>
                <CardDescription>
                  Current breakdown of user roles on the platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={userRoleDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={120}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {userRoleDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {/* Content Engagement */}
            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle>Content Engagement by Subject</CardTitle>
                <CardDescription>
                  Views and downloads across different subjects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={contentEngagementData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" angle={-45} textAnchor="end" height={80} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="views" fill="#3b82f6" name="Views" />
                    <Bar dataKey="downloads" fill="#10b981" name="Downloads" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Weekly Activity */}
            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle>Weekly Activity Patterns</CardTitle>
                <CardDescription>
                  Daily uploads, questions, and answers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="uploads" stroke="#3b82f6" strokeWidth={2} />
                    <Line type="monotone" dataKey="questions" stroke="#10b981" strokeWidth={2} />
                    <Line type="monotone" dataKey="answers" stroke="#f59e0b" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Metrics Table */}
          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle>Content Performance Metrics</CardTitle>
              <CardDescription>
                Detailed performance data for all content categories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Subject</th>
                      <th className="text-left p-4">Total Views</th>
                      <th className="text-left p-4">Downloads</th>
                      <th className="text-left p-4">Avg. Rating</th>
                      <th className="text-left p-4">Engagement Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contentEngagementData.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-4 font-medium">{item.subject}</td>
                        <td className="p-4">{item.views.toLocaleString()}</td>
                        <td className="p-4">{item.downloads.toLocaleString()}</td>
                        <td className="p-4">
                          <div className="flex items-center">
                            <span className="mr-1">{item.ratings}</span>
                            <span className="text-yellow-500">★</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full" 
                              style={{ width: `${(item.downloads / item.views) * 100}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {((item.downloads / item.views) * 100).toFixed(1)}%
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
