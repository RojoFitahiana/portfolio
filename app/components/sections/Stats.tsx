import { motion } from "framer-motion";

export default function Stats() {
  return (
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
  );
}