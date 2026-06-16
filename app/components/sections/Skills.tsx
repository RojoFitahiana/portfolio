import { motion } from "framer-motion";

type Tier = "main" | "secondary";

const skillCategories = [
  {
    title: "Frontend",
    prefix: "ui",
    skills: [
      { name: "React",        tier: "main"      as Tier },
      { name: "TypeScript",   tier: "main"      as Tier },
      { name: "JavaScript",   tier: "main"      as Tier },
      { name: "Tailwind CSS", tier: "main"      as Tier },
      { name: "HTML5 / CSS3", tier: "main"      as Tier },
    ],
  },
  {
    title: "Backend",
    prefix: "api",
    skills: [
      { name: "Spring Boot",  tier: "main"      as Tier },
      { name: "Laravel",      tier: "main"      as Tier },
      { name: "Java",         tier: "main"      as Tier },
      { name: "PHP",          tier: "main"      as Tier },
      { name: "Node.js",      tier: "secondary" as Tier },
      { name: "REST API",     tier: "main"      as Tier },
    ],
  },
  {
    title: "Base de données",
    prefix: "db",
    skills: [
      { name: "PostgreSQL",   tier: "main"      as Tier },
      { name: "MySQL",        tier: "main"      as Tier },
      { name: "SQLite",       tier: "main"      as Tier },
      { name: "MongoDB",      tier: "secondary" as Tier },
    ],
  },
  {
    title: "DevOps & Cloud",
    prefix: "ops",
    skills: [
      { name: "Git / GitHub", tier: "main"      as Tier },
      { name: "Docker",       tier: "main"      as Tier },
      { name: "Linux",        tier: "main"      as Tier },
      { name: "CI/CD",        tier: "secondary" as Tier },
      { name: "Nginx",        tier: "secondary" as Tier },
    ],
  },
  {
    title: "Outils",
    prefix: "tools",
    skills: [
      { name: "IntelliJ IDEA", tier: "main"      as Tier },
      { name: "VS Code",       tier: "main"      as Tier },
      { name: "Postman",       tier: "main"      as Tier },
      { name: "Figma",         tier: "secondary" as Tier },
      { name: "Trello",        tier: "secondary" as Tier },
    ],
  },
];

const tierStyles: Record<Tier, string> = {
  main:      "bg-terminal-dim border border-terminal-DEFAULT/40 text-terminal-DEFAULT",
  secondary: "bg-forest-bg border border-forest-border text-terminal-light",
};

const tierDot: Record<Tier, string> = {
  main:      "bg-terminal-DEFAULT",
  secondary: "bg-terminal-light/40",
};

export default function Skills() {
  return (
    <section id="competences" className="py-5 px-6 bg-forest-bg">
      <div className="max-w-7xl mx-auto">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-snow mb-4">
            Stack Technique
          </h2>
          <div className="w-16 h-0.5 bg-terminal-DEFAULT" />
        </motion.div>

        {/* Légende */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-10 font-mono text-xs"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terminal-DEFAULT" />
            <span className="text-terminal-light">maîtrisé</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-terminal-light/40" />
            <span className="text-terminal-light">intermédiaire</span>
          </div>
        </motion.div>

        {/* Grille des catégories */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl bg-forest-surface border border-forest-border
                         hover:border-terminal-DEFAULT/50
                         overflow-hidden transition-all duration-300"
            >
              {/* Barre supérieure animée */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                className="h-[2px] bg-terminal-DEFAULT origin-left"
              />

              <div className="p-7 space-y-5">

                {/* Header catégorie */}
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-terminal-DEFAULT/50
                                   group-hover:text-terminal-DEFAULT/80
                                   transition-colors duration-300">
                    ./{category.prefix}
                  </span>
                  <div className="flex-1 h-px bg-forest-border" />
                  <h3 className="font-mono text-sm font-semibold text-snow">
                    {category.title}
                  </h3>
                </div>

                {/* Tags de compétences */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, si) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + si * 0.05 + 0.2 }}
                      className={`
                        inline-flex items-center gap-1.5
                        font-mono text-xs px-3 py-1.5 rounded-lg
                        transition-all duration-200
                        hover:border-terminal-DEFAULT hover:text-terminal-DEFAULT
                        ${tierStyles[skill.tier]}
                      `}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${tierDot[skill.tier]}`} />
                      {skill.name}
                    </motion.span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Badge bas */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex justify-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full
                          border border-terminal-DEFAULT/30 bg-terminal-dim
                          font-mono text-sm text-terminal-DEFAULT">
            <span className="w-2 h-2 rounded-full bg-terminal-DEFAULT animate-pulse" />
            20+ technologies · en constante évolution
          </div>
        </motion.div>

      </div>
    </section>
  );
}