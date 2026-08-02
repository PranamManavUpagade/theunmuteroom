"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradients */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background dark:from-primary/30 dark:via-background dark:to-background pointer-events-none" />
      <div className="absolute -left-[10%] top-[20%] w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 dark:opacity-30 pointer-events-none" />
      <div className="absolute right-[10%] bottom-[20%] w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-50 dark:opacity-30 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 text-center mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground"
        >
          Everyone has a story.
          <br />
          <span className="text-gradient">It's time to Unmute Yours.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-6 text-xl md:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto"
        >
          Music. Poetry. Stories. Conversations. Connections.
          <br className="hidden md:block" />
          <span className="text-foreground"> A community where strangers become friends.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center"
        >
          <a href="#e1"><Button size="lg" className="rounded-full text-lg px-8 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(91,33,182,0.4)] transition-all hover:scale-105">
            Join Our Next Event
          </Button></a>
          <a href="https://chat.whatsapp.com/IMNB7lMxxRK9rBBIPQNR4Q"><Button size="lg" variant="outline" className="rounded-full text-lg px-8 h-14 border-primary/20 hover:bg-primary/5 transition-all hover:scale-105">
            Become a Member
          </Button></a>
          <a href="/jamming-song-list"><Button size="lg" variant="secondary" className="rounded-full text-lg px-8 h-14 shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all hover:scale-105">
            Jamming Song List
          </Button></a>
        </motion.div>
      </div>

      {/* Floating Elements Animation */}
      <motion.div 
        animate={{ y: [0, -20, 0] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute left-[15%] top-[30%] text-4xl opacity-20 pointer-events-none"
      >
        🎵
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
        className="absolute right-[20%] top-[40%] text-5xl opacity-20 pointer-events-none"
      >
        🎤
      </motion.div>
      <motion.div 
        animate={{ y: [0, -15, 0] }} 
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 2 }}
        className="absolute left-[25%] bottom-[30%] text-3xl opacity-20 pointer-events-none"
      >
        ✨
      </motion.div>
    </section>
  );
}
