import { motion } from "framer-motion";

export default function Navbar() {
  return (
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
  );
}