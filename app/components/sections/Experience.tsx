import { motion } from "framer-motion";

type EntryType = "experience";

interface JourneyEntry {
  type:        EntryType;
  period:      string;
  title:       string;
  place:       string;
  description: string;
  tasks?:      string[];           // Changé de "description" à "tasks" pour tes listes
  tags:        string[];
  current?:    boolean;
}

const entries: JourneyEntry[] = [
  {
    type:        "experience",
    period:      "2025",
    title:       "Stage de fin d’études - Développeur Full-Stack",
    place:       "Prism Solutions",
    description: "Stage de fin d'études en développement full-stack.",
    tasks: [
      "Conception de base de données et modélisation",
      "Développement d’un outil de gestion de formation",
      "Intégration de tableaux de bord et statistiques",
      "Tests, documentation et optimisation",
    ],
    tags:        ["React", "Laravel", "PostgreSQL", "Full-Stack"],
    current:     false,
  },
  {
    type:        "experience",
    period:      "2024",
    title:       "Stage Développeur Laravel",
    place:       "Développement d’un Système de Gestion des Ressources Humaines",
    description: "Développement d’un système complet de gestion RH.",
    tasks: [
      "Gestion des employés, congés et départements",
      "Création d’API REST et interfaces administrateur",
      "Workflow de validation et authentification",
    ],
    tags:        ["Laravel", "PHP", "MySQL", "API REST"],
    current:     false,
  },
];

const typeDot = {
  experience: "bg-forest-surface border-2 border-terminal-DEFAULT",
};

const typeBadge = {
  experience: "bg-forest-bg border border-forest-border text-terminal-light",
};

export default function Experience() {
  return (
    <section id="experience" className="py-5 px-6 bg-forest-bg">
      <div className="max-w-6xl mx-auto">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-snow mb-4">
            Expériences Professionnelles
          </h2>
          <div className="w-16 h-0.5 bg-terminal-DEFAULT" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Ligne verticale */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-[7px] top-2 bottom-2 w-px bg-forest-border origin-top"
          />

          <div className="space-y-10">
            {entries.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative pl-10 group"
              >
                {/* Point sur la timeline */}
                <div className={`
                  absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full
                  transition-all duration-300 group-hover:scale-125
                  ${typeDot[entry.type]}
                `} />

                {/* Carte */}
                <div className="rounded-2xl bg-forest-surface border border-forest-border
                                hover:border-terminal-DEFAULT/50
                                overflow-hidden transition-all duration-300">

                  {/* Barre top animée */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.2, duration: 0.5 }}
                    className="h-[2px] bg-terminal-DEFAULT origin-left"
                  />

                  <div className="p-7">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className={`${typeBadge[entry.type]} font-mono text-xs px-2.5 py-1 rounded-full`}>
                            expérience
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-snow mt-2">
                          {entry.title}
                        </h3>
                        <p className="font-mono text-sm text-terminal-light/80">
                          {entry.place}
                        </p>
                      </div>

                      {/* Période */}
                      <span className="font-mono text-xs text-terminal-DEFAULT/70
                                       bg-forest-bg border border-forest-border
                                       px-3 py-1.5 rounded-lg whitespace-nowrap self-start">
                        {entry.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-terminal-light text-sm leading-relaxed mb-5">
                      {entry.description}
                    </p>

                    {/* Liste des tâches */}
                    {entry.tasks && entry.tasks.length > 0 && (
                      <ul className="space-y-2 mb-6 text-terminal-light/90 text-sm">
                        {entry.tasks.map((task, idx) => (
                          <li key={idx} className="flex gap-2">
                            <span className="text-terminal-DEFAULT font-mono mt-0.5">❯</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2.5 py-1 rounded
                                     bg-forest-bg border border-forest-border
                                     text-terminal-DEFAULT"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}