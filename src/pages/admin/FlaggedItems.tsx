
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  Flag,
  Search,
  Eye,
  CheckCircle,
  XCircle,
  ArrowLeft,
  AlertTriangle,
  FileText,
  MessageSquare,
  User
} from "lucide-react";
import { Link } from "react-router-dom";

export default function FlaggedItems() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [severityFilter, setSeverityFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const flaggedItems = [
    {
      id: 1,
      title: "Inappropriate Math Notes",
      type: "Content",
      contentType: "Notes",
      author: "John Doe",
      reportedBy: "Sarah Smith",
      reason: "Inappropriate content",
      severity: "High",
      status: "Pending",
      reportDate: "2024-01-20",
      description: "Contains offensive language and inappropriate examples"
    },
    {
      id: 2,
      title: "Spam Comment on Chemistry Q&A",
      type: "Comment",
      contentType: "Q&A Reply",
      author: "Mike Johnson",
      reportedBy: "Emily Wilson",
      reason: "Spam",
      severity: "Medium",
      status: "Reviewed",
      reportDate: "2024-01-19",
      description: "Posting irrelevant promotional content in academic discussion"
    },
    {
      id: 3,
      title: "Plagiarized Biology Flashcards",
      type: "Content",
      contentType: "Flashcards",
      author: "Lisa Garcia",
      reportedBy: "Dr. Brown",
      reason: "Copyright violation",
      severity: "High",
      status: "Pending",
      reportDate: "2024-01-18",
      description: "Flashcards copied directly from published textbook without permission"
    },
    {
      id: 4,
      title: "Harassment in Study Group",
      type: "Behavior",
      contentType: "Message",
      author: "Alex Wilson",
      reportedBy: "Multiple Users",
      reason: "Harassment",
      severity: "Critical",
      status: "Under Investigation",
      reportDate: "2024-01-17",
      description: "Multiple reports of bullying and inappropriate behavior in study groups"
    },
    {
      id: 5,
      title: "False Information in History Notes",
      type: "Content",
      contentType: "Notes",
      author: "David Chen",
      reportedBy: "Prof. Martinez",
      reason: "Misinformation",
      severity: "Medium",
      status: "Resolved",
      reportDate: "2024-01-15",
      description: "Contains factually incorrect historical information that could mislead students"
    }
  ];

  const filteredItems = flaggedItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "all" || item.type === typeFilter;
    const matchesSeverity = severityFilter === "all" || item.severity === severityFilter;
    const matchesStatus = statusFilter === "all" || item.status === statusFilter;
    
    return matchesSearch && matchesType && matchesSeverity && matchesStatus;
  });

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "High": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "Medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Low": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Reviewed": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Under Investigation": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "Resolved": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Content": return <FileText className="h-4 w-4" />;
      case "Comment": return <MessageSquare className="h-4 w-4" />;
      case "Behavior": return <User className="h-4 w-4" />;
      default: return <Flag className="h-4 w-4" />;
    }
  };

  const handleApprove = (id: number) => {
    console.log("Approving item:", id);
  };

  const handleReject = (id: number) => {
    console.log("Rejecting item:", id);
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
                <h1 className="text-3xl font-bold tracking-tight">Flagged Items</h1>
                <p className="text-muted-foreground">
                  Review and moderate flagged content and reported behavior.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="glassmorphism">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Flagged</p>
                    <p className="text-2xl font-bold">{flaggedItems.length}</p>
                  </div>
                  <Flag className="h-8 w-8 text-red-500" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Pending Review</p>
                    <p className="text-2xl font-bold">{flaggedItems.filter(item => item.status === 'Pending').length}</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                    <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Critical Issues</p>
                    <p className="text-2xl font-bold">{flaggedItems.filter(item => item.severity === 'Critical').length}</p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                    <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Resolved</p>
                    <p className="text-2xl font-bold">{flaggedItems.filter(item => item.status === 'Resolved').length}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="glassmorphism mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search flagged items..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="Content">Content</SelectItem>
                    <SelectItem value="Comment">Comment</SelectItem>
                    <SelectItem value="Behavior">Behavior</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={severityFilter} onValueChange={setSeverityFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Severities</SelectItem>
                    <SelectItem value="Critical">Critical</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Reviewed">Reviewed</SelectItem>
                    <SelectItem value="Under Investigation">Under Investigation</SelectItem>
                    <SelectItem value="Resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mt-4 text-sm text-muted-foreground">
                Showing {filteredItems.length} of {flaggedItems.length} flagged items
              </div>
            </CardContent>
          </Card>

          {/* Flagged Items Table */}
          <Card className="glassmorphism">
            <CardHeader>
              <CardTitle>Flagged Items</CardTitle>
              <CardDescription>
                Review and moderate flagged content and reported behavior
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Reported By</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Severity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              {getTypeIcon(item.type)}
                            </div>
                            <div>
                              <div className="font-medium">{item.title}</div>
                              <div className="text-sm text-muted-foreground">{item.contentType}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{item.type}</Badge>
                        </TableCell>
                        <TableCell>{item.author}</TableCell>
                        <TableCell>{item.reportedBy}</TableCell>
                        <TableCell>{item.reason}</TableCell>
                        <TableCell>
                          <Badge className={getSeverityColor(item.severity)}>
                            {item.severity}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(item.status)}>
                            {item.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => handleApprove(item.id)}
                            >
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => handleReject(item.id)}
                            >
                              <XCircle className="h-4 w-4 text-red-600" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              
              {filteredItems.length === 0 && (
                <div className="text-center py-8">
                  <Flag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No flagged items found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search criteria or filters.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
