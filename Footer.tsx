import { Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart size={14} className="text-coral fill-coral" />
            <span>by I. Afrin Sahana</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/afrin-sahana-i-6210ab307"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-coral hover:bg-coral/10 transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:afrinsahana9@gmail.com"
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-coral hover:bg-coral/10 transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>

          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
