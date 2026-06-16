import { motion } from "framer-motion";

type EntryType = "education" | "experience" | "certification";

interface JourneyEntry {
  type:        EntryType;
  period:      string;
  title:       string;
  place:       string;
  description: string;
  tags:        string[];
  current?:    boolean;
}

const entries: JourneyEntry[] = [
  {
    type:        "education",
    period:      "2026 — en cours",
    title:       "Master en Informatique",
    place:       "EMIT Fianarantsoa",
    description: "Spécialisation en architecture logicielle et systèmes distribués. Projets de recherche appliquée autour des applications web scalables.",
    tags:        ["Architecture", "Systèmes distribués", "Recherche"],
    current:     true,
  },
  {
    type:        "education",
    period:      "2023 — 2025",
    title:       "Licence en Informatique",
    place:       "EMIT Fianarantsoa",
    description: "Formation en développement logiciel, bases de données, réseaux et algorithmique. Réalisation de plusieurs projets full-stack en équipe.",
    tags:        ["Java", "Laravel", "React", "PostgreSQL"],
    current:     false,
  },
 
];

const typeLabel: Record<EntryType, string> = {
  education:     "formation",
  experience:    "projet",
  certification: "certification",
};

const typeDot: Record<EntryType, string> = {
  education:     "bg-terminal-DEFAULT border-2 border-terminal-DEFAULT/30",
  experience:    "bg-forest-surface border-2 border-terminal-DEFAULT",
  certification: "bg-terminal-dim border-2 border-terminal-DEFAULT/50",
};

const typeBadge: Record<EntryType, string> = {
  education:     "bg-terminal-dim border border-terminal-DEFAULT/40 text-terminal-DEFAULT",
  experience:    "bg-forest-bg border border-forest-border text-terminal-light",
  certification: "bg-forest-surface border border-terminal-DEFAULT/20 text-terminal-light",
};

export default function Journey() {
  return (
    <section id="parcours" className="py-5 px-6 bg-forest-bg">
      <div className="max-w-6xl mx-auto">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-terminal-DEFAULT text-sm tracking-widest mb-3">
            
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-snow mb-4">
            Formation & Expérience
          </h2>
          <div className="w-16 h-0.5 bg-terminal-DEFAULT" />
        </motion.div>

        {/* Légende */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mb-12 font-mono text-xs"
        >
          {(["education", "experience"] as EntryType[]).map((t) => (
            <div key={t} className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${typeDot[t]}`} />
              <span className="text-terminal-light">{typeLabel[t]}</span>
            </div>
          ))}
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
                          <span className={`
                            font-mono text-xs px-2.5 py-1 rounded-full
                            ${typeBadge[entry.type]}
                          `}>
                            {typeLabel[entry.type]}
                          </span>
                          {entry.current && (
                            <span className="inline-flex items-center gap-1.5
                                             font-mono text-xs px-2.5 py-1 rounded-full
                                             bg-terminal-dim border border-terminal-DEFAULT/40
                                             text-terminal-DEFAULT">
                              <span className="w-1.5 h-1.5 rounded-full bg-terminal-DEFAULT animate-pulse" />
                              en cours
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-snow mt-2">
                          {entry.title}
                        </h3>
                        <p className="font-mono text-sm text-terminal-light/70">
                          {entry.place}
                        </p>
                      </div>

                      {/* Période */}
                      <span className="font-mono text-xs text-terminal-DEFAULT/60
                                       bg-forest-bg border border-forest-border
                                       px-3 py-1.5 rounded-lg whitespace-nowrap">
                        {entry.period}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-terminal-light text-sm leading-relaxed mb-5">
                      {entry.description}
                    </p>

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