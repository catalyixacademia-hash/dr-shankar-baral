"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const T = t[lang].nav;
  const isNe = lang === "ne";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: T.about, href: "#about" },
    { label: T.services, href: "#services" },
    { label: T.conditions, href: "#conditions" },
    { label: T.procedures, href: "#procedures" },
    { label: T.research, href: "#research" },
    { label: T.contact, href: "#contact" },
  ];

  const textColor = scrolled
    ? "text-[var(--color-charcoal)]"
    : "text-white";
  const hoverBg = scrolled
    ? "hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)]"
    : "hover:text-white hover:bg-white/10";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <button
              onClick={() => scrollTo("#hero")}
              className="flex flex-col text-left"
            >
              <span
                className={`text-base font-bold leading-tight transition-colors duration-300 font-serif ${
                  scrolled ? "text-[var(--color-primary)]" : "text-white"
                } ${isNe ? "font-nepali text-sm" : ""}`}
              >
                {isNe ? "डा. शंकर बराल" : "Dr. Shankar Baral"}
              </span>
              <span
                className={`text-[10px] font-medium tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-[var(--color-teal)]" : "text-white/75"
                } ${isNe ? "font-nepali" : ""}`}
              >
                {isNe ? "डीएम ग्यास्ट्रोएन्टेरोलोजी" : "DM Gastroenterology"}
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3.5 py-2 text-[13px] font-medium rounded-md transition-colors duration-200 ${textColor} ${hoverBg} ${isNe ? "font-nepali" : ""}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Right: phone + language toggle + CTA */}
            <div className="flex items-center gap-2">
              <a
                href="tel:061590162"
                className={`hidden xl:flex items-center gap-1.5 text-xs font-medium transition-colors ${
                  scrolled ? "text-gray-500" : "text-white/70"
                }`}
              >
                <Phone size={12} />
                061-590162
              </a>

              {/* Language Toggle */}
              <div
                className={`flex items-center rounded-full p-0.5 transition-all ${
                  scrolled ? "bg-gray-100" : "bg-white/15"
                }`}
              >
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-200 ${
                    lang === "en"
                      ? "bg-[var(--color-primary)] text-white shadow-sm"
                      : scrolled
                      ? "text-gray-500 hover:text-gray-800"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLang("ne")}
                  className={`px-3 py-1 rounded-full text-xs font-bold font-nepali transition-all duration-200 ${
                    lang === "ne"
                      ? "bg-[var(--color-primary)] text-white shadow-sm"
                      : scrolled
                      ? "text-gray-500 hover:text-gray-800"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  ने
                </button>
              </div>

              <button
                onClick={() => scrollTo("#appointment")}
                className={`hidden md:inline-flex items-center gap-1.5 font-semibold px-5 py-2.5 rounded-full text-xs transition-all duration-200 shadow-sm hover:shadow-md text-white ${isNe ? "font-nepali" : ""}`}
                style={{ background: "linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%)" }}
              >
                {T.book}
              </button>

              <button
                className={`lg:hidden p-2 rounded-md transition-colors ${
                  scrolled ? "text-[var(--color-charcoal)]" : "text-white"
                }`}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white shadow-xl border-t border-gray-100 lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`px-4 py-3 text-sm font-medium text-left text-[var(--color-charcoal)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] rounded-md transition-colors ${isNe ? "font-nepali" : ""}`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-gray-100 mt-2 space-y-2">
                <button
                  onClick={() => scrollTo("#appointment")}
                  className={`block w-full text-center bg-[var(--color-primary)] text-white font-semibold px-5 py-3 rounded-xl text-sm ${isNe ? "font-nepali" : ""}`}
                >
                  {T.book}
                </button>
                <a
                  href="tel:061590162"
                  className="flex items-center justify-center gap-2 text-sm text-gray-400"
                >
                  <Phone size={13} /> 061-590162
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
