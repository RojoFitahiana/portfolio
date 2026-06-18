import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Gestion  congé",
    image: "/images/project1.JPG",
    description:
      "Application web centralisée permettant d'automatiser et de simplifier les demandes de congés au sein d'une organisation.",
    tags: ["Node js", "Angular", "PostgreSQL"],
    github: "https://github.com/RojoFitahiana/systeme-rh",
    demo: null,
    status: "",
    featured: true,
  },
  {
    title: "Gestion voyage",
    image: "/images/project2.JPG",
    description:
      "Développement d'une application web intuitive conçue pour planifier, centraliser et optimiser l'organisation de voyages des Taxi-brousse",
    tags: ["Spring Boot", "React js", "MySQL", "Stripe"],
    github: "https://github.com/RojoFitahiana/plateforme-formation",
    demo: "https://formation-demo.vercel.app",
    status: "en cours",
    featured: false,
  },
  {
    title: "Application mobile gestion de présence",
    image: "/images/project3.jpg",
    description:
      "Développement d'une solution numérique centralisée permettant de suivre, d'enregistrer et de piloter la présence des collaborateurs ou des étudiants.",
    tags: ["Spring Boot", "Angular", "Oracle DB", "CI/CD"],
    github: "https://github.com/RojoFitahiana/app-universitaire",
    demo: null,
    status: "terminé",
    featured: false,
  },
];

const statusStyles: Record<string, string> = {
  "terminé":   "bg-terminal-dim text-terminal-DEFAULT border border-terminal-DEFAULT/30",
  "en cours":  "bg-forest-border text-terminal-light border border-forest-border",
};

export default function Projects() {
  return (
    <section id="projets" className="py-5 px-6 bg-forest-bg">
      <div className="max-w-7xl mx-auto">

        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="font-mono text-terminal-DEFAULT text-sm tracking-widest mb-3">
          
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-snow mb-4">
            Mes Projets
          </h2>
          <div className="w-16 h-0.5 bg-terminal-DEFAULT" />
        </motion.div>

        {/* Projet featured (premier, plus grand) */}
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group mb-8 rounded-2xl overflow-hidden
                         bg-forest-surface border border-forest-border
                         hover:border-terminal-DEFAULT/50
                         transition-all duration-500 md:grid md:grid-cols-2"
            >
              {/* Image */}
              <div className="overflow-hidden relative">
                <div className="absolute inset-0 bg-terminal-DEFAULT/10 opacity-0
                                group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-full object-cover
                             group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Contenu */}
              <div className="p-8 md:p-10 flex flex-col justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full
                                     bg-terminal-dim text-terminal-DEFAULT
                                     border border-terminal-DEFAULT/30">
                      ★ projet phare
                    </span>
                    <span className={`font-mono text-xs px-2.5 py-1 rounded-full ${statusStyles[project.status]}`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-snow">
                    {project.title}
                  </h3>
                  <p className="text-terminal-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags techno */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-3 py-1 rounded
                                   bg-forest-bg border border-forest-border
                                   text-terminal-DEFAULT"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Liens */}
                <div className="flex gap-4 pt-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg
                               border border-forest-border text-terminal-light font-mono text-sm
                               hover:border-terminal-DEFAULT hover:text-terminal-DEFAULT
                               transition-all duration-200"
                  >
                    <FaGithub size={15} /> Code source
                  </motion.a>
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg
                                 bg-terminal-DEFAULT text-forest-bg font-mono text-sm font-medium
                                 hover:bg-terminal-light transition-colors duration-200"
                    >
                      <FaExternalLinkAlt size={13} /> Voir le live
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

        {/* Grille des autres projets */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl overflow-hidden
                           bg-forest-surface border border-forest-border
                           hover:border-terminal-DEFAULT/50
                           transition-all duration-500 flex flex-col"
              >
                {/* Image */}
                <div className="overflow-hidden relative">
                  <div className="absolute inset-0 bg-terminal-DEFAULT/10 opacity-0
                                  group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover
                               group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Contenu */}
                <div className="p-7 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-bold text-snow">{project.title}</h3>
                    <span className={`font-mono text-xs px-2.5 py-1 rounded-full whitespace-nowrap ${statusStyles[project.status]}`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-terminal-light text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags techno */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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

                  {/* Liens */}
                  <div className="flex gap-3 pt-1 border-t border-forest-border">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 mt-3
                                 font-mono text-sm text-terminal-light
                                 hover:text-terminal-DEFAULT transition-colors duration-200"
                    >
                      <FaGithub size={15} /> GitHub
                    </motion.a>
                    {project.demo ? (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 mt-3 ml-2
                                   font-mono text-sm text-terminal-light
                                   hover:text-terminal-DEFAULT transition-colors duration-200"
                      >
                        <FaExternalLinkAlt size={13} /> Live demo
                      </motion.a>
                    ) : (
                      <span className="flex items-center gap-2 mt-3 ml-2
                                       font-mono text-xs text-forest-border italic">
                        demo non disponible
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* CTA vers GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-terminal-light font-mono text-sm mb-4">
            // d'autres projets sur mon GitHub
          </p>
          <motion.a
            href="https://github.com/RojoFitahiana"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl
                       border border-forest-border text-terminal-light font-mono text-sm
                       hover:border-terminal-DEFAULT hover:text-terminal-DEFAULT
                       transition-all duration-200"
          >
            <FaGithub size={18} />
            Voir tous mes repos
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}