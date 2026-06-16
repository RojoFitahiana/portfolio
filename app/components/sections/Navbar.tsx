import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["À propos", "Compétences", "Parcours", "Projets", "Contact"];

function toAnchor(label: string) {
  return label
    .toLowerCase()
    .replace(/é/g, "e")
    .replace(/à/g, "a")
    .replace(/\s+/g, "-");
}

export default function Navbar() {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen]           = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach((label) => {
      const el = document.getElementById(toAnchor(label));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${isScrolled
          ? "bg-forest-surface/95 backdrop-blur-lg border-b border-forest-border"
          : "bg-transparent backdrop-blur-sm"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo — même position que votre original */}
        <motion.a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-1 font-mono font-bold text-xl tracking-tight hover:opacity-80 transition-opacity"
        >
          <span className="text-terminal-DEFAULT">❯</span>
          <span className="text-snow">Rojo</span>
          <span className="text-terminal-DEFAULT"> Ratovo</span>
        </motion.a>

        {/* Liens desktop — même structure .map() que votre original */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((item, i) => {
            const anchor    = toAnchor(item);
            const isActive  = activeSection === anchor;
            return (
              <motion.a
                key={item}
                href={`#${anchor}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`
                  relative px-4 py-2 rounded-lg font-mono transition-all duration-200
                  ${isActive
                    ? "text-terminal-DEFAULT bg-terminal-dim"
                    : "text-terminal-light hover:text-terminal-DEFAULT hover:bg-forest-border"}
                `}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-indicator"
                    className="mr-1 text-terminal-DEFAULT text-xs"
                  >
                    ›
                  </motion.span>
                )}
                {item}
              </motion.a>
            );
          })}

          {/* Bouton CV — nouveau par rapport à votre original */}
          <motion.a
            href="/cv.pdf"
            download
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.1 }}
            className="
              ml-4 px-4 py-2 rounded-lg font-mono text-sm font-medium
              border border-terminal-DEFAULT text-terminal-DEFAULT
              hover:bg-terminal-DEFAULT hover:text-forest-bg
              transition-all duration-200
            "
          >
            cv ↓
          </motion.a>
        </div>

        {/* Burger mobile */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="
            md:hidden p-2 rounded-lg font-mono text-lg
            text-terminal-light hover:text-terminal-DEFAULT hover:bg-forest-border
            transition-colors
          "
        >
          {menuOpen ? "✕" : "☰"}
        </motion.button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-forest-surface border-b border-forest-border"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((item, i) => {
                const anchor   = toAnchor(item);
                const isActive = activeSection === anchor;
                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={`#${anchor}`}
                      onClick={() => setMenuOpen(false)}
                      className={`
                        flex items-center gap-2 w-full px-4 py-3 rounded-lg
                        font-mono text-sm transition-all duration-200
                        ${isActive
                          ? "text-terminal-DEFAULT bg-terminal-dim"
                          : "text-terminal-light hover:text-terminal-DEFAULT hover:bg-forest-border"}
                      `}
                    >
                      <span className={`text-xs transition-opacity ${isActive ? "opacity-100" : "opacity-0"}`}>
                        ›
                      </span>
                      {item}
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2 mt-1 border-t border-forest-border"
              >
                <a
                  href="/cv.pdf"
                  download
                  className="
                    flex items-center justify-center gap-2 w-full
                    px-4 py-3 rounded-lg font-mono text-sm font-medium
                    border border-terminal-DEFAULT text-terminal-DEFAULT
                    hover:bg-terminal-DEFAULT hover:text-forest-bg
                    transition-all duration-200
                  "
                >
                  télécharger mon cv
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}