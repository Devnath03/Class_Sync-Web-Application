
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
  Lightbulb,
  Target,
  Zap,
  Shield,
  Globe,
  Clock
} from "lucide-react";

export default function LearnMore() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Discover the Future of Learning
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                ClassSync combines cutting-edge AI technology with collaborative learning to create 
                the most advanced educational platform available today.
              </p>
            </div>
          </div>
        </section>

        {/* Educational Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Educational Content</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Access a vast library of educational resources designed to enhance your learning journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="glassmorphism hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                  </div>
                  <CardTitle>Interactive Courses</CardTitle>
                  <CardDescription>
                    Comprehensive courses with video lectures, quizzes, and hands-on projects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">HD Video Content</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Interactive Quizzes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Progress Tracking</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                  </div>
                  <CardTitle>AI-Powered Learning</CardTitle>
                  <CardDescription>
                    Personalized learning paths adapted to your pace and learning style.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Adaptive Learning</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Smart Recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Performance Analytics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600 dark:text-green-300" />
                  </div>
                  <CardTitle>Collaborative Learning</CardTitle>
                  <CardDescription>
                    Learn together with peers through discussion forums and group projects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Discussion Forums</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Group Projects</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Peer Reviews</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-yellow-600 dark:text-yellow-300" />
                  </div>
                  <CardTitle>Study Materials</CardTitle>
                  <CardDescription>
                    Access thousands of notes, flashcards, and study guides created by experts.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Expert-Created Content</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Downloadable Resources</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Regular Updates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
                    <Trophy className="h-6 w-6 text-red-600 dark:text-red-300" />
                  </div>
                  <CardTitle>Gamified Experience</CardTitle>
                  <CardDescription>
                    Earn points, badges, and compete with friends to stay motivated.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Achievement System</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Leaderboards</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Weekly Challenges</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glassmorphism hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-300" />
                  </div>
                  <CardTitle>Secure Platform</CardTitle>
                  <CardDescription>
                    Your data is protected with enterprise-grade security measures.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">End-to-End Encryption</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">GDPR Compliant</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Regular Security Audits</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Learning Methodology */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Learning Methodology</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Based on proven educational research and enhanced with modern technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Active Learning</h3>
                <p className="text-muted-foreground">
                  Engage with content through interactive exercises and real-world applications.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Goal-Oriented</h3>
                <p className="text-muted-foreground">
                  Set clear learning objectives and track your progress towards achieving them.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Adaptive Pace</h3>
                <p className="text-muted-foreground">
                  Learn at your own speed with AI that adapts to your learning style and pace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of learners who have transformed their education with ClassSync.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/signup">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/features">View Courses</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
