import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const highlights = [
  {
    prefix: "01",
    title: "Approche",
    text: "Je construis des applications en pensant d'abord à l'utilisateur — lisibles, rapides, maintenables.",
  },
  {
    prefix: "02",
    title: "Méthode",
    text: "Architecture propre, code versionné, déploiement Docker. Je traite chaque projet comme un produit réel.",
  },
  {
    prefix: "03",
    title: "Objectif",
    text: "Intégrer une équipe produit ambitieuse où je peux contribuer côté backend comme frontend.",
  },
];

const infos = [
  { label: "Formation",     value: "EMIT Fianarantsoa — Informatique" },
  { label: "Localisation",  value: "Madagascar 🇲🇬" },
  { label: "Disponibilité", value: "Ouvert aux opportunités" },
  { label: "Langues",       value: "Français · Anglais · Malgache" },
];

const socials = [
  { icon: <FaGithub size={18} />,   href: "https://github.com/RojoFitahiana", label: "GitHub"   },
  { icon: <FaLinkedin size={18} />, href: "#",                                 label: "LinkedIn" },
  { icon: <FaEnvelope size={18} />, href: "#contact",                          label: "Email"    },
];

export default function About() {
  return (
    <section id="apropos" className="py-5 px-6 bg-forest-bg">
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
            Qui suis-je ?
          </h2>
          <div className="w-16 h-0.5 bg-terminal-DEFAULT" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Colonne gauche — texte + highlights */}
          <div className="space-y-10">

            {/* Paragraphe principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <p className="text-terminal-light text-lg leading-relaxed">
                Développeur Full Stack étudiant à l'
                <span className="text-snow font-medium">EMIT Fianarantsoa</span>,
                je conçois des applications web modernes avec{" "}
                <span className="text-terminal-DEFAULT font-mono">Laravel</span>,{" "}
                <span className="text-terminal-DEFAULT font-mono">Spring Boot</span> et{" "}
                <span className="text-terminal-DEFAULT font-mono">React</span>.
              </p>
              <p className="text-terminal-light text-lg leading-relaxed">
                Mon objectif : créer des solutions robustes, scalables et orientées
                utilisateur, où la qualité du code est aussi importante que le rendu final.
              </p>
            </motion.div>

            {/* Highlights 01 / 02 / 03 */}
            <div className="space-y-5">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.prefix}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="flex gap-5 group"
                >
                  {/* Numéro + ligne verticale */}
                  <div className="flex flex-col items-center gap-1 pt-0.5 flex-shrink-0">
                    <span className="font-mono text-xs text-terminal-DEFAULT/60
                                     group-hover:text-terminal-DEFAULT transition-colors duration-200">
                      {h.prefix}
                    </span>
                    {i < highlights.length - 1 && (
                      <div className="w-px flex-1 bg-forest-border min-h-[28px]" />
                    )}
                  </div>

                  {/* Contenu */}
                  <div className="pb-5">
                    <p className="font-mono text-sm font-semibold text-snow mb-1">
                      {h.title}
                    </p>
                    <p className="text-terminal-light text-sm leading-relaxed">
                      {h.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Liens sociaux */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 pt-2"
            >
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ y: -4 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg
                             border border-forest-border text-terminal-light
                             hover:border-terminal-DEFAULT hover:text-terminal-DEFAULT
                             font-mono text-sm transition-all duration-200"
                >
                  {s.icon}
                  <span>{s.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Colonne droite — carte d'infos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {/* Carte principale */}
            <div className="rounded-2xl bg-forest-surface border border-forest-border overflow-hidden">

              {/* Header de carte */}
              <div className="px-7 py-5 border-b border-forest-border flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-forest-border" />
                  <span className="w-3 h-3 rounded-full bg-forest-border" />
                  <span className="w-3 h-3 rounded-full bg-terminal-DEFAULT/60" />
                </div>
                <span className="font-mono text-xs text-terminal-light/50">
                  about.json
                </span>
              </div>

              {/* Contenu JSON-style */}
              <div className="px-7 py-6 font-mono text-sm space-y-3">
                <p className="text-forest-border/80">{"{"}</p>
                {infos.map((info, i) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="pl-4 flex flex-wrap gap-x-2 gap-y-0.5"
                  >
                    <span className="text-terminal-light/60">"{info.label}":</span>
                    <span className="text-terminal-DEFAULT">"{info.value}"</span>
                    {i < infos.length - 1 && (
                      <span className="text-forest-border">,</span>
                    )}
                  </motion.div>
                ))}
                <p className="text-forest-border/80">{"}"}</p>
              </div>
            </div>

            {/* Badge disponibilité */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-3 px-6 py-4 rounded-xl
                         border border-terminal-DEFAULT/30 bg-terminal-dim"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-terminal-DEFAULT animate-pulse flex-shrink-0" />
              <div>
                <p className="font-mono text-sm text-terminal-DEFAULT font-medium">
                  Disponible pour des opportunités
                </p>
                <p className="font-mono text-xs text-terminal-light/70 mt-0.5">
                  Stage · Alternance · Freelance
                </p>
              </div>
            </motion.div>

            {/* CTA CV */}
            <motion.a
              href="/cv/CV-Rojo-Ratovo.pdf"
              download
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full
                         py-4 rounded-xl font-mono text-sm font-medium
                         bg-terminal-DEFAULT text-forest-bg
                         hover:bg-terminal-light transition-colors duration-200"
            >
              Télécharger mon CV
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}