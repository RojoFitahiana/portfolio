import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

type LangLevel = "native" | "fluent" | "intermediate";

const langLevels: Record<LangLevel, { label: string; pct: number }> = {
  native:       { label: "Langue maternelle", pct: 100 },
  fluent:       { label: "Courant",           pct: 85  },
  intermediate: { label: "Intermédiaire",     pct: 45  },
};

const languages = [
  { name: "Malagasy", level: "native"       as LangLevel },
  { name: "Français", level: "fluent"       as LangLevel },
  { name: "Anglais",  level: "intermediate" as LangLevel },
];

const interests = [
  { emoji: "🎮", label: "Jeux vidéo"              },
  { emoji: "🎵", label: "Musique"                  },
  { emoji: "⚽", label: "Football"                 },
  { emoji: "🌍", label: "Apprentissage des langues"},
];

const aptitudes = [
  "Gestion de projet",
  "Travail d'équipe",
  "Gestion du temps",
  "Leadership",
  "Communication efficace",
  "Esprit d'analyse",
];

const socials = [
  { icon: <FaGithub size={18} />,   href: "https://github.com/RojoFitahiana", label: "GitHub"   },
  { icon: <FaLinkedin size={18} />, href: "#",                                 label: "LinkedIn" },
  { icon: <FaEnvelope size={18} />, href: "mailto:fitahiana085@gmail.com",      label: "Email"    },
];

export default function Contact() {
  return (
    <section id="contact" className="py-5 px-6 bg-forest-bg">
      <div className="max-w-6xl mx-auto">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-snow mb-4">
            Travaillons ensemble
          </h2>
          <div className="w-16 h-0.5 bg-terminal-DEFAULT" />
          <p className="text-terminal-light mt-5 text-lg max-w-xl">
            Je suis disponible pour des stages, alternances ou projets freelance.
            N'hésitez pas à me contacter.
          </p>
        </motion.div>

        {/* Rangée 1 — Coordonnées + Langues */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">

          {/* Carte coordonnées */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-forest-surface border border-forest-border
                       hover:border-terminal-DEFAULT/50 overflow-hidden
                       transition-all duration-300"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-[2px] bg-terminal-DEFAULT origin-left"
            />
            <div className="p-7 space-y-6">
              {/* Header */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-terminal-DEFAULT/50">//</span>
                <h3 className="font-mono text-sm font-semibold text-snow">Coordonnées</h3>
              </div>

              {/* Infos */}
              <div className="space-y-4">
                <a
                  href="tel:+261382972161"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-forest-bg border border-forest-border
                                  flex items-center justify-center text-terminal-DEFAULT
                                  group-hover:border-terminal-DEFAULT transition-colors duration-200">
                    <FaPhone size={13} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-terminal-light/50 mb-0.5">Téléphone</p>
                    <p className="text-snow text-sm font-medium group-hover:text-terminal-DEFAULT
                                  transition-colors duration-200">
                      038 29 721 61
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-forest-bg border border-forest-border
                                  flex items-center justify-center text-terminal-DEFAULT">
                    <FaMapMarkerAlt size={13} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-terminal-light/50 mb-0.5">Localisation</p>
                    <p className="text-snow text-sm font-medium">
                      Antananarivo · Fianarantsoa, Madagascar 🇲🇬
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:fitahiana085@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-forest-bg border border-forest-border
                                  flex items-center justify-center text-terminal-DEFAULT
                                  group-hover:border-terminal-DEFAULT transition-colors duration-200">
                    <FaEnvelope size={13} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-terminal-light/50 mb-0.5">Email</p>
                    <p className="text-snow text-sm font-medium group-hover:text-terminal-DEFAULT
                                  transition-colors duration-200">
                      fitahiana085@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              {/* Séparateur */}
              <div className="border-t border-forest-border pt-5">
                <p className="font-mono text-xs text-terminal-light/50 mb-4">// réseaux</p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg
                                 border border-forest-border text-terminal-light font-mono text-xs
                                 hover:border-terminal-DEFAULT hover:text-terminal-DEFAULT
                                 transition-all duration-200"
                    >
                      {s.icon} {s.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Carte langues */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl bg-forest-surface border border-forest-border
                      hover:border-terminal-DEFAULT/50 overflow-hidden
                      transition-all duration-300"
          >
          <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="h-[2px] bg-terminal-DEFAULT origin-left"
            />
            <div className="p-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-terminal-DEFAULT/50">//</span>
                <h3 className="font-mono text-sm font-semibold text-snow">Langues</h3>
              </div>

              <div className="space-y-6">
                {languages.map((lang, i) => {
                  const level = langLevels[lang.level];
                  return (
                    <motion.div
                      key={lang.name}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-snow text-sm font-medium font-mono">
                          {lang.name}
                        </span>
                        <span className="font-mono text-xs text-terminal-DEFAULT/70 bg-forest-bg border border-forest-border px-2.5 py-1 rounded-lg">
                          {level.label}
                        </span>
                      </div>

                      <div className="h-1.5 w-full rounded-full bg-forest-bg overflow-hidden relative">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                          className="h-full rounded-full bg-forest-bg border"   // ← changé ici
                        />
                        {/* Pourcentage affiché */}
                        <span className="absolute -top-5 right-0 text-[10px] font-mono text-terminal-DEFAULT/60">
                          {level.pct}%
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Rangée 2 — Centres d'intérêt + Aptitudes */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Centres d'intérêt */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl bg-forest-surface border border-forest-border
                       hover:border-terminal-DEFAULT/50 overflow-hidden
                       transition-all duration-300"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-[2px] bg-terminal-DEFAULT origin-left"
            />
            <div className="p-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-terminal-DEFAULT/50">//</span>
                <h3 className="font-mono text-sm font-semibold text-snow">Centres d'intérêt</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {interests.map((item, i) => (
                  <motion.span
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="inline-flex items-center gap-2
                               font-mono text-sm px-4 py-2 rounded-xl
                               bg-forest-bg border border-forest-border text-terminal-light
                               hover:border-terminal-DEFAULT hover:text-terminal-DEFAULT
                               transition-all duration-200 cursor-default"
                  >
                    <span>{item.emoji}</span>
                    {item.label}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Aptitudes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-2xl bg-forest-surface border border-forest-border
                       hover:border-terminal-DEFAULT/50 overflow-hidden
                       transition-all duration-300"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-[2px] bg-terminal-DEFAULT origin-left"
            />
            <div className="p-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-terminal-DEFAULT/50">//</span>
                <h3 className="font-mono text-sm font-semibold text-snow">Aptitudes</h3>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {aptitudes.map((apt, i) => (
                  <motion.div
                    key={apt}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.06 }}
                    className="flex items-center gap-2.5
                               bg-forest-bg border border-forest-border
                               hover:border-terminal-DEFAULT/50
                               px-4 py-3 rounded-xl text-sm text-terminal-light
                               transition-all duration-200 cursor-default"
                  >
                    <span className="text-terminal-DEFAULT font-mono text-xs flex-shrink-0">›</span>
                    {apt}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-2xl bg-forest-surface border border-forest-border
                     overflow-hidden"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-[2px] bg-terminal-DEFAULT origin-left"
          />
          <div className="p-8 flex flex-col md:flex-row items-center
                          justify-between gap-6">
            <div>
              <p className="font-mono text-terminal-DEFAULT text-sm mb-1">
                // prêt à collaborer ?
              </p>
              <p className="text-snow font-semibold text-lg">
                Envoyez-moi un message, je réponds rapidement.
              </p>
            </div>
            <motion.a
              href="mailto:fitahiana085@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-7 py-3.5 rounded-xl
                         bg-terminal-DEFAULT text-forest-bg
                         font-mono text-sm font-medium flex-shrink-0
                         hover:bg-terminal-light transition-colors duration-200"
            >
              <FaEnvelope size={15} />
              fitahiana085@gmail.com
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}