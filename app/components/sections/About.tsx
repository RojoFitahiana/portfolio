import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="apropos" className="max-w-6xl mx-auto py-24 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-10"
      >
        À propos
      </motion.h2>
      <p className="text-zinc-400 leading-relaxed text-lg max-w-3xl">
        Je développe des applications web modernes et performantes avec Laravel, 
        Spring Boot et React. Mon objectif est de créer des solutions robustes, 
        scalables et orientées utilisateur, alliant design élégant et fonctionnalités puissantes.
      </p>
    </section>
  );
}