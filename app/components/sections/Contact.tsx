import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto py-24 px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-cyan-400">Contact</h2>
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
              <div><p>038 29 721 61</p></div>
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

      {/* Centres d’intérêt & Aptitudes */}
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-zinc-900/70 border border-zinc-700 rounded-3xl p-8 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400">❤️</div>
            <h3 className="text-2xl font-semibold">Centres d’intérêt</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="px-5 py-2 bg-zinc-800 rounded-full text-sm">🎮 Jeux vidéo</span>
            <span className="px-5 py-2 bg-zinc-800 rounded-full text-sm">🎵 Musique</span>
            <span className="px-5 py-2 bg-zinc-800 rounded-full text-sm">⚽ Football</span>
            <span className="px-5 py-2 bg-zinc-800 rounded-full text-sm">🌍 Apprentissage des langues</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-zinc-900/70 border border-zinc-700 rounded-3xl p-8 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">⭐</div>
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
  );
}