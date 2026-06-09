import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(at_top_right,#4f46e510_0%,transparent_50%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(at_bottom_left,#22d3ee10_0%,transparent_50%)]" />

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="space-y-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-cyan-400 font-medium tracking-widest"
          >
            BONJOUR, JE SUIS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold leading-tight"
          >
            Rojo Ratovo
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl text-zinc-400"
          >
            Développeur Full Stack
          </motion.h2>

          <p className="text-zinc-400 text-lg max-w-lg">
            Étudiant en informatique à l'EMIT Fianarantsoa. Passionné par la création 
            d'applications web modernes, scalables et centrées utilisateur.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              href="/cv/CV-Rojo-Ratovo.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-cyan-500/30"
            >
              <FaDownload /> Télécharger mon CV
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/50 hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
            >
              Me contacter
            </motion.a>
          </div>

          <div className="flex gap-6 text-4xl pt-6">
            {[
              { icon: <FaGithub />, link: "#" },
              { icon: <FaLinkedin />, link: "#" },
              { icon: <FaEnvelope />, link: "#" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ y: -5, color: "#22d3ee" }}
                className="text-zinc-400 hover:text-cyan-400 transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30" />
            <img
              src="/images/profile.png"
              alt="Rojo Ratovo"
              className="relative h-[380px] w-[380px] rounded-full object-cover border-4 border-white/10 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyan-400"
      >
        <FaArrowDown size={28} />
      </motion.div>
    </section>
  );
}