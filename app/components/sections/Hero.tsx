import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">

      {/* Fonds ambiants — remplace les radial-gradient cyan/indigo */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(at_top_right,#16c76a08_0%,transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(at_bottom_left,#16c76a05_0%,transparent_55%)]" />

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="space-y-8">

          {/* Badge de disponibilité — remplace "BONJOUR, JE SUIS" statique */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                       border border-forest-border bg-forest-surface
                       font-mono text-sm text-terminal-light"
          >
            <span className="w-2 h-2 rounded-full bg-terminal-DEFAULT animate-pulse" />
            disponible pour des projets
          </motion.div>

          {/* Nom — même animation que l'original */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold leading-tight tracking-tight font-mono"
          >
            <span className="text-snow">Rojo </span>
            <span className="text-terminal-DEFAULT">Ratovo</span>
          </motion.h1>

          {/* Sous-titre — remplace text-zinc-400 */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl text-terminal-light font-mono"
          >
            <span className="text-terminal-DEFAULT opacity-60">❯ </span>
            Développeur Full Stack
          </motion.h2>

          {/* Description — remplace text-zinc-400 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-terminal-light text-lg max-w-lg leading-relaxed"
          >
            Étudiant en informatique à l'EMIT Fianarantsoa. Passionné par la création
            d'applications web modernes, scalables et centrées utilisateur.
          </motion.p>

          {/* Boutons CTA — remplace gradient cyan et border white */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="/cv/CV-Rojo-Ratovo.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3
                         bg-terminal-DEFAULT text-forest-bg
                         px-8 py-4 rounded-2xl font-mono font-semibold text-base
                         hover:bg-terminal-light transition-colors duration-200
                         shadow-lg shadow-terminal-DEFAULT/20"
            >
              <FaDownload size={16} />
              Télécharger mon CV
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3
                         border border-forest-border text-terminal-light
                         px-8 py-4 rounded-2xl font-mono font-semibold text-base
                         hover:border-terminal-DEFAULT hover:text-terminal-DEFAULT
                         transition-all duration-300"
            >
              Me contacter
            </motion.a>
          </motion.div>

          {/* Icônes sociales — remplace text-zinc-400 / hover:text-cyan-400 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 pt-2"
          >
            {[
              { icon: <FaGithub size={26} />,   link: "#", label: "GitHub"   },
              { icon: <FaLinkedin size={26} />,  link: "#", label: "LinkedIn" },
              { icon: <FaEnvelope size={26} />,  link: "#", label: "Email"    },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                aria-label={social.label}
                whileHover={{ y: -5 }}
                className="text-terminal-light hover:text-terminal-DEFAULT transition-colors duration-200"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Photo de profil — même animation que l'original */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Halo vert — remplace le blur cyan/purple/pink */}
            <div className="absolute -inset-6 rounded-full blur-3xl opacity-25
                            bg-terminal-DEFAULT" />
            {/* Anneau décoratif tournant */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 rounded-full border border-dashed
                         border-terminal-DEFAULT/30"
            />
            <img
              src="/images/profile.png"
              alt="Rojo Ratovo"
              className="relative h-[380px] w-[380px] rounded-full object-cover
                         border-4 border-forest-border shadow-2xl
                         shadow-terminal-DEFAULT/10"
            />
            {/* Badge flottant sur la photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute -bottom-4 -right-4
                         bg-forest-surface border border-forest-border
                         rounded-xl px-4 py-2 font-mono text-sm"
            >
              <span className="text-terminal-DEFAULT">10+</span>
              <span className="text-terminal-light ml-1">projets</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Flèche bas — remplace text-cyan-400 */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-terminal-DEFAULT"
      >
        <FaArrowDown size={24} />
      </motion.div>
    </section>
  );
}