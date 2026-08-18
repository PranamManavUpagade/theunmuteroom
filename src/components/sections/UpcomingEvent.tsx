"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Ticket, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import eventsData from "@/data/events.json";

const PAYU_CHECKOUT_URL = "https://u.payu.in/PAYUMN/wrE7toZcUSqh";

export function UpcomingEvent() {
  const upcomingEvent = eventsData.find((e) => e.status === "upcoming");
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (!upcomingEvent) return;
    
    const eventDate = new Date(upcomingEvent.date).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [upcomingEvent]);

  if (!upcomingEvent) return null;

  return (
    <section id="e1" className="py-24 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Event Details */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="default" className="bg-primary hover:bg-primary text-white">Next Event</Badge>
                {upcomingEvent.earlyBird && (
                  <Badge variant="secondary" className="bg-secondary text-white">Early Bird Available</Badge>
                )}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{upcomingEvent.name}</h2>
              
              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{new Date(upcomingEvent.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{upcomingEvent.time}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{upcomingEvent.venue}</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-4 gap-4"
            >
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center p-4 bg-muted/50 rounded-2xl border border-border/50">
                  <span className="text-3xl font-bold text-foreground">{value}</span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{unit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4">Agenda</h3>
              <div className="space-y-4">
                {upcomingEvent.agenda?.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border/50">
                    <span className="font-mono text-sm text-primary font-bold min-w-[80px] pt-1">{item.time}</span>
                    <span className="text-foreground font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Registration Card */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="sticky top-24"
            >
              <Card className="glass-card border-white/20 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 w-full bg-muted relative">
                    <iframe
                      src={upcomingEvent.googleMapsEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-end mb-8 border-b border-border pb-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Entry Pass</p>
                        <p className="text-4xl font-bold">₹{upcomingEvent.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground mb-1">Seats Left</p>
                        <p className="text-2xl font-bold text-secondary">{upcomingEvent.availableSeats}</p>
                      </div>
                    </div>

                    <Button
                      onClick={() => {
                        window.location.href = PAYU_CHECKOUT_URL;
                      }}
                      className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl shadow-[0_0_20px_rgba(91,33,182,0.3)] hover:shadow-[0_0_30px_rgba(91,33,182,0.5)] transition-all"
                    >
                      <Ticket className="w-5 h-5 mr-2" />
                      Reserve Your Spot
                    </Button>

                    <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
                      <CreditCard className="w-3 h-3" /> Secure payment via PayU
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
