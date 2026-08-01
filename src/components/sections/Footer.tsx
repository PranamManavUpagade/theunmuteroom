import { Heart, MessageCircle, Camera } from "lucide-react";
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <img src="/logo.svg" alt="The Unmute Room Logo" className="h-20 w-auto object-contain bg-white/90 p-2 rounded-md mb-6" />
          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed text-center">
            A safe space for self-expression, art, and human connection. We believe that everyone has a story, and every story deserves a stage.
          </p>
          <div className="flex gap-4">
           <a href="https://www.instagram.com/theunmuteroom/" target="_blank" rel="noopener noreferrer">
             <Image src="/instagram.svg" alt="Instagram" width={30} height={30} />
           </a>
            <a href="https://chat.whatsapp.com/IMNB7lMxxRK9rBBIPQNR4Q" target="_blank" rel="noopener noreferrer">
             <Image src="/whatsapp.svg" alt="WhatsApp" width={30} height={30} />
           </a>
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
