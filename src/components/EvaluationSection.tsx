import { motion } from "framer-motion";
import { Star } from "lucide-react";

const criteria = [
  { label: "Innovation & Originality", desc: "How unique and creative is the idea?" },
  { label: "Technical Implementation", desc: "Quality of code, architecture, and tech stack." },
  { label: "Product Usability", desc: "User experience, design, and practical value." },
  { label: "Problem Relevance", desc: "Does the solution address a real-world need?" },
  { label: "Team Collaboration", desc: "Effective distribution of roles and teamwork." },
  { label: "Presentation Quality", desc: "Clarity, professionalism, and demo effectiveness." },
];

export function EvaluationSection() {
  return (
    <section id="evaluation" className="scroll-mt-20 bg-gradient-hero py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Evaluation <span className="text-gradient">Criteria</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Projects will be judged by a faculty panel based on these key parameters.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {criteria.map((c, i) => (
            <motion.div
              key={c.label}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-primary">
                <Star className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold">{c.label}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
