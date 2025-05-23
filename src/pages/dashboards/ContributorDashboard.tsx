
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  FileUp,
  Book,
  FileText,
  Star,
  MessageSquare,
  TrendingUp,
  ChevronRight,
  Plus
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ContributorDashboard() {
  // Mock data for the dashboard
  const myNotes = [
    {
      title: "Advanced Calculus Notes",
      subject: "Mathematics",
      views: 156,
      likes: 43,
      date: "2 days ago",
    },
    {
      title: "Organic Chemistry Formulas",
      subject: "Chemistry",
      views: 98,
      likes: 21,
      date: "1 week ago",
    },
    {
      title: "Literature Analysis: Shakespeare",
      subject: "English",
      views: 76,
      likes: 18,
      date: "2 weeks ago",
    }
  ];

  const myFlashcards = [
    {
      title: "Biology Terms",
      cards: 42,
      progress: 75,
    },
    {
      title: "Physics Formulas",
      cards: 28,
      progress: 50,
    },
    {
      title: "Spanish Vocabulary",
      cards: 65,
      progress: 30,
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contributor Dashboard</h1>
          <p className="text-muted-foreground">
            Create, manage, and share your academic content
          </p>
        </div>
        
        <div className="flex space-x-2">
          <Button>
            <FileUp className="mr-2 h-4 w-4" /> Upload Notes
          </Button>
          <Button variant="outline">
            <Book className="mr-2 h-4 w-4" /> Create Flashcards
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="glassmorphism col-span-2 md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">My Notes</CardTitle>
            <FileText className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +2 new this month
            </p>
          </CardContent>
        </Card>
        <Card className="glassmorphism col-span-2 md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">My Flashcard Sets</CardTitle>
            <Book className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              135 cards total
            </p>
          </CardContent>
        </Card>
        <Card className="glassmorphism col-span-2 md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Star className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,204</div>
            <p className="text-xs text-muted-foreground">
              +18% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="glassmorphism col-span-2 md:col-span-1">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Contributions Rank</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#14</div>
            <p className="text-xs text-muted-foreground">
              Top 5% of contributors
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="glassmorphism">
          <CardHeader className="flex justify-between">
            <div>
              <CardTitle>Recent Notes</CardTitle>
              <CardDescription>
                Your most recently uploaded study materials
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/contributor/notes">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myNotes.map((note, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="font-medium leading-none">{note.title}</p>
                    <p className="text-sm text-muted-foreground">{note.subject}</p>
                  </div>
                  <div className="text-right text-sm">
                    <div className="flex items-center justify-end space-x-2">
                      <span className="flex items-center text-muted-foreground">
                        <Star className="mr-1 h-3 w-3" /> {note.likes}
                      </span>
                      <span className="text-muted-foreground">{note.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline" asChild>
              <Link to="/dashboard/contributor/notes/new">
                <Plus className="mr-2 h-4 w-4" /> Create New Note
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="glassmorphism">
          <CardHeader className="flex justify-between">
            <div>
              <CardTitle>Flashcard Sets</CardTitle>
              <CardDescription>
                Your study decks and memorization progress
              </CardDescription>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/dashboard/contributor/flashcards">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {myFlashcards.map((deck, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Book className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{deck.title}</p>
                        <p className="text-sm text-muted-foreground">{deck.cards} cards</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Progress value={deck.progress} className="h-2" />
                    <span className="text-sm text-muted-foreground">{deck.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant="outline" asChild>
              <Link to="/dashboard/contributor/flashcards/new">
                <Plus className="mr-2 h-4 w-4" /> Create New Deck
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="glassmorphism">
        <CardHeader>
          <CardTitle>Recent Community Questions</CardTitle>
          <CardDescription>
            Help answer questions related to your expertise
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">How do I solve this derivative problem?</p>
                  <p className="text-sm text-muted-foreground">Math - Calculus • 2 hours ago</p>
                </div>
              </div>
              <Button size="sm">Answer</Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">What's the difference between mitosis and meiosis?</p>
                  <p className="text-sm text-muted-foreground">Biology • 3 hours ago</p>
                </div>
              </div>
              <Button size="sm">Answer</Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">How to analyze themes in Hamlet?</p>
                  <p className="text-sm text-muted-foreground">Literature • 5 hours ago</p>
                </div>
              </div>
              <Button size="sm">Answer</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="ghost" asChild>
            <Link to="/dashboard/contributor/questions">
              View all questions <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
