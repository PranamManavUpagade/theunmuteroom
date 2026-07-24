import { Heart, Music2, MessageCircle, MessageSquare, Camera, Globe, Video } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img src="/logo.svg" alt="The Unmute Room Logo" className="h-20 w-auto object-contain bg-white/90 p-2 rounded-md mb-6" />
            <p className="text-muted-foreground max-w-sm mb-6 leading-relaxed">
              A safe space for self-expression, art, and human connection. We believe that everyone has a story, and every story deserves a stage.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-blue-600 hover:text-white transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-red-600 hover:text-white transition-all">
                <Video className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-green-500 hover:text-white transition-all">
                <Music2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-[#5865F2] hover:text-white transition-all">
                <MessageSquare className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-green-600 hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Community</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Upcoming Events</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Past Highlights</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Featured Artists</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Become a Member</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Volunteer with Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact & Legal</h4>
            <ul className="space-y-3">
              <li><a href="mailto:hello@unmuteroom.com" className="text-muted-foreground hover:text-primary transition-colors">hello@unmuteroom.com</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Partner With Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cancellation Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} The Unmute Room. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by The Unmute Room
          </p>
        </div>
      </div>
    </footer>
  );
}
