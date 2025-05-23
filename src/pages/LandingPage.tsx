
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  BookOpen,
  Brain,
  Users,
  Trophy,
  CheckCircle,
  FileText,
  Book,
  MessageSquare,
  Star,
  ArrowRight,
  Award,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-28 pb-20 relative">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 space-y-6 text-center md:text-left mb-10 md:mb-0 animate-fade-in">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Advanced Collaborative Learning Platform
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  Transform your learning experience with AI-powered tools and collaborative features.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button size="lg" asChild>
                    <Link to="/signup">
                      Get Started <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/learn-more">Learn More</Link>
                  </Button>
                </div>
              </div>
              
              <div className="md:w-1/2 relative animate-fade-in">
                <div className="w-full h-64 md:h-96 relative">
                  <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl animate-pulse-soft" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                      <div className="absolute inset-0 animate-float">
                        <div className="absolute inset-0 border border-primary/30 rounded-full" />
                        <div className="absolute inset-2 border border-primary/20 rounded-full" />
                        <div className="absolute inset-4 border border-primary/10 rounded-full" />
                        <div className="absolute inset-6 border border-primary/5 rounded-full" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen className="h-24 w-24 text-primary animate-pulse-soft" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                ClassSync offers a comprehensive suite of tools designed to enhance your learning experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hero-card overflow-hidden transform transition-all hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">AI-Powered Learning</h3>
                  <p className="text-muted-foreground">
                    Smart recommendations and personalized learning paths tailored to your unique needs.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hero-card overflow-hidden transform transition-all hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Smart Notes System</h3>
                  <p className="text-muted-foreground">
                    Upload, organize and share notes with advanced tagging and search capabilities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hero-card overflow-hidden transform transition-all hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Book className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Interactive Flashcards</h3>
                  <p className="text-muted-foreground">
                    Create and study flashcards with spaced repetition for optimal retention.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hero-card overflow-hidden transform transition-all hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Collaborative Q&A</h3>
                  <p className="text-muted-foreground">
                    Ask questions, get answers, and discuss topics with peers and experts.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hero-card overflow-hidden transform transition-all hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Gamified Experience</h3>
                  <p className="text-muted-foreground">
                    Earn points, badges, and climb leaderboards as you learn and contribute.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hero-card overflow-hidden transform transition-all hover:scale-105">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Role-Based Access</h3>
                  <p className="text-muted-foreground">
                    Custom dashboards and features for admins, contributors, and learners.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Awards & Recognition</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                ClassSync has been recognized by leading educational and technology organizations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="glassmorphism text-center p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Award className="h-12 w-12 text-yellow-500" />
                  <h3 className="font-bold">Best EdTech Innovation</h3>
                  <p className="text-sm text-muted-foreground">EdTech Awards 2024</p>
                </div>
              </Card>
              
              <Card className="glassmorphism text-center p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Trophy className="h-12 w-12 text-blue-500" />
                  <h3 className="font-bold">Excellence in AI Education</h3>
                  <p className="text-sm text-muted-foreground">AI Learning Summit 2024</p>
                </div>
              </Card>
              
              <Card className="glassmorphism text-center p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Star className="h-12 w-12 text-purple-500" />
                  <h3 className="font-bold">Top Learning Platform</h3>
                  <p className="text-sm text-muted-foreground">Tech Innovation Awards</p>
                </div>
              </Card>
              
              <Card className="glassmorphism text-center p-6">
                <div className="flex flex-col items-center space-y-4">
                  <Users className="h-12 w-12 text-green-500" />
                  <h3 className="font-bold">Community Choice Award</h3>
                  <p className="text-sm text-muted-foreground">Global EdTech Summit</p>
                </div>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Stats */}
        <section className="py-16 bg-hero-pattern text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Stats</h2>
              <p className="text-xl opacity-80 max-w-2xl mx-auto">
                Join thousands of users already enhancing their learning experience.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">10K+</div>
                <div className="text-lg opacity-80">Active Users</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">50K+</div>
                <div className="text-lg opacity-80">Study Materials</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">200K+</div>
                <div className="text-lg opacity-80">Flashcards</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold">95%</div>
                <div className="text-lg opacity-80">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                ClassSync has helped thousands of users improve their learning outcomes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glassmorphism">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  </div>
                  <p className="text-muted-foreground">
                    "ClassSync revolutionized how I study. The flashcard system helped me ace my exams!"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">University Student</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glassmorphism">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  </div>
                  <p className="text-muted-foreground">
                    "As a teacher, the admin features give me complete control over my students' learning materials."
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-medium">Dr. Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Professor</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glassmorphism">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  </div>
                  <p className="text-muted-foreground">
                    "The gamification elements keep me motivated. I love seeing my streak grow every day!"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-medium">James Wilson</p>
                    <p className="text-sm text-muted-foreground">High School Student</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-primary/20 to-accent/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Learning?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join ClassSync today and experience a new way of collaborative learning.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/signup">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/learn-more">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
