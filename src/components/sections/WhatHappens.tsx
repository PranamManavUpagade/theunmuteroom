"use client";

import { motion } from "framer-motion";
import { Mic, Music, BookOpen, MessageSquare, Users, Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function WhatHappens() {
  const activities = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Open Mic",
      description: "Step up to the mic and share your voice in a completely judgment-free zone.",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music Performances",
      description: "Experience soul-stirring live acoustic sets from independent artists.",
      color: "text-secondary",
      bg: "bg-secondary/10"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Poetry",
      description: "Listen to raw, emotional spoken word poetry that tugs at your heartstrings.",
      color: "text-accent",
      bg: "bg-accent/10"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Storytelling",
      description: "Real people sharing real stories. Tales of love, loss, hope, and humanity.",
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Networking",
      description: "Meet fellow creatives, artists, and art enthusiasts in your city.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Conversations",
      description: "Deep, late-night style conversations over coffee and snacks.",
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            What Happens Here?
          </motion.h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Every event is a unique curation of art, conversations, and experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className={`p-3 rounded-2xl ${activity.bg} ${activity.color} group-hover:scale-110 transition-transform`}>
                    {activity.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{activity.title}</h3>
                    <p className="text-muted-foreground">{activity.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
