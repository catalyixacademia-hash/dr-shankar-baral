"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GraduationCap, Globe, BookOpen, Heart, Stethoscope } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const icons = [GraduationCap, Globe, BookOpen, Heart, Stethoscope];

export default function About() {
  const { lang } = useLanguage();
  const T = t[lang].about;
  const isNe = lang === "ne";
  const ne = isNe ? "font-nepali" : "";

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Image */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="absolute -top-8 -left-8 right-8 bottom-8 rounded-3xl"
              style={{ background: "linear-gradient(135deg, rgba(26,60,110,0.06) 0%, rgba(10,138,144,0.04) 100%)" }} />
            <div className="absolute -top-3 -left-3 w-16 h-16 rounded-tl-2xl border-t-4 border-l-4 rounded-bl-none rounded-tr-none"
              style={{ borderColor: "var(--color-gold)" }} />
            <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-br-2xl border-b-4 border-r-4 rounded-tl-none rounded-bl-none"
              style={{ borderColor: "var(--color-teal)" }} />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/doctor-about.jpeg"
                alt="Dr. Shankar Baral — Gastroenterologist Pokhara Gastro Liver Centre"
                width={1076} height={1280}
                className="w-full h-auto object-cover object-top" quality={90} />
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute -bottom-6 -right-4 text-white rounded-2xl p-5 shadow-xl max-w-[210px]"
              style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, #2856a0 100%)" }}>
              <div className={`font-serif text-xl font-bold ${ne}`}>
                {isNe ? "गण्डकी मेडिकल कलेज" : "Gandaki Medical College"}
              </div>
              <div className={`text-white/75 text-xs font-medium mt-1 leading-tight ${ne}`}>
                {isNe ? "सहयोगी प्राध्यापक\n२०८२/०५/०१ देखि" : "Associate Professor\n2082/05/01 onwards"}
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className={`text-[var(--color-teal)] text-xs font-bold tracking-[0.14em] uppercase mb-3 ${ne}`}>
              {T.tag}
            </p>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)] mb-2 leading-tight heading-accent ${ne}`}>
              {T.h2a}{" "}
              <span style={{ color: "var(--color-primary)" }}>{T.h2b}</span>
            </h2>

            <div className={`space-y-4 text-gray-600 leading-relaxed mt-8 mb-8 prose-medical ${ne}`}>
              <p>{T.p1}</p>
              <p>{T.p2}</p>
              <p>{T.p3}</p>
            </div>

            <div className="space-y-3">
              {T.highlights.map((h, i) => (
                <motion.div key={h.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3.5 p-4 rounded-xl border border-gray-100 hover:border-[var(--color-teal)]/30 hover:bg-[var(--color-surface)] transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(10,138,144,0.10)" }}>
                    {(() => { const Icon = icons[i]; return <Icon size={16} style={{ color: "var(--color-teal)" }} />; })()}
                  </div>
                  <div>
                    <p className={`font-semibold text-[var(--color-charcoal)] text-sm mb-0.5 ${ne}`}>{h.title}</p>
                    <p className={`text-gray-500 text-xs leading-relaxed ${ne}`}>{h.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
