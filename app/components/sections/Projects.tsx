import { motion } from "framer-motion";

const projects = [
  {
    title: "Système RH",
    image: "/images/project1.png",
    description: "Plateforme complète de gestion des employés, congés, départements et workflow de validation.",
  },
  {
    title: "Plateforme de Formation",
    image: "/images/project2.png",
    description: "Gestion des formations, modules, inscriptions, paiements et suivi des apprenants.",
  },
  {
    title: "Application Universitaire",
    image: "/images/project3.png",
    description: "Système de gestion des étudiants, notes, emplois du temps et ressources pédagogiques.",
  },
];

export default function Projects() {
  return (
    <section id="projets" className="max-w-7xl mx-auto py-24 px-6 bg-zinc-950">
      <h2 className="text-4xl font-bold mb-12">Mes Projets</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -15 }}
            className="group rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-cyan-500/30 transition-all duration-500"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}