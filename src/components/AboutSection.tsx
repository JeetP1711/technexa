import { motion } from "framer-motion";
import { Lightbulb, Users, Code, Presentation } from "lucide-react";

const highlights = [
  { icon: Lightbulb, title: "Innovation First", desc: "Original ideas only — no clones or pre-built projects allowed." },
  { icon: Users, title: "Cross-Year Teams", desc: "Teams of 4–7 from 1st, 2nd & 3rd year students working together." },
  { icon: Code, title: "Build From Scratch", desc: "Problem statement revealed on Day 1. Design & code on-site." },
  { icon: Presentation, title: "Professional Pitch", desc: "Present your working prototype to a faculty evaluation panel." },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            What is <span className="text-gradient">Tech Nexa'26</span>?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Tech Nexa'26 is a two-day innovation-focused coding event organized by Third Year IT students. It challenges participants to develop unique and original software solutions to real-world problems. Unlike typical hackathons that allow prepared ideas, this event emphasizes authentic innovation — teams must brainstorm, design, and implement their project during the hackathon itself.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            AI tools may be used for implementation support, but the core idea and problem-solving approach must be completely original and team-generated.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              className="group rounded-xl border border-border bg-card p-6 shadow-card transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                <h.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
