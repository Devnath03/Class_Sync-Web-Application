
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BookOpen,
  Book,
  Clock,
  Calendar,
  Award,
  TrendingUp,
  Star,
  FileText,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function LearnerDashboard() {
  // Mock data for the dashboard
  const recentMaterials = [
    {
      title: "Advanced Calculus Notes",
      subject: "Mathematics",
      author: "Prof. Smith",
      rating: 4.8,
      type: "PDF",
    },
    {
      title: "Organic Chemistry Formulas",
      subject: "Chemistry",
      author: "Dr. Johnson",
      rating: 4.5,
      type: "Document",
    },
    {
      title: "Literature Analysis: Shakespeare",
      subject: "English",
      author: "Sarah Williams",
      rating: 4.7,
      type: "Notes",
    }
  ];

  const myCourses = [
    {
      name: "Advanced Mathematics",
      progress: 68,
      nextTopic: "Complex Integrals",
    },
    {
      name: "Organic Chemistry",
      progress: 42,
      nextTopic: "Benzene Reactions",
    },
    {
      name: "World Literature",
      progress: 75,
      nextTopic: "Post-Modern Authors",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Learner Dashboard</h1>
          <p className="text-muted-foreground">
            Track your progress and continue your learning journey
          </p>
        </div>
        
        <div className="flex space-x-2">
          <Button>
            <BookOpen className="mr-2 h-4 w-4" /> Continue Learning
          </Button>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" /> Study Planner
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="glassmorphism col-span-2 md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <Calendar className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
            <p className="text-xs text-muted-foreground">
              Keep it up!
            </p>
          </CardContent>
        </Card>
        <Card className="glassmorphism col-span-2 md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Study Time</CardTitle>
            <Clock className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5 hrs</div>
            <p className="text-xs text-muted-foreground">
              This week
            </p>
          </CardContent>
        </Card>
        <Card className="glassmorphism col-span-2 md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total XP</CardTitle>
            <Award className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,480</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              +140 this week
            </p>
          </CardContent>
        </Card>
        <Card className="glassmorphism col-span-2 md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Rank</CardTitle>
            <Star className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Silver</div>
            <p className="text-xs text-muted-foreground">
              Top 25% of learners
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="glassmorphism">
          <CardHeader className="flex justify-between">
            <div>
              <CardTitle>Your Courses</CardTitle>
              <CardDescription>
                Track your progress across different subjects
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/learner/courses">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {myCourses.map((course, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{course.name}</p>
                    <span className="text-sm text-muted-foreground">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    Next topic: <span className="font-medium">{course.nextTopic}</span>
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              <Calendar className="mr-2 h-4 w-4" /> View Study Schedule
            </Button>
          </CardFooter>
        </Card>

        <Card className="glassmorphism">
          <CardHeader className="flex justify-between">
            <div>
              <CardTitle>Recent Study Materials</CardTitle>
              <CardDescription>
                Content you've recently viewed or saved
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/learner/materials">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMaterials.map((material, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {material.type === "PDF" ? (
                      <FileText className="h-5 w-5 text-primary" />
                    ) : (
                      <Book className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium leading-none">{material.title}</p>
                    <p className="text-sm text-muted-foreground">{material.subject} • {material.author}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 mr-1" />
                    <span className="text-sm">{material.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline">
              <FileText className="mr-2 h-4 w-4" /> Browse All Materials
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="glassmorphism">
        <CardHeader>
          <CardTitle>Your Flashcards</CardTitle>
          <CardDescription>
            Review your flashcards to reinforce your learning
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-24 flex flex-col justify-center space-y-2" variant="outline">
              <Book className="h-6 w-6 text-primary" />
              <div className="text-center">
                <div className="font-medium">Biology Terms</div>
                <div className="text-sm text-muted-foreground">42 cards</div>
              </div>
            </Button>
            <Button className="h-24 flex flex-col justify-center space-y-2" variant="outline">
              <Book className="h-6 w-6 text-primary" />
              <div className="text-center">
                <div className="font-medium">Physics Formulas</div>
                <div className="text-sm text-muted-foreground">28 cards</div>
              </div>
            </Button>
            <Button className="h-24 flex flex-col justify-center space-y-2" variant="outline">
              <Book className="h-6 w-6 text-primary" />
              <div className="text-center">
                <div className="font-medium">Spanish Vocabulary</div>
                <div className="text-sm text-muted-foreground">65 cards</div>
              </div>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="ghost" asChild>
            <Link to="/dashboard/learner/flashcards">
              View all flashcards <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
