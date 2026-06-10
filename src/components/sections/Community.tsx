"use client";

import { motion } from "framer-motion";
import { Heart, Users, Megaphone, Star } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const icons = [Heart, Megaphone, Users, Star];
const colors = ["#be123c", "#0d7377", "#1a3c6e", "#7c3aed"];
const bgs = ["#fff1f2", "#f0fafa", "var(--color-surface)", "#f5f3ff"];

export default function Community() {
  const { lang } = useLanguage();
  const T = t[lang].community;
  const isNe = lang === "ne";
  const ne = isNe ? "font-nepali" : "";

  return (
    <section id="community" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className={`text-[var(--color-teal)] text-xs font-bold tracking-[0.14em] uppercase mb-3 ${ne}`}>{T.tag}</p>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)] mb-5 leading-tight heading-accent ${ne}`}>
              {T.h2a}{" "}<span style={{ color: "var(--color-primary)" }}>{T.h2b}</span>
            </h2>
            <p className={`text-gray-500 leading-relaxed mb-8 ${ne}`}>{T.desc}</p>
            <blockquote className="border-l-4 border-[var(--color-gold)] pl-5 py-2 mb-8">
              <p className={`text-[var(--color-charcoal)] italic text-base leading-relaxed font-serif ${ne}`}>
                &ldquo;{T.quote}&rdquo;
              </p>
              <footer className={`text-gray-400 text-sm mt-2 font-medium ${ne}`}>{T.quoteBy}</footer>
            </blockquote>
            <button onClick={() => document.querySelector("#appointment")?.scrollIntoView({ behavior: "smooth" })}
              className={`inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200 shadow-sm hover:shadow-md ${ne}`}
              style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, #2856a0 100%)" }}>
              <Heart size={15} />{T.cta}
            </button>
          </motion.div>

          <div className="space-y-4">
            {T.initiatives.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300"
                style={{ background: bgs[i] }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${colors[i]}18` }}>
                  {(() => { const Icon = icons[i]; return <Icon size={18} style={{ color: colors[i] }} />; })()}
                </div>
                <div>
                  <h3 className={`font-semibold text-[var(--color-charcoal)] text-sm mb-1 ${ne}`}>{item.title}</h3>
                  <p className={`text-gray-500 text-xs leading-relaxed mb-2 ${ne}`}>{item.desc}</p>
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${ne}`}
                    style={{ background: `${colors[i]}12`, color: colors[i] }}>{item.impact}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
