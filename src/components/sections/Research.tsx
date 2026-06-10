"use client";

import { motion } from "framer-motion";
import { BookOpen, TrendingUp, Globe, Award, ExternalLink, Quote } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const publications = [
  { title: "Outcome of Pneumatic Balloon Dilatation in Achalasia Cardia", journal: "Journal of Advances in Internal Medicine", year: "2021", doi: "10.3126/jaim.v10i1.37083", type: "Original Research", typeNe: "मौलिक अनुसन्धान", role: "Main Author", roleNe: "मुख्य लेखक" },
  { title: "Outcome of Cyanoacrylate Glue Injection for Bleeding Varices", journal: "Nepal Journal of Medical Sciences", year: "2024", doi: "10.3126/njms.v9i2.72399", type: "Original Research", typeNe: "मौलिक अनुसन्धान", role: "Main Author", roleNe: "मुख्य लेखक" },
  { title: "Clinico-epidemiological Profile of Acinetobacter & Pseudomonas Infections in Western Nepal", journal: "Nepal Journal of Epidemiology", year: "2019", doi: "10.3126/nje.v9i4.26962", type: "Epidemiological Study", typeNe: "महामारी विज्ञान अध्ययन", role: "Co-Author", roleNe: "सह-लेखक" },
  { title: "Successful Endoscopic Management of Foreign Bodies in Upper GI Tract", journal: "JNMA — Journal of Nepal Medical Association", year: "2021", doi: "10.31729/jnma.6714", type: "Cross-Sectional Study", typeNe: "क्रस-सेक्सनल अध्ययन", role: "Main Author", roleNe: "मुख्य लेखक" },
  { title: "Split Versus Non-Split Morning Dosing for Colonoscopy Bowel Preparation", journal: "Journal of Nepal Health Research Council", year: "2021", doi: "10.33314/jnhrc.v19i2.3509", type: "Clinical Trial", typeNe: "नैदानिक परीक्षण", role: "Co-Author", roleNe: "सह-लेखक" },
  { title: "Chronic Pancreatitis: Risk Factors and Clinico-Radiological Profile", journal: "Nepal Medical College Journal", year: "2021", doi: "10.3126/nmcj.v23i2.38526", type: "Hospital-Based Study", typeNe: "अस्पताल-आधारित अध्ययन", role: "Co-Author", roleNe: "सह-लेखक" },
  { title: "Knowledge of Colorectal Carcinoma Screening among General Population, Western Nepal", journal: "Journal of Cancer Science & Therapy", year: "2014", doi: "10.4172/1948-5956.S1.035", type: "Survey Study", typeNe: "सर्वेक्षण अध्ययन", role: "Co-Author", roleNe: "सह-लेखक" },
];

const researchMetrics = [
  { value: 8, suffix: "", labelEn: "Publications", labelNe: "प्रकाशनहरू", icon: BookOpen },
  { value: 397, suffix: "+", labelEn: "Total Citations", labelNe: "कुल उद्धरणहरू", icon: TrendingUp },
  { value: 3, suffix: "", labelEn: "Main Authorship", labelNe: "मुख्य लेखकत्व", icon: Award },
  { value: 5, suffix: "", labelEn: "International Collaborations", labelNe: "अन्तर्राष्ट्रिय सहकार्य", icon: Globe },
];

export default function Research() {
  const { lang } = useLanguage();
  const T = t[lang].research;
  const isNe = lang === "ne";
  const ne = isNe ? "font-nepali" : "";

  return (
    <section id="research" className="section-padding"
      style={{ background: "linear-gradient(140deg, #0d1f3c 0%, #1a3c6e 50%, #0a3d50 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className={`text-[var(--color-gold)] text-xs font-bold tracking-[0.18em] uppercase mb-3 ${ne}`}>{T.tag}</p>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-white mb-4 ${ne}`}>
            {T.h2a}{" "}
            <span style={{ background: "linear-gradient(90deg, #e8c86b 0%, #c9a24a 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {T.h2b}
            </span>
          </h2>
          <p className={`text-gray-400 text-base max-w-2xl mx-auto leading-relaxed ${ne}`}>{T.desc}</p>
        </motion.div>

        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {researchMetrics.map((m, i) => (
            <motion.div key={m.labelEn} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-white/10 p-6 text-center backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.05)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(201,162,74,0.15)" }}>
                <m.icon size={18} style={{ color: "var(--color-gold)" }} />
              </div>
              <div className="font-serif text-3xl font-bold text-white mb-1">
                <AnimatedCounter end={m.value} suffix={m.suffix} />
              </div>
              <p className={`text-gray-400 text-xs font-medium ${ne}`}>{isNe ? m.labelNe : m.labelEn}</p>
            </motion.div>
          ))}
        </div>

        {/* Featured HALT-IT */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden mb-10 border border-[var(--color-gold)]/25"
          style={{ background: "linear-gradient(135deg, rgba(201,162,74,0.10) 0%, rgba(10,138,144,0.07) 100%)" }}>
          <div className="p-8 lg:p-10">
            <div className="flex flex-wrap gap-3 mb-5">
              <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide text-white ${ne}`}
                style={{ background: "var(--color-gold)" }}>{T.featured}</span>
              <span className="border border-white/20 text-white/60 text-xs px-3 py-1 rounded-full">
                The Lancet · Volume 395 · June 2020
              </span>
              <span className={`border border-white/20 text-white/60 text-xs px-3 py-1 rounded-full ${ne}`}>
                {isNe ? "सहयोगी अनुसन्धानकर्ता — नेपाल" : "Contributing Investigator — Nepal"}
              </span>
            </div>
            <Quote size={28} className="text-[var(--color-gold)]/40 mb-3" />
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-3 leading-snug max-w-3xl">
              Effects of a High-Dose 24-h Infusion of Tranexamic Acid on Death and Thromboembolic Events in Patients with Acute Gastrointestinal Bleeding (HALT-IT Trial)
            </h3>
            <p className={`text-gray-300 text-sm leading-relaxed mb-6 max-w-3xl ${ne}`}>
              {isNe
                ? "द ल्यान्सेट (Vol. 395, Issue 10241, P1927–1936)मा प्रकाशित अन्तर्राष्ट्रिय रेन्डमाइज्ड, डबल-ब्लाइन्ड, प्लेसबो-नियन्त्रित ट्रायल। डा. बराल नेपालका सहयोगी अनुसन्धानकर्ताको रूपमा यस विश्वव्यापी महत्त्वपूर्ण नैदानिक ट्रायलमा सहभागी थिए।"
                : <>An international randomized, double-blind, placebo-controlled trial published in <em>The Lancet</em> (Vol. 395, Issue 10241, P1927–1936). Dr. Baral served as contributing investigator for Nepal — one of very few South Asian collaborators in this globally significant clinical trial.</>
              }{" "}
              <span className="text-gray-500 text-xs">DOI: 10.1016/S0140-6736(20)30848-5</span>
            </p>
            <div className="flex flex-wrap gap-6">
              <div>
                <p className={`text-gray-500 text-[10px] uppercase tracking-wide ${ne}`}>{T.journal}</p>
                <p className="text-[var(--color-gold)] font-bold">The Lancet (2020)</p>
              </div>
              <div>
                <p className={`text-gray-500 text-[10px] uppercase tracking-wide ${ne}`}>{T.role}</p>
                <p className={`text-white font-semibold ${ne}`}>{isNe ? "सहयोगी अनुसन्धानकर्ता" : "Contributing Investigator"}</p>
              </div>
              <div>
                <p className={`text-gray-500 text-[10px] uppercase tracking-wide ${ne}`}>{T.studyType}</p>
                <p className={`text-white font-semibold ${ne}`}>{isNe ? "अन्तर्राष्ट्रिय आरसीटी" : "International RCT"}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Publication grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {publications.map((pub, i) => (
            <motion.div key={pub.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: (i % 6) * 0.07, duration: 0.5 }}
              className="rounded-xl border border-white/10 p-5 hover:border-white/20 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.04)" }}>
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${ne}`}
                  style={{ background: "rgba(10,138,144,0.2)", color: "var(--color-teal-light)" }}>
                  {isNe ? pub.typeNe : pub.type}
                </span>
                <span className="text-gray-600 text-[10px] font-medium flex-shrink-0">{pub.year}</span>
              </div>
              <h4 className="text-white font-semibold text-sm leading-snug mb-2">{pub.title}</h4>
              <p className="text-gray-400 text-xs mb-3">{pub.journal}</p>
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${ne}`}
                  style={{ background: pub.role === "Main Author" ? "rgba(201,162,74,0.15)" : "rgba(255,255,255,0.05)", color: pub.role === "Main Author" ? "var(--color-gold)" : "#9ca3af" }}>
                  {isNe ? pub.roleNe : pub.role}
                </span>
                <span className="text-gray-600 text-[10px]">DOI: {pub.doi.slice(0, 20)}…</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ResearchGate CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mt-12">
          <p className={`text-gray-500 text-sm mb-4 ${ne}`}>
            {isNe ? "पूर्ण प्रकाशन सूची र रिसर्चगेट प्रोफाइल हेर्नुहोस्" : "View full publication list and ResearchGate profile"}
          </p>
          <a href="https://www.researchgate.net" target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 border border-[var(--color-gold)]/40 hover:border-[var(--color-gold)] text-[var(--color-gold)] font-semibold px-7 py-3 rounded-full text-sm transition-all duration-200 hover:bg-[var(--color-gold)]/10 ${ne}`}>
            {T.rg}<ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
