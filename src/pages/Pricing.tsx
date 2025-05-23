
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  CheckCircle,
  X,
  Star,
  Filter,
  Search,
  Users,
  Clock,
  BookOpen,
  Trophy,
  Brain,
  Shield
} from "lucide-react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started",
      monthlyPrice: 0,
      annualPrice: 0,
      popular: false,
      features: [
        "Access to 5 free courses",
        "Basic flashcards",
        "Community Q&A access",
        "Mobile app access",
        "Basic progress tracking"
      ],
      limitations: [
        "Limited course access",
        "No certificates",
        "Basic support only"
      ]
    },
    {
      name: "Student",
      description: "Ideal for individual learners",
      monthlyPrice: 19,
      annualPrice: 190,
      popular: true,
      features: [
        "Access to all courses",
        "Unlimited flashcards",
        "AI-powered recommendations",
        "Progress analytics",
        "Course certificates",
        "Priority support",
        "Download materials",
        "Mobile app access"
      ],
      limitations: [
        "Single user account"
      ]
    },
    {
      name: "Pro",
      description: "Best for serious learners",
      monthlyPrice: 39,
      annualPrice: 390,
      popular: false,
      features: [
        "Everything in Student",
        "Advanced AI tutoring",
        "Personalized study plans",
        "1-on-1 mentoring sessions",
        "Advanced analytics",
        "API access",
        "White-label options",
        "Custom integrations"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      description: "For organizations and institutions",
      monthlyPrice: 99,
      annualPrice: 990,
      popular: false,
      features: [
        "Everything in Pro",
        "Team management",
        "Bulk user accounts",
        "Custom branding",
        "Advanced reporting",
        "SSO integration",
        "Dedicated support",
        "Custom content creation",
        "On-premise deployment"
      ],
      limitations: []
    }
  ];

  const courses = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      category: "Technology",
      price: 299,
      originalPrice: 399,
      duration: "16 weeks",
      students: 12500,
      rating: 4.9,
      level: "Beginner to Advanced",
      description: "Master full-stack web development with HTML, CSS, JavaScript, React, Node.js, and more."
    },
    {
      id: 2,
      title: "Data Science & Machine Learning",
      category: "Technology",
      price: 349,
      originalPrice: 449,
      duration: "20 weeks",
      students: 8900,
      rating: 4.8,
      level: "Intermediate",
      description: "Learn Python, statistics, ML algorithms, and data visualization with real projects."
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      category: "Business",
      price: 199,
      originalPrice: 249,
      duration: "12 weeks",
      students: 15600,
      rating: 4.7,
      level: "Beginner",
      description: "Complete digital marketing course covering SEO, social media, PPC, and analytics."
    },
    {
      id: 4,
      title: "Advanced Mathematics Course",
      category: "Academic",
      price: 179,
      originalPrice: 229,
      duration: "14 weeks",
      students: 6200,
      rating: 4.9,
      level: "Advanced",
      description: "Master calculus, linear algebra, differential equations, and mathematical proofs."
    },
    {
      id: 5,
      title: "Creative Writing Workshop",
      category: "Arts",
      price: 149,
      originalPrice: 199,
      duration: "10 weeks",
      students: 4800,
      rating: 4.6,
      level: "All Levels",
      description: "Develop your writing skills with fiction, non-fiction, poetry, and screenwriting."
    },
    {
      id: 6,
      title: "Financial Planning & Investment",
      category: "Business",
      price: 229,
      originalPrice: 299,
      duration: "8 weeks",
      students: 9300,
      rating: 4.8,
      level: "Beginner",
      description: "Learn personal finance, investment strategies, and wealth building techniques."
    }
  ];

  const categories = ["all", "Technology", "Business", "Academic", "Arts"];
  const priceRanges = ["all", "under-200", "200-300", "300-plus"];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || course.category === categoryFilter;
    
    let matchesPrice = true;
    if (priceRange === "under-200") matchesPrice = course.price < 200;
    else if (priceRange === "200-300") matchesPrice = course.price >= 200 && course.price <= 300;
    else if (priceRange === "300-plus") matchesPrice = course.price > 300;
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Choose Your Learning Plan
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Flexible pricing options to fit your learning needs and budget.
              </p>
            </div>
          </div>
        </section>

        {/* Subscription Plans */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscription Plans</h2>
              
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className={`font-medium ${!isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
                  Monthly
                </span>
                <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
                <span className={`font-medium ${isAnnual ? 'text-primary' : 'text-muted-foreground'}`}>
                  Annual
                </span>
                <Badge variant="secondary" className="ml-2">Save 20%</Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan, index) => (
                <Card key={index} className={`glassmorphism relative ${plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''}`}>
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Most Popular
                    </Badge>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">
                        /{isAnnual ? 'year' : 'month'}
                      </span>
                    </div>
                    {isAnnual && plan.monthlyPrice > 0 && (
                      <div className="text-sm text-muted-foreground">
                        <span className="line-through">${plan.monthlyPrice * 12}/year</span>
                        <span className="text-green-600 ml-2">Save ${(plan.monthlyPrice * 12) - plan.annualPrice}</span>
                      </div>
                    )}
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      {plan.monthlyPrice === 0 ? "Get Started" : "Start Free Trial"}
                    </Button>
                    
                    <div className="space-y-2">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      
                      {plan.limitations.map((limitation, limitIndex) => (
                        <div key={limitIndex} className="flex items-center text-sm text-muted-foreground">
                          <X className="h-4 w-4 text-red-400 mr-2 flex-shrink-0" />
                          <span>{limitation}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Individual Courses */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Individual Courses</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Purchase individual courses for one-time access to specific topics.
              </p>
            </div>
            
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
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
                
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-200">Under $200</SelectItem>
                    <SelectItem value="200-300">$200 - $300</SelectItem>
                    <SelectItem value="300-plus">$300+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map(course => (
                <Card key={course.id} className="glassmorphism hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline">{course.category}</Badge>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
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
                    
                    <div className="text-sm">
                      <strong>Level:</strong> {course.level}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="space-y-1">
                        <div className="text-2xl font-bold text-primary">
                          ${course.price}
                        </div>
                        <div className="text-sm text-muted-foreground line-through">
                          ${course.originalPrice}
                        </div>
                      </div>
                      <Button>
                        Buy Course
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose ClassSync?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get the best value with our comprehensive learning platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">500+ Courses</h3>
                <p className="text-muted-foreground">
                  Access to our complete library of expert-created courses.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">AI-Powered</h3>
                <p className="text-muted-foreground">
                  Personalized learning experience with AI recommendations.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Certificates</h3>
                <p className="text-muted-foreground">
                  Earn recognized certificates upon course completion.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Money-Back Guarantee</h3>
                <p className="text-muted-foreground">
                  30-day money-back guarantee on all subscriptions.
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
