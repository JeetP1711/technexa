import { motion } from "framer-motion";
import { ClipboardList, Filter, Rocket, Trophy } from "lucide-react";

const phases = [
  {
    icon: ClipboardList,
    phase: "Phase 1",
    title: "Registration & Screening",
    items: [
      "Team leaders submit registration form with team details",
      "Briefly explain innovation approach & interest area",
      "Evaluation tests team composition & innovation potential",
      "Registration fee: ₹50 per team",
    ],
  },
  {
    icon: Filter,
    phase: "Selection",
    title: "Team Shortlisting",
    items: [
      "Selected teams proceed to the 2nd-day hackathon",
    ],
  },
  {
    icon: Rocket,
    phase: "Phase 2",
    title: "2-Day Hackathon",
    items: [
      "Problem statement announced on Day 1",
      "Brainstorm, design & implement on-campus",
      "Build a working software prototype",
      "AI tools allowed for coding only — not for core idea",
    ],
  },
  {
    icon: Trophy,
    phase: "Finale",
    title: "Presentation & Judging",
    items: [
      "Present working prototype to faculty panel",
      "Formal attire required",
      "Explain problem, solution, tech stack & scalability",
      "Surprise rounds or guest judges possible",
    ],
  },
];

export function StructureSection() {
  return (
    <section id="structure" className="scroll-mt-20 bg-gradient-hero py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Event <span className="text-gradient">Structure</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From registration to the grand finale — here's how Tech Nexa'26 unfolds.
          </p>
        </motion.div>

        <div className="relative mt-16">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                className={`flex flex-col items-center gap-6 lg:flex-row ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex-1">
                  <div className="rounded-xl border border-border bg-card p-6 shadow-card">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                        <p.icon className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold tracking-wider text-primary">{p.phase}</span>
                        <h3 className="font-display text-lg font-bold">{p.title}</h3>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {p.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden h-4 w-4 shrink-0 rounded-full border-2 border-primary bg-background lg:block" />

                <div className="hidden flex-1 lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
