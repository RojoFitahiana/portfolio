import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    number: 10,
    suffix: "+",
    label: "Projets réalisés",
    icon: "◆",                    // Losange rempli → puissance/projet terminé
    desc: "Apps web full-stack livrées",
  },
  {
    number: 15,
    suffix: "+",
    label: "Technologies maîtrisées",
    icon: "⌬",                    // Symbole "hazard" / tech très cyber
    desc: "Frontend, backend, DevOps",
  },
  {
    number: 3,
    suffix: "+",
    label: "Années d'expérience",
    icon: "⟡",                    // Étoile subtile / gemme
    desc: "Projets académiques & perso",
  },
];

function useCountUp(target: number, duration = 1500, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useCountUp(stat.number, 1400, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="group relative p-8 rounded-2xl
                 bg-forest-surface border border-forest-border
                 hover:border-terminal-DEFAULT/60
                 transition-all duration-500 overflow-hidden"
    >
      {/* Halo vert discret au hover */}
      <div className="absolute inset-0 bg-terminal-DEFAULT/0
                      group-hover:bg-terminal-DEFAULT/[0.03]
                      transition-all duration-500 rounded-2xl" />

      {/* Ligne décorative en haut */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
        className="absolute top-0 left-0 right-0 h-[2px]
                   bg-terminal-DEFAULT origin-left"
      />

      <div className="relative space-y-4">
        {/* Icône style terminal */}
        <span className="font-mono text-terminal-DEFAULT/40 text-sm
                         group-hover:text-terminal-DEFAULT/70
                         transition-colors duration-300">
          {stat.icon}
        </span>

        {/* Compteur animé */}
        <div className="flex items-end gap-1">
          <span className="text-6xl font-bold font-mono text-terminal-DEFAULT
                           group-hover:text-terminal-light
                           transition-colors duration-300 tabular-nums">
            {count}
          </span>
          <span className="text-4xl font-bold font-mono text-terminal-DEFAULT/70 mb-1">
            {stat.suffix}
          </span>
        </div>

        {/* Label principal */}
        <p className="text-snow font-semibold text-lg leading-snug">
          {stat.label}
        </p>

        {/* Description secondaire */}
        <p className="text-terminal-light text-sm font-mono border-t border-forest-border pt-3">
          {stat.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 px-6 bg-forest-bg">
      <div className="max-w-6xl mx-auto">

        {/* Label de section discret */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-terminal-DEFAULT text-sm tracking-widest mb-10 text-center"
        >
          
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}