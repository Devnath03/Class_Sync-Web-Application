
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquare,
  Send,
  Bot,
  User,
  Minimize2,
  Maximize2
} from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function AdminChatbot() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your ClassSync analytics assistant. I can help you analyze user data, content performance, and platform statistics. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);

  // Mock responses based on keywords
  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('user') || message.includes('users')) {
      return "Current platform statistics: 1,234 total users (874 learners, 298 contributors, 62 admins). User growth this month: +12%. Most active users are in Mathematics and Computer Science subjects.";
    } else if (message.includes('content') || message.includes('material')) {
      return "Content overview: 5,678 study materials uploaded. Top performing content categories: 1) Mathematics (23%), 2) Computer Science (19%), 3) Biology (15%). Average rating: 4.6/5 stars.";
    } else if (message.includes('revenue') || message.includes('money')) {
      return "Revenue insights: $47,580 this month (+18% vs last month). Premium subscriptions: 234 active. Top revenue sources: Course sales (68%), Premium features (22%), Partnerships (10%).";
    } else if (message.includes('performance') || message.includes('analytics')) {
      return "Platform performance: 98.7% uptime this month. Average page load time: 1.2s. Most visited sections: Dashboard (34%), Study Materials (28%), Flashcards (18%).";
    } else if (message.includes('help') || message.includes('commands')) {
      return "I can help you with: User analytics, Content performance, Revenue insights, Platform performance, Security reports. Just ask me about any of these topics!";
    } else {
      return "I understand you're asking about platform analytics. Could you be more specific? I can provide insights on users, content, revenue, performance, or security.";
    }
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: generateBotResponse(message),
      sender: 'bot',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, botResponse]);
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setIsMinimized(false)}
          className="rounded-full h-12 w-12 shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 h-96 z-50 glassmorphism shadow-xl">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-primary" />
            <div>
              <CardTitle className="text-sm">Analytics Assistant</CardTitle>
              <CardDescription className="text-xs">
                <Badge variant="secondary" className="text-xs">Online</Badge>
              </CardDescription>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMinimized(true)}
            className="h-6 w-6"
          >
            <Minimize2 className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0 flex flex-col h-full">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] rounded-lg p-3 ${
                    msg.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {msg.sender === 'bot' && <Bot className="h-4 w-4 mt-0.5 text-primary" />}
                    {msg.sender === 'user' && <User className="h-4 w-4 mt-0.5" />}
                    <div>
                      <p className="text-sm">{msg.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <div className="p-3 border-t">
          <div className="flex space-x-2">
            <Input
              placeholder="Ask about analytics..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="text-sm"
            />
            <Button size="icon" onClick={sendMessage} disabled={!message.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
