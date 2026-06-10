"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ScanLine, Search, Workflow, CircleDot, Package,
  Waves, Grid2X2, CheckCircle, Clock, ChevronRight,
  Microscope, Shield, Zap,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const procedures = [
  {
    icon: ScanLine,
    category: "diagnostic",
    featured: false,
    en: {
      title: "Upper GI Endoscopy",
      subtitle: "Diagnostic & Therapeutic",
      description: "High-definition endoscopy of the esophagus, stomach, and duodenum — diagnosing ulcers, GERD, and treating bleeding or narrowing.",
      outcomes: ["Immediate diagnosis", "Biopsy & tissue sampling", "Bleeding control"],
      indication: "Heartburn, difficulty swallowing, upper abdominal pain, GI bleeding",
      duration: "15–30 min",
    },
    ne: {
      title: "माथिल्लो जीआई एन्डोस्कोपी",
      subtitle: "डायग्नोस्टिक र थेरापेटिक",
      description: "अल्सर, जीईआरडी निदान र खाद्यनलीको रक्तस्राव उपचारका लागि एसोफेगस, पेट र ड्युओडेनमको उच्च-परिभाषा एन्डोस्कोपी।",
      outcomes: ["तत्काल निदान", "बायोप्सी र टिसु नमुना", "रक्तस्राव नियन्त्रण"],
      indication: "छाती जलन, निल्न गाह्रो, माथिल्लो पेट दुखाइ, जीआई रक्तस्राव",
      duration: "१५–३० मिनेट",
    },
    color: "#1a3c6e",
    gradient: "linear-gradient(135deg, #1a3c6e 0%, #2856a0 100%)",
    light: "rgba(26,60,110,0.07)",
  },
  {
    icon: Search,
    category: "diagnostic",
    featured: false,
    en: {
      title: "Colonoscopy",
      subtitle: "Colorectal Screening & Polypectomy",
      description: "Complete large-intestine examination using a flexible camera — essential for cancer screening, polyp removal, and IBD evaluation.",
      outcomes: ["Cancer prevention", "Polyp removal", "IBD assessment"],
      indication: "Cancer screening (age 45+), rectal bleeding, change in bowel habits",
      duration: "30–60 min",
    },
    ne: {
      title: "कोलोनोस्कोपी",
      subtitle: "कोलोरेक्टल स्क्रिनिङ र पोलिपेक्टोमी",
      description: "क्यान्सर स्क्रिनिङ, पोलिप हटाउने र आईबीडी मूल्यांकनका लागि लचिलो क्यामेराद्वारा ठूलो आन्द्राको पूर्ण जाँच।",
      outcomes: ["क्यान्सर रोकथाम", "पोलिप हटाउने", "आईबीडी मूल्यांकन"],
      indication: "क्यान्सर स्क्रिनिङ (४५+ उमेर), मलद्वारबाट रक्तस्राव, दिसाको बानीमा परिवर्तन",
      duration: "३०–६० मिनेट",
    },
    color: "#0a8a90",
    gradient: "linear-gradient(135deg, #0a8a90 0%, #12b5bd 100%)",
    light: "rgba(10,138,144,0.07)",
  },
  {
    icon: Workflow,
    category: "advanced",
    featured: true,
    en: {
      title: "ERCP",
      subtitle: "Bile Duct & Pancreatic Intervention",
      description: "Combines endoscopy and fluoroscopy to diagnose and treat bile duct stones, strictures, and pancreatic duct disorders — including stone removal and stent placement.",
      outcomes: ["Stone extraction", "Stent insertion", "Biliary drainage"],
      indication: "Jaundice, bile duct stones, pancreatitis, cholangitis",
      duration: "45–90 min",
    },
    ne: {
      title: "ईआरसीपी",
      subtitle: "पित्त नली र प्यान्क्रियाटिक हस्तक्षेप",
      description: "पित्त नली ढुंगा, संकुचन र प्यान्क्रियाटिक नली विकार निदान र उपचारका लागि एन्डोस्कोपी र फ्लुरोस्कोपीको संयोजन।",
      outcomes: ["ढुंगा हटाउने", "स्टेन्ट राख्ने", "पित्त नली निकास"],
      indication: "पहेंलो रोग, पित्त नली ढुंगा, प्यान्क्रिएटाइटिस, कोलान्जाइटिस",
      duration: "४५–९० मिनेट",
    },
    color: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #9d4edd 100%)",
    light: "rgba(124,58,237,0.07)",
  },
  {
    icon: CircleDot,
    category: "therapeutic",
    featured: false,
    en: {
      title: "Polypectomy",
      subtitle: "Endoscopic Polyp Removal",
      description: "Removal of polyps during colonoscopy using snare cautery or cold forceps — critical for preventing progression to colorectal or gastric cancer.",
      outcomes: ["Cancer prevention", "Same-session removal", "Histological analysis"],
      indication: "Detected polyps, family history of colorectal cancer",
      duration: "During colonoscopy",
    },
    ne: {
      title: "पोलिपेक्टोमी",
      subtitle: "एन्डोस्कोपिक पोलिप हटाउने",
      description: "कोलोनोस्कोपी क्रममा स्नेयर कटेरी वा कोल्ड फोरसेप्सद्वारा पोलिपहरू हटाउने — क्यान्सर रोकथामका लागि महत्त्वपूर्ण।",
      outcomes: ["क्यान्सर रोकथाम", "एकै सत्रमा हटाउने", "हिस्टोलोजिकल विश्लेषण"],
      indication: "पत्ता लागेका पोलिपहरू, परिवारमा कोलोरेक्टल क्यान्सरको इतिहास",
      duration: "कोलोनोस्कोपी क्रममा",
    },
    color: "#d97706",
    gradient: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
    light: "rgba(217,119,6,0.07)",
  },
  {
    icon: Package,
    category: "emergency",
    featured: false,
    en: {
      title: "Foreign Body Removal",
      subtitle: "Endoscopic Retrieval",
      description: "Emergency endoscopic removal of swallowed objects or food impactions from the esophagus, stomach, or duodenum using specialized retrieval devices.",
      outcomes: ["Safe extraction", "Avoiding surgery", "Rapid recovery"],
      indication: "Swallowed objects, food impaction, coin/battery ingestion",
      duration: "20–45 min",
    },
    ne: {
      title: "विदेशी वस्तु हटाउने",
      subtitle: "एन्डोस्कोपिक निकाल्ने",
      description: "विशेष उपकरणहरूद्वारा एसोफेगस, पेट वा ड्युओडेनमबाट निगिएका वस्तुहरू वा खाना फसेको एन्डोस्कोपिक रूपमा हटाउने।",
      outcomes: ["सुरक्षित निकाल्ने", "शल्यक्रिया बच्ने", "छिटो सुधार"],
      indication: "निगिएका वस्तुहरू, खाना फसेको, सिक्का/ब्याट्री निगिएको",
      duration: "२०–४५ मिनेट",
    },
    color: "#0369a1",
    gradient: "linear-gradient(135deg, #0369a1 0%, #0284c7 100%)",
    light: "rgba(3,105,161,0.07)",
  },
  {
    icon: Waves,
    category: "therapeutic",
    featured: false,
    en: {
      title: "Achalasia Dilatation",
      subtitle: "Esophageal Motility Treatment",
      description: "Pneumatic balloon dilatation of the lower esophageal sphincter — treating achalasia, a swallowing disorder causing difficulty passing food into the stomach.",
      outcomes: ["Improved swallowing", "Symptom relief", "Non-surgical"],
      indication: "Progressive dysphagia, regurgitation, confirmed achalasia",
      duration: "30–45 min",
    },
    ne: {
      title: "एकालेसिया डाइलेटेशन",
      subtitle: "एसोफेजियल गतिशीलता उपचार",
      description: "एकालेसिया उपचारका लागि तल्लो एसोफेजियल स्फिन्क्टरको न्युमेटिक बेलुन डाइलेटेशन — खाना पेटमा पठाउन गाह्रो हुने विकार।",
      outcomes: ["निल्न सुधार", "लक्षण राहत", "शल्यक्रियारहित"],
      indication: "बढ्दो डिस्फेजिया, उल्टी आउने, एकालेसिया निदान",
      duration: "३०–४५ मिनेट",
    },
    color: "#0f766e",
    gradient: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)",
    light: "rgba(15,118,110,0.07)",
  },
  {
    icon: Grid2X2,
    category: "advanced",
    featured: false,
    en: {
      title: "Metallic Stenting",
      subtitle: "Self-Expanding Metal Stent Placement",
      description: "Endoscopic placement of self-expanding metal stents in the esophagus, bile ducts, or colon to relieve obstructions from malignant or benign strictures.",
      outcomes: ["Obstruction relief", "Palliative care", "Restoring function"],
      indication: "Esophageal cancer, biliary strictures, malignant colonic obstruction",
      duration: "30–60 min",
    },
    ne: {
      title: "मेटालिक स्टेन्टिङ",
      subtitle: "स्व-विस्तार मेटल स्टेन्ट राख्ने",
      description: "घातक वा सौम्य संकुचनले भएको अवरोध हटाउन एसोफेगस, पित्त नली वा कोलनमा स्व-विस्तार मेटल स्टेन्ट राख्ने।",
      outcomes: ["अवरोध राहत", "उपशामक हेरचाह", "कार्य पुनर्स्थापना"],
      indication: "एसोफेजियल क्यान्सर, पित्त नली संकुचन, घातक कोलोनिक अवरोध",
      duration: "३०–६० मिनेट",
    },
    color: "#9d174d",
    gradient: "linear-gradient(135deg, #9d174d 0%, #db2777 100%)",
    light: "rgba(157,23,77,0.07)",
  },
];

const categories = [
  { id: "all", en: "All Procedures", ne: "सबै प्रक्रियाहरू" },
  { id: "diagnostic", en: "Diagnostic", ne: "डायग्नोस्टिक" },
  { id: "therapeutic", en: "Therapeutic", ne: "थेरापेटिक" },
  { id: "advanced", en: "Advanced", ne: "उन्नत" },
  { id: "emergency", en: "Emergency", ne: "आपतकालीन" },
];

const quickStats = [
  { icon: Microscope, en: "7 Advanced Procedures", ne: "७ उन्नत प्रक्रियाहरू", sub: "Upper GI to Biliary" },
  { icon: Shield, en: "Trained at Sir Gangaram", ne: "सर गंगाराम दिल्लीमा तालिम", sub: "New Delhi, India" },
  { icon: Zap, en: "1,000+ Endoscopies", ne: "१,०००+ एन्डोस्कोपीहरू", sub: "Performed to date" },
];

export default function Procedures() {
  const { lang } = useLanguage();
  const T = t[lang].procedures;
  const isNe = lang === "ne";
  const ne = isNe ? "font-nepali" : "";
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const filtered = activeCategory === "all"
    ? procedures
    : procedures.filter((p) => p.category === activeCategory);

  return (
    <section id="procedures" className="section-padding bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
          <p className={`text-[var(--color-teal)] text-xs font-bold tracking-[0.14em] uppercase mb-3 ${ne}`}>{T.tag}</p>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-[var(--color-charcoal)] mb-4 heading-accent heading-accent-center ${ne}`}>
            {T.h2a}{" "}<span style={{ color: "var(--color-primary)" }}>{T.h2b}</span>
          </h2>
          <p className={`text-gray-500 text-base max-w-2xl mx-auto leading-relaxed mt-6 ${ne}`}>{T.desc}</p>
        </motion.div>

        {/* Quick stats */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {quickStats.map((s, i) => (
            <div key={i} className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, rgba(26,60,110,0.10) 0%, rgba(10,138,144,0.10) 100%)" }}>
                <s.icon size={18} style={{ color: "var(--color-primary)" }} />
              </div>
              <div>
                <p className={`font-semibold text-[var(--color-charcoal)] text-sm ${ne}`}>
                  {isNe ? s.ne : s.en}
                </p>
                <p className="text-gray-400 text-xs mt-0.5">{s.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Category filter */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
          className="flex gap-2 mb-8 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className={`relative flex-shrink-0 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 ${ne} ${
                activeCategory === cat.id
                  ? "text-white shadow-md"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-[var(--color-primary)]/30 hover:text-[var(--color-primary)]"
              }`}
              style={activeCategory === cat.id
                ? { background: "linear-gradient(135deg, var(--color-primary) 0%, #2856a0 100%)" }
                : {}}>
              {isNe ? cat.ne : cat.en}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((proc, i) => {
              const P = isNe ? proc.ne : proc.en;
              const isHovered = hoveredIdx === i;
              return (
                <motion.div key={proc.en.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 cursor-default ${
                    proc.featured
                      ? "border-transparent shadow-lg"
                      : "border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1"
                  }`}
                  style={proc.featured ? { background: "white", boxShadow: `0 4px 32px ${proc.color}22` } : {}}>

                  {/* Featured badge */}
                  {proc.featured && (
                    <div className={`absolute top-4 right-4 z-10 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide ${ne}`}
                      style={{ background: "var(--color-gold)" }}>
                      {isNe ? "उन्नत" : "Highly Specialized"}
                    </div>
                  )}

                  {/* Colored top panel */}
                  <div className="relative p-6 pb-5 overflow-hidden"
                    style={{ background: proc.gradient }}>
                    {/* Decorative circles */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10 bg-white" />
                    <div className="absolute top-4 right-12 w-10 h-10 rounded-full opacity-10 bg-white" />

                    <div className="relative flex items-start justify-between">
                      <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <proc.icon size={22} color="white" />
                      </div>
                      <span className={`text-white/70 text-[10px] font-bold uppercase tracking-wider mt-1 ${ne}`}>
                        {isNe
                          ? proc.category === "diagnostic" ? "डायग्नोस्टिक"
                            : proc.category === "therapeutic" ? "थेरापेटिक"
                            : proc.category === "advanced" ? "उन्नत"
                            : "आपतकालीन"
                          : proc.category.charAt(0).toUpperCase() + proc.category.slice(1)
                        }
                      </span>
                    </div>
                    <div className="mt-4">
                      <h3 className={`font-serif font-bold text-xl text-white leading-snug ${ne}`}>{P.title}</h3>
                      <p className={`text-white/70 text-xs font-medium mt-1 ${ne}`}>{P.subtitle}</p>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <p className={`text-gray-600 text-sm leading-relaxed mb-4 ${ne}`}>{P.description}</p>

                    {/* Outcomes */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {P.outcomes.map((o) => (
                        <span key={o} className={`flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${ne}`}
                          style={{ background: `${proc.color}10`, color: proc.color }}>
                          <CheckCircle size={10} />{o}
                        </span>
                      ))}
                    </div>

                    {/* Meta pills */}
                    <div className="border-t border-gray-100 pt-4 space-y-2">
                      <div className="flex items-start gap-2">
                        <Clock size={12} className="text-gray-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className={`text-[10px] text-gray-400 uppercase tracking-wide font-semibold ${ne}`}>{T.duration}: </span>
                          <span className={`text-xs font-bold ${ne}`} style={{ color: proc.color }}>{P.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <ChevronRight size={12} className="text-gray-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className={`text-[10px] text-gray-400 uppercase tracking-wide font-semibold ${ne}`}>{T.indicatedFor}: </span>
                          <span className={`text-xs text-gray-500 leading-snug ${ne}`}>{P.indication}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom hover strip */}
                  <div className={`h-1 transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
                    style={{ background: proc.gradient }} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Book CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mt-14">
          <p className={`text-gray-500 text-sm mb-4 ${ne}`}>
            {isNe ? "कुन प्रक्रिया तपाईंका लागि उपयुक्त छ भनेर थाहा पाउन परामर्श लिनुहोस्।" : "Not sure which procedure you need? Schedule a consultation for expert guidance."}
          </p>
          <button onClick={() => document.querySelector("#appointment")?.scrollIntoView({ behavior: "smooth" })}
            className={`inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 shadow-sm hover:shadow-md ${ne}`}
            style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, #2856a0 100%)" }}>
            {isNe ? "परामर्श बुक गर्नुहोस्" : "Book a Consultation"}<ChevronRight size={15} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
