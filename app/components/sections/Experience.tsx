import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto py-24 px-6">
      <h2 className="text-4xl font-bold mb-12">Expériences Professionnelles</h2>

      <div className="space-y-16">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="flex gap-8">
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

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="flex gap-8">
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
  );
}