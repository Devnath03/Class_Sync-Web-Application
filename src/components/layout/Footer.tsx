
import { Link } from "react-router-dom";
import { Book, Mail, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <Book className="h-6 w-6 text-primary" strokeWidth={2.5} />
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ClassSync
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              The next-generation collaborative learning platform with advanced AI integration.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/features" className="text-muted-foreground hover:text-foreground">Features</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">Roadmap</Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">Changelog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">Documentation</Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">API Reference</Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">Help Center</Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">Community</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">Team</Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">Careers</Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-foreground">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ClassSync. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-foreground">Terms of Service</Link>
            <Link to="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link to="#" className="hover:text-foreground">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
