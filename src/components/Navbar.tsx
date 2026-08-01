"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.svg" alt="The Unmute Room Logo" className="h-16 w-auto object-contain bg-white/90 p-1 rounded-md" />
          </a>

          <div className="hidden md:flex items-center gap-8 font-medium">
            
            <div className="flex items-center gap-4 border-l border-border pl-8">
              <div className="flex gap-4">
                         <a href="https://www.instagram.com/theunmuteroom/" target="_blank" rel="noopener noreferrer">
                           <Image src="/instagram.svg" alt="Instagram" width={30} height={30} />
                         </a>
                          <a href="https://chat.whatsapp.com/IMNB7lMxxRK9rBBIPQNR4Q" target="_blank" rel="noopener noreferrer">
                           <Image src="/whatsapp.svg" alt="WhatsApp" width={30} height={30} />
                         </a>
                        </div>
               
              <a href="https://chat.whatsapp.com/IMNB7lMxxRK9rBBIPQNR4Q"><Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-6">
                Join Us
              </Button></a>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <a href="https://www.instagram.com/theunmuteroom/" target="_blank" rel="noopener noreferrer" className="rounded-full p-1">
              <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://chat.whatsapp.com/IMNB7lMxxRK9rBBIPQNR4Q" target="_blank" rel="noopener noreferrer" className="rounded-full p-1">
              <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
