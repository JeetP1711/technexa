import { motion } from "framer-motion";
import { Shield, UserCheck, AlertTriangle, Wrench } from "lucide-react";

const ruleGroups = [
  {
    icon: UserCheck,
    title: "Team Composition",
    rules: [
      "Team size: minimum 5, maximum 8 members",
      "Every member must have a defined role",
      "Every Team must have at least 1-2 female members",
    ],
  },
  {
    icon: Wrench,
    title: "Team Roles",
    rules: [
      "Team Leader / Project Manager",
      "Backend Developer",
      "Frontend Developer",
      "UI/UX Designer",
      "Software Tester / Quality Analyst",
      "Research & Documentation Lead",
    ],
  },
  {
    icon: Shield,
    title: "Project Guidelines",
    rules: [
      "Project must be 100% original — no clones",
      "No e-commerce, social media, or common app clones",
      "AI tools only for coding assistance, not core ideas",
      "All work must be done on campus during the event",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Important Notes",
    rules: [
      "Registration fee: ₹50 per team",
      "Formal attire required for final presentation",
      "Teams must bring their own laptops",
      "Internet & Wi-Fi provided on campus",
      "Surprise evaluation rounds may be included",
    ],
  },
];

export function RulesSection() {
  return (
    <section id="rules" className="scroll-mt-20 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Rules & <span className="text-gradient">Guidelines</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Everything you need to know before forming your team.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {ruleGroups.map((g, i) => (
            <motion.div
              key={g.title}
              className="rounded-xl border border-border bg-card p-6 shadow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                  <g.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold">{g.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {g.rules.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {r}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
