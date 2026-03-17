import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-hero pt-16">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-3xl animate-pulse-glow" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-primary">
            INNOVATION HACKATHON 2026
          </span>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Tech Nexa'26</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-display text-lg font-semibold text-muted-foreground sm:text-xl">
            Innovation & Product Development Challenge
          </p>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            A two-day innovation-driven coding competition where students brainstorm, design, and build real-world solutions from scratch.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#register">Register Now</a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#about">Learn More</a>
          </Button>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>2-Day Hackathon</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            <span>All Teams</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>On Campus</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
