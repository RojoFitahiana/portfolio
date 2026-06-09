import { motion } from "framer-motion";

export default function Journey() {
  return (
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
  );
}