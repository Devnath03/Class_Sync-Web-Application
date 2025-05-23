import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ClassroomModel } from "@/components/3d/ClassroomModel";
import { BookModel } from "@/components/3d/BookModel";
import {
  BookOpen,
  Brain,
  Calculator,
  Atom,
  Globe,
  Code,
  Heart,
  Palette,
  Search,
  Filter,
  Star,
  Clock,
  Users,
  CheckCircle
} from "lucide-react";

export default function Features() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [sortBy, setSortBy] = useState("popularity");
  const [activeModel, setActiveModel] = useState<"classroom" | "book">("classroom");

  const courses = [
    {
      id: 1,
      title: "Advanced Mathematics",
      category: "Mathematics",
      level: "Advanced",
      price: 199,
      duration: "12 weeks",
      students: 2500,
      rating: 4.9,
      description: "Master calculus, linear algebra, and advanced mathematical concepts.",
      features: ["Video Lectures", "Practice Problems", "AI Tutor", "Certificate"],
      icon: <Calculator className="h-6 w-6" />,
      popular: true
    },
    {
      id: 2,
      title: "Introduction to Programming",
      category: "Computer Science",
      level: "Beginner",
      price: 149,
      duration: "8 weeks",
      students: 5200,
      rating: 4.8,
      description: "Learn programming fundamentals with Python and JavaScript.",
      features: ["Hands-on Projects", "Code Reviews", "Mentorship", "Certificate"],
      icon: <Code className="h-6 w-6" />,
      popular: false
    },
    {
      id: 3,
      title: "Physics for Engineers",
      category: "Physics",
      level: "Intermediate",
      price: 179,
      duration: "10 weeks",
      students: 1800,
      rating: 4.7,
      description: "Applied physics concepts for engineering applications.",
      features: ["Lab Simulations", "Problem Sets", "Study Groups", "Certificate"],
      icon: <Atom className="h-6 w-6" />,
      popular: false
    },
    {
      id: 4,
      title: "World History & Culture",
      category: "History",
      level: "Beginner",
      price: 129,
      duration: "6 weeks",
      students: 3100,
      rating: 4.6,
      description: "Explore major historical events and cultural developments.",
      features: ["Interactive Timeline", "Virtual Tours", "Discussions", "Certificate"],
      icon: <Globe className="h-6 w-6" />,
      popular: false
    },
    {
      id: 5,
      title: "Cognitive Psychology",
      category: "Psychology",
      level: "Intermediate",
      price: 159,
      duration: "9 weeks",
      students: 2200,
      rating: 4.8,
      description: "Understanding how the mind processes information and learns.",
      features: ["Case Studies", "Research Methods", "Peer Reviews", "Certificate"],
      icon: <Brain className="h-6 w-6" />,
      popular: false
    },
    {
      id: 6,
      title: "Human Anatomy & Physiology",
      category: "Biology",
      level: "Advanced",
      price: 219,
      duration: "14 weeks",
      students: 1900,
      rating: 4.9,
      description: "Comprehensive study of human body systems and functions.",
      features: ["3D Models", "Virtual Dissection", "Medical Cases", "Certificate"],
      icon: <Heart className="h-6 w-6" />,
      popular: true
    },
    {
      id: 7,
      title: "Digital Art & Design",
      category: "Art",
      level: "Beginner",
      price: 139,
      duration: "7 weeks",
      students: 2800,
      rating: 4.5,
      description: "Create stunning digital artwork using modern design tools.",
      features: ["Design Projects", "Portfolio Building", "Critique Sessions", "Certificate"],
      icon: <Palette className="h-6 w-6" />,
      popular: false
    },
    {
      id: 8,
      title: "Data Science Fundamentals",
      category: "Computer Science",
      level: "Intermediate",
      price: 189,
      duration: "11 weeks",
      students: 4100,
      rating: 4.8,
      description: "Learn data analysis, visualization, and machine learning basics.",
      features: ["Real Datasets", "Python/R Programming", "Projects", "Certificate"],
      icon: <Brain className="h-6 w-6" />,
      popular: true
    }
  ];

  const categories = ["all", "Mathematics", "Computer Science", "Physics", "History", "Psychology", "Biology", "Art"];
  const levels = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter;
    const matchesLevel = levelFilter === "all" || course.level === levelFilter;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "students":
        return b.students - a.students;
      default: // popularity
        return b.students - a.students;
    }
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-8 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Explore Our Features
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover high-quality courses designed by experts to help you achieve your learning goals.
              </p>
            </div>

            {/* 3D Model Toggle */}
            <div className="flex justify-center gap-4 mb-6">
              <Button 
                variant={activeModel === "classroom" ? "default" : "outline"} 
                onClick={() => setActiveModel("classroom")}
              >
                Virtual Classroom
              </Button>
              <Button 
                variant={activeModel === "book" ? "default" : "outline"} 
                onClick={() => setActiveModel("book")}
              >
                Interactive Book
              </Button>
            </div>

            {/* 3D Model Display */}
            <div className="max-w-3xl mx-auto mb-8 glassmorphism rounded-lg p-1">
              {activeModel === "classroom" ? (
                <ClassroomModel />
              ) : (
                <BookModel />
              )}
            </div>
            
            <div className="text-center mt-4 mb-8">
              <p className="text-muted-foreground mb-4">
                {activeModel === "classroom" 
                  ? "Experience our virtual classroom environment with interactive 3D models."
                  : "Explore our digital content through interactive 3D representations."}
              </p>
              <Button size="lg">
                Explore Class Content
              </Button>
            </div>
          </div>
        </section>

        {/* Filters and Search */}
        <section className="py-8 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search courses..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger className="w-full sm:w-40">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map(level => (
                      <SelectItem key={level} value={level}>
                        {level === "all" ? "All Levels" : level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="students">Most Students</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="mt-4 text-sm text-muted-foreground">
              Showing {sortedCourses.length} of {courses.length} courses
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedCourses.map(course => (
                <Card key={course.id} className="glassmorphism hover:shadow-lg transition-all group">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        {course.icon}
                      </div>
                      {course.popular && <Badge variant="secondary">Popular</Badge>}
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-primary">
                          ${course.price}
                        </div>
                        <Button size="sm" className="group-hover:shadow-md transition-all">
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {sortedCourses.length === 0 && (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No courses found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria or filters.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Why Choose Our Courses */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Courses?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the difference with our expertly crafted curriculum and innovative learning approach.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Expert Instructors</h3>
                <p className="text-muted-foreground">
                  Learn from industry professionals and academic experts with years of experience.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI-Enhanced Learning</h3>
                <p className="text-muted-foreground">
                  Benefit from personalized learning paths and intelligent recommendations.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Community Support</h3>
                <p className="text-muted-foreground">
                  Join a vibrant community of learners and get support when you need it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
