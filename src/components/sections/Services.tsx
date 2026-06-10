"use client";

import { motion } from "framer-motion";
import {
  Activity, Microscope, Zap, Heart, Shield, Droplets,
  CircleDot, Search, Layers, Workflow, ScanLine, Radio, Waves,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const icons = [ScanLine, Search, Workflow, Radio, Activity, Waves, Layers, Shield, Droplets, Heart, CircleDot, Zap];
const featuredIndex = 1;

export default function Services() {
  const { lang } = useLanguage();
  const T = t[lang].services;
  const isNe = lang === "ne";
  const ne = isNe ? "font-nepali" : "";

  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className={`text-[var(--color-teal)] text-xs font-bold tracking-[0.14em] uppercase mb-3 ${ne}`}>
            {T.tag}
          </p>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-[var(--color-charcoal)] mb-4 heading-accent heading-accent-center ${ne}`}>
            {T.h2a}{" "}
            <span style={{ color: "var(--color-primary)" }}>{T.h2b}</span>
          </h2>
          <p className={`text-gray-500 text-base max-w-2xl mx-auto leading-relaxed mt-6 ${ne}`}>{T.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {T.items.map((svc, i) => {
            const Icon = icons[i];
            const featured = i === featuredIndex;
            return (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 6) * 0.07 }}
                className={`group relative rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-default ${
                  featured ? "border-transparent text-white" : "border-gray-100 bg-white hover:border-[var(--color-primary)]/20"
                }`}
                style={featured ? { background: "linear-gradient(135deg, var(--color-primary) 0%, #2856a0 100%)" } : {}}>
                {featured && (
                  <div className={`absolute top-4 right-4 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${ne}`}
                    style={{ background: "var(--color-gold)" }}>{T.popular}</div>
                )}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${featured ? "bg-white/20" : ""}`}
                  style={!featured ? { background: "linear-gradient(135deg, rgba(26,60,110,0.08) 0%, rgba(10,138,144,0.08) 100%)" } : {}}>
                  {Icon && <Icon size={20} style={{ color: featured ? "white" : "var(--color-primary)" }} />}
                </div>
                <h3 className={`font-serif font-bold text-lg mb-2 ${featured ? "text-white" : "text-[var(--color-charcoal)]"} ${ne}`}>
                  {svc.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${featured ? "text-white/75" : "text-gray-500"} ${ne}`}>
                  {svc.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {svc.benefits.map((b) => (
                    <span key={b} className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      featured ? "bg-white/15 text-white/90" : "bg-[var(--color-surface)] text-[var(--color-charcoal-light)]"
                    } ${ne}`}>{b}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
