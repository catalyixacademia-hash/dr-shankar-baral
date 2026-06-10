"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, CheckCircle, ChevronDown, Phone } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const T = t[lang].hero;
  const isNe = lang === "ne";
  const ne = isNe ? "font-nepali" : "";

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(140deg, #0d1f3c 0%, #1a3c6e 40%, #0a5a70 75%, #063f4e 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(201,162,74,0.18) 0%, rgba(10,138,144,0.12) 50%, transparent 70%)" }} />
        <div className="absolute bottom-0 -left-40 w-[600px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(10,138,144,0.20) 0%, transparent 65%)" }} />
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-[38%] w-px h-full opacity-10"
          style={{ background: "linear-gradient(to bottom, transparent, var(--color-gold), transparent)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="order-2 lg:order-1">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }} className="inline-flex items-center gap-2.5 mb-7">
              <span className="w-8 h-[2px] bg-[var(--color-gold)]" />
              <span className={`text-[var(--color-gold)] text-xs font-bold tracking-[0.12em] uppercase ${ne}`}>
                {T.tag}
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className={`font-serif text-[2.5rem] sm:text-5xl lg:text-[3.2rem] font-bold text-white leading-[1.1] mb-5 ${ne ? "font-nepali text-3xl sm:text-4xl lg:text-5xl" : ""}`}>
              {T.h1a}<br />
              <span style={{ background: "linear-gradient(90deg, #e8c86b 0%, #c9a24a 60%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {T.h1b}
              </span>
              <br />
              <span className="text-white">{T.h1c}</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className={`text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-xl ${ne}`}>
              {T.sub}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 }} className="flex flex-wrap gap-2 mb-10">
              {T.badges.map((badge) => (
                <div key={badge} className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${ne}`}
                  style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(201,162,74,0.35)", color: "rgba(255,255,255,0.9)" }}>
                  <CheckCircle size={11} className="text-[var(--color-gold)]" />
                  {badge}
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52 }} className="flex flex-col sm:flex-row gap-3 mb-10">
              <button onClick={() => scrollTo("#appointment")}
                className={`group inline-flex items-center justify-center gap-2 font-bold px-8 py-4 rounded-full text-white text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${ne}`}
                style={{ background: "linear-gradient(135deg, #c9a24a 0%, #a07c2e 100%)" }}>
                {T.cta1}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollTo("#services")}
                className={`inline-flex items-center justify-center border border-white/25 hover:border-white/50 text-white/90 hover:bg-white/10 font-medium px-8 py-4 rounded-full text-sm transition-all duration-200 ${ne}`}>
                {T.cta2}
              </button>
              <a href="tel:9846205487"
                className="inline-flex items-center justify-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
                <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center">
                  <Phone size={14} />
                </div>
                <span className="hidden sm:inline">9846205487</span>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.62 }}
              className="pt-7 border-t border-white/10 flex flex-wrap gap-8">
              {[
                { value: isNe ? "१०+" : "10+", label: T.stats[0] },
                { value: isNe ? "१०००+" : "1000+", label: T.stats[1] },
                { value: isNe ? "८" : "8", label: T.stats[2] },
                { value: isNe ? "३९७+" : "397+", label: T.stats[3] },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-[1.9rem] font-bold text-white leading-none">{s.value}</div>
                  <div className={`text-white/50 text-[11px] font-medium mt-1 uppercase tracking-wide ${ne}`}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Portrait ── */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl opacity-30"
                style={{ background: "linear-gradient(135deg, var(--color-gold) 0%, transparent 60%)" }} />
              <div className="absolute inset-0 rounded-2xl"
                style={{ background: "linear-gradient(135deg, rgba(10,138,144,0.25) 0%, transparent 80%)", filter: "blur(20px)", transform: "scale(0.95)" }} />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ width: "clamp(260px, 36vw, 420px)" }}>
                <Image src="/doctor-portrait.jpeg"
                  alt="Dr. Shankar Baral — Consultant Gastroenterologist Pokhara Nepal"
                  width={1068} height={1600}
                  className="w-full h-auto object-cover object-top"
                  priority quality={90} />
                <div className="absolute bottom-0 left-0 right-0 h-32"
                  style={{ background: "linear-gradient(to top, rgba(13,31,60,0.85) 0%, rgba(13,31,60,0.3) 60%, transparent 100%)" }} />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="font-serif text-white text-lg font-bold leading-tight">Dr. Shankar Baral</p>
                  <p className="text-white/65 text-xs font-medium mt-0.5">DM Gastroenterology · MBBS · MD</p>
                </div>
              </div>

              <motion.div initial={{ opacity: 0, x: 20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -right-5 top-10 bg-white rounded-2xl shadow-xl py-3 px-4">
                <p className="text-[var(--color-primary)] font-bold text-xs">NMC Reg. #10280</p>
                <p className="text-gray-400 text-[10px] mt-0.5">Nepal Medical Council</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20, y: 10 }} animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: 1.05 }}
                className="absolute -left-5 bottom-28 bg-white rounded-2xl shadow-xl py-3 px-4">
                <p className="font-bold text-xl leading-none" style={{ color: "var(--color-teal)" }}>397+</p>
                <p className="text-gray-400 text-[10px] font-medium mt-0.5">
                  {isNe ? "शैक्षिक उद्धरणहरू" : "Academic Citations"}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
        onClick={() => scrollTo("#credentials")}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/35 hover:text-white/65 transition-colors">
        <span className={`text-[10px] font-bold tracking-widest uppercase ${ne}`}>
          {isNe ? "तल जानुहोस्" : "Scroll"}
        </span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
