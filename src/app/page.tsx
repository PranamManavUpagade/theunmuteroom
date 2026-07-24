import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatHappens } from "@/components/sections/WhatHappens";
import { UpcomingEvent } from "@/components/sections/UpcomingEvent";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <WhatHappens />
      <UpcomingEvent />
      <Gallery />
      <Testimonials />
      <Footer />
    </main>
  );
}
