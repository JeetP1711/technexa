import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function RegisterSection() {
  return (
    <section id="register" className="scroll-mt-20 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-2xl rounded-2xl border border-primary/20 bg-gradient-hero p-8 text-center shadow-glow sm:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold tracking-wider text-accent">
            REGISTRATIONS OPEN
          </span>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Ready to <span className="text-gradient">Innovate</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Form your team, prepare your innovation mindset, and register for Tech Nexa'26. Registration fee is just ₹50 per team.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdK25KH0uCznyexGkjXmHhY7nv-0csJ0EjIwkyuN2FrDrhLtA/viewform?usp=dialog" target="_blank" rel="noopener noreferrer" className="gap-2">
                <ExternalLink className="h-4 w-4" />
                Register via Google Form
              </a>
            </Button>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Team leader should fill the form with all member details.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
