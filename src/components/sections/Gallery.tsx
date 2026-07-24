"use client";

import { motion } from "framer-motion";

export function Gallery() {
  const images = [
    "/gallery/events/event1.jpeg",
    "/gallery/events/event2.png",
    "/gallery/events/event3.jpeg",
    "/gallery/events/event4.png",
    "/gallery/events/event5.jpeg",
    "/gallery/events/event6.jpeg",
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
            Moments Captured
          </motion.h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            A glimpse into the magic that happens at The Unmute Room.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden rounded-xl aspect-square group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium">View Image</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
