import { motion } from "framer-motion";

const skillCategories = [
  { title: "Frontend", color: "cyan", skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend", color: "purple", skills: ["Java", "Spring Boot", "Laravel", "PHP", "Node.js", "REST API"] },
  { title: "Base de Données", color: "green", skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB"] },
  { title: "DevOps & Cloud", color: "orange", skills: ["Docker", "Git", "GitHub", "CI/CD", "Linux", "Nginx"] },
  { title: "Outils", color: "pink", skills: ["VS Code", "Postman", "Figma", "Trello", "IntelliJ IDEA"] },
];

export default function Skills() {
  return (
    <section id="competences" className="max-w-7xl mx-auto py-24 px-6">
      <div className="text-center mb-16">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-5xl font-bold">
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
  );
}