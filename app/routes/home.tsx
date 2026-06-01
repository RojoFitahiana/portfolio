import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    color: "cyan",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    color: "purple",
    skills: ["Java", "Spring Boot", "Laravel", "PHP", "Node.js", "REST API"],
  },
  {
    title: "Base de Données",
    color: "green",
    skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"],
  },
  {
    title: "DevOps & Cloud",
    color: "orange",
    skills: ["Docker", "Git", "GitHub", "CI/CD", "Linux", "Nginx"],
  },
  {
    title: "Outils",
    color: "pink",
    skills: ["VS Code", "Postman", "Figma", "Trello", "IntelliJ IDEA"],
  },
];

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

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/70 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-bold text-2xl tracking-tight"
          >
            Rojo Ratovo
          </motion.h1>
          
          <div className="flex gap-8 text-sm font-medium">
            {["À propos", "Compétences", "Parcours", "Projets", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace("é", "e")}`}
                className="hover:text-cyan-400 transition-colors duration-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Statistiques */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { number: "10+", label: "Projets réalisés", color: "cyan" },
            { number: "15+", label: "Technologies maîtrisées", color: "purple" },
            { number: "3+", label: "Années d'expérience", color: "emerald" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-cyan-500/30 transition-all group"
            >
              <h3 className={`text-6xl font-bold text-${stat.color}-400 group-hover:scale-110 transition-transform`}>
                {stat.number}
              </h3>
              <p className="text-zinc-400 mt-3 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* À propos */}
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

      {/* Compétences */}
      <section id="competences" className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl font-bold"
          >
            Compétences Techniques
          </motion.h2>
          <p className="text-zinc-400 mt-4 text-lg">Technologies que je maîtrise</p>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group rounded-3xl bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/50 overflow-hidden transition-all duration-500"
            >
              <div className={`h-2 bg-gradient-to-r from-${category.color}-400 to-${category.color}-600`} />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                      <span className="text-zinc-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <div className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-10 py-4 text-center text-cyan-400 font-medium">
            ⭐ 20+ technologies maîtrisées et en constante évolution
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section id="parcours" className="max-w-6xl mx-auto py-24 px-6 bg-zinc-950">
        <h2 className="text-4xl font-bold mb-12">Parcours Académique</h2>
        <div className="border-l-4 border-cyan-500 pl-10 space-y-16">
          {[
            { year: "2023 — Aujourd’hui", title: "Licence en Informatique", place: "EMIT Fianarantsoa" },
            { year: "2026", title: "Master en Informatique", place: "EMIT Fianarantsoa (en cours)" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3 className="font-bold text-xl text-cyan-400">{item.year}</h3>
              <p className="text-lg font-semibold mt-1">{item.title}</p>
              <p className="text-zinc-400">{item.place}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expériences Professionnelles */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold mb-12">Expériences Professionnelles</h2>

        <div className="space-y-16">
          {/* 2025 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex gap-8"
          >
            <div className="w-32 flex-shrink-0">
              <p className="text-cyan-400 font-bold text-xl">2025</p>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Stage de fin d’études - Développeur Full-Stack</h3>
              <p className="text-zinc-400 mt-1">Prism Solutions</p>
              <ul className="mt-4 space-y-2 text-zinc-400 list-disc list-inside">
                <li>Conception de base de données et modélisation</li>
                <li>Développement d’un outil de gestion de formation</li>
                <li>Intégration de tableaux de bord et statistiques</li>
                <li>Tests, documentation et optimisation</li>
              </ul>
            </div>
          </motion.div>

          {/* 2024 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex gap-8"
          >
            <div className="w-32 flex-shrink-0">
              <p className="text-cyan-400 font-bold text-xl">2024</p>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Stage Développeur Laravel</h3>
              <p className="text-zinc-400 mt-1">Développement d’un Système de Gestion des Ressources Humaines</p>
              <ul className="mt-4 space-y-2 text-zinc-400 list-disc list-inside">
                <li>Gestion des employés, congés et départements</li>
                <li>Création d’API REST et interfaces administrateur</li>
                <li>Workflow de validation et authentification</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projets */}
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

      {/* Contact */}
<section id="contact" className="max-w-6xl mx-auto py-24 px-6">
  <div className="text-center mb-16">
    <h2 className="text-5xl font-bold text-cyan-400">A propos</h2>
    <p className="text-zinc-400 mt-3 text-lg">N’hésitez pas à me contacter</p>
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    {/* Carte Contact */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-zinc-900/70 border border-zinc-700 rounded-3xl p-8 backdrop-blur-md"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
          📞
        </div>
        <h3 className="text-2xl font-semibold">Contact</h3>
      </div>

      <div className="space-y-5 text-zinc-300">
        <div className="flex items-start gap-4">
          <span className="text-cyan-400 mt-1">📱</span>
          <div>
            <p>038 29 721 61</p>
            
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-cyan-400 mt-1">📍</span>
          <p>Antananarivo / Fianarantsoa<br />Madagascar</p>
        </div>

        <div className="flex items-start gap-4">
          <span className="text-cyan-400 mt-1">✉️</span>
          <p>fitahiana085@gmail.com</p>
        </div>

        <div className="flex gap-5 pt-4">
          <a href="#" className="text-3xl hover:text-cyan-400 transition">🐙</a>
          <a href="#" className="text-3xl hover:text-cyan-400 transition">🔗</a>
          <a href="#" className="text-3xl hover:text-cyan-400 transition">💬</a>
        </div>
      </div>
    </motion.div>

    {/* Carte Langues */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-zinc-900/70 border border-zinc-700 rounded-3xl p-8 backdrop-blur-md"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
          🗣️
        </div>
        <h3 className="text-2xl font-semibold">Langues</h3>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span>Malagasy</span>
            <span className="text-cyan-400 text-sm">Langue maternelle</span>
          </div>
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full w-full bg-cyan-400 rounded-full"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>Français</span>
            <span className="text-cyan-400 text-sm">Courant</span>
          </div>
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-cyan-400 rounded-full"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span>Anglais</span>
            <span className="text-cyan-400 text-sm">Moyen</span>
          </div>
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full w-[45%] bg-cyan-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>

  {/* Centres d'intérêt & Aptitudes (optionnel - vous pouvez garder ou enlever) */}
  <div className="grid md:grid-cols-2 gap-8 mt-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-zinc-900/70 border border-zinc-700 rounded-3xl p-8 backdrop-blur-md"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400">
          ❤️
        </div>
        <h3 className="text-2xl font-semibold">Centres d’intérêt</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        <span className="px-5 py-2 bg-zinc-800 rounded-full text-sm">🎮 Jeux vidéo</span>
        <span className="px-5 py-2 bg-zinc-800 rounded-full text-sm">🎵 Musique</span>
        <span className="px-5 py-2 bg-zinc-800 rounded-full text-sm">⚽ Football</span>
        <span className="px-5 py-2 bg-zinc-800 rounded-full text-sm">🌍 Apprentissage des langues</span>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-zinc-900/70 border border-zinc-700 rounded-3xl p-8 backdrop-blur-md"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
          ⭐
        </div>
        <h3 className="text-2xl font-semibold">Aptitudes</h3>
      </div>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-zinc-800 px-4 py-3 rounded-2xl">Gestion de projet</div>
        <div className="bg-zinc-800 px-4 py-3 rounded-2xl">Travail d’équipe</div>
        <div className="bg-zinc-800 px-4 py-3 rounded-2xl">Gestion du temps</div>
        <div className="bg-zinc-800 px-4 py-3 rounded-2xl">Leadership</div>
        <div className="bg-zinc-800 px-4 py-3 rounded-2xl">Communication efficace</div>
        <div className="bg-zinc-800 px-4 py-3 rounded-2xl">Esprit d’analyse</div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 text-center text-zinc-500">
        © 2026 Rojo Ratovo - Tous droits réservés.
      </footer>
    </main>
  );
}