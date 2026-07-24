"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Verma",
      occupation: "Software Engineer",
      text: "I was always too shy to share my poetry. The Unmute Room gave me the safe space I didn't know I needed. The energy here is just pure magic.",
      photo: "https://i.pravatar.cc/150?u=a042581f4e29026024d"
    },
    {
      id: 2,
      name: "Sneha Nair",
      occupation: "Musician",
      text: "As an independent artist, finding an audience that actually listens is rare. Here, every single person is immersed in the art. It's beautiful.",
      photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
    },
    {
      id: 3,
      name: "Karan Desai",
      occupation: "Designer",
      text: "I walked in knowing absolutely nobody. I walked out with friends I now meet every weekend. It's more than an event, it's a family.",
      photo: "https://i.pravatar.cc/150?u=a04258114e29026702d"
    },
    {
      id: 4,
      name: "Ananya Patel",
      occupation: "Student",
      text: "The storytelling sessions made me cry and laugh in the span of 10 minutes. So much raw emotion. I'm definitely coming back.",
      photo: "https://i.pravatar.cc/150?u=a048581f4e29026701d"
    }
  ];

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Stories from the Community
          </motion.h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the people who make this community what it is.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="h-full bg-card hover:border-primary/50 transition-colors shadow-sm hover:shadow-md">
                      <CardContent className="p-6 flex flex-col justify-between h-full">
                        <div className="mb-6 relative">
                          <span className="text-6xl text-primary/20 absolute -top-4 -left-2 font-serif">"</span>
                          <p className="text-muted-foreground relative z-10 italic">
                            {testimonial.text}
                          </p>
                        </div>
                        <div className="flex items-center gap-4 mt-auto">
                          <Avatar>
                            <AvatarImage src={testimonial.photo} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.occupation}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
