"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const conditions = [
  { en: "Acid Reflux (GERD)", ne: "एसिड रिफ्लक्स (जीईआरडी)", catEn: "Upper GI", catNe: "माथिल्लो जीआई", descEn: "Chronic acid reflux causing heartburn, regurgitation, and esophageal complications.", descNe: "दीर्घकालीन एसिड रिफ्लक्स जसले छाती जलन, उल्टी आउने प्रवृत्ति र खाद्यनली जटिलताहरू ल्याउँछ।", color: "#e8f4fd", accent: "#2a5282" },
  { en: "Gastritis", ne: "ग्यास्ट्राइटिस", catEn: "Upper GI", catNe: "माथिल्लो जीआई", descEn: "Inflammation of the stomach lining, often from H. pylori or NSAIDs.", descNe: "एच. पाइलोरी वा एनएसएआईडीबाट प्रायः हुने पेटको भित्री तहको सूजन।", color: "#f0fdf4", accent: "#276749" },
  { en: "Peptic Ulcers", ne: "पेप्टिक अल्सर", catEn: "Upper GI", catNe: "माथिल्लो जीआई", descEn: "Open sores in the stomach or duodenum causing pain, bleeding, or perforation.", descNe: "पेट वा ड्युओडेनममा खुला घाउहरू जसले दुखाइ, रक्तस्राव वा छिद्र निम्त्याउँछ।", color: "#fff7ed", accent: "#c05621" },
  { en: "Irritable Bowel Syndrome", ne: "इरिटेबल बाउल सिन्ड्रोम", catEn: "Lower GI", catNe: "तल्लो जीआई", descEn: "Functional bowel disorder with abdominal pain, bloating, and altered bowel habits.", descNe: "पेट दुखाइ, पेट फुल्ने र दिसाको बानी परिवर्तनसहितको कार्यात्मक आन्त्र विकार।", color: "#fdf4ff", accent: "#7c3aed" },
  { en: "Inflammatory Bowel Disease", ne: "इन्फ्लामेटरी बाउल रोग", catEn: "Lower GI", catNe: "तल्लो जीआई", descEn: "Crohn's disease and Ulcerative Colitis — chronic inflammatory conditions of the gut.", descNe: "क्रोन्स रोग र अल्सरेटिभ कोलाइटिस — आन्द्राको दीर्घकालीन सूजन।", color: "#fff1f2", accent: "#be123c" },
  { en: "Fatty Liver (NAFLD/NASH)", ne: "फ्याटी लिभर (एनएएफएलडी/एनएएसएच)", catEn: "Liver", catNe: "कलेजो", descEn: "Fat accumulation in the liver, often related to metabolic syndrome and obesity.", descNe: "कलेजोमा बोसो जम्मा हुने, प्रायः मेटाबोलिक सिन्ड्रोम र मोटोपनसँग सम्बन्धित।", color: "#fefce8", accent: "#a16207" },
  { en: "Hepatitis B & C", ne: "हेपाटाइटिस बी र सी", catEn: "Liver", catNe: "कलेजो", descEn: "Viral hepatitis infections that can progress to cirrhosis and liver cancer.", descNe: "भाइरल हेपाटाइटिस संक्रमण जुन उपचार नगरे सिरोसिस र कलेजो क्यान्सरमा बदलिन सक्छ।", color: "#f0fdfa", accent: "#0f766e" },
  { en: "Liver Cirrhosis", ne: "कलेजो सिरोसिस", catEn: "Liver", catNe: "कलेजो", descEn: "Advanced liver fibrosis with complications including ascites, varices, and encephalopathy.", descNe: "जलोदर, भेरिकोज र एन्सेफालोप्याथी सहित उन्नत कलेजो फाइब्रोसिस।", color: "#eff6ff", accent: "#1d4ed8" },
  { en: "Pancreatitis", ne: "प्यान्क्रिएटाइटिस", catEn: "Pancreas", catNe: "प्यान्क्रियाज", descEn: "Acute or chronic inflammation of the pancreas causing severe abdominal pain.", descNe: "तीव्र पेट दुखाइ निम्त्याउने प्यान्क्रियाजको तीव्र वा दीर्घकालीन सूजन।", color: "#fdf2f8", accent: "#9d174d" },
  { en: "Gallstone Disorders", ne: "पित्तथैली ढुंगा", catEn: "Biliary", catNe: "पित्त नली", descEn: "Gallstones causing pain, jaundice, and infection in gallbladder or bile ducts.", descNe: "पित्तथैली वा पित्त नलीमा ढुंगाले दुखाइ, पहेंलो रोग र संक्रमण गराउने।", color: "#f5f3ff", accent: "#6d28d9" },
  { en: "Colon Polyps", ne: "कोलन पोलिप", catEn: "Lower GI", catNe: "तल्लो जीआई", descEn: "Growths in the colon that can progress to colorectal cancer if undetected.", descNe: "कोलनमा वृद्धि जुन पत्ता नलागे कोलोरेक्टल क्यान्सरमा बदलिन सक्छ।", color: "#ecfdf5", accent: "#065f46" },
  { en: "Colorectal Cancer Screening", ne: "कोलोरेक्टल क्यान्सर स्क्रिनिङ", catEn: "Cancer", catNe: "क्यान्सर", descEn: "Preventive screening and surveillance for early-stage colorectal malignancy.", descNe: "प्रारम्भिक कोलोरेक्टल दुर्दमताको निवारक स्क्रिनिङ र निगरानी।", color: "#fef2f2", accent: "#991b1b" },
  { en: "GI Bleeding", ne: "जीआई रक्तस्राव", catEn: "Emergency", catNe: "आपतकालीन", descEn: "Upper or lower GI bleeding requiring urgent endoscopic diagnosis and intervention.", descNe: "माथिल्लो वा तल्लो जीआई रक्तस्राव जसमा तत्काल एन्डोस्कोपिक हस्तक्षेप आवश्यक।", color: "#fff5f5", accent: "#c53030" },
  { en: "Swallowing Disorders", ne: "निल्न गाह्रो हुने", catEn: "Upper GI", catNe: "माथिल्लो जीआई", descEn: "Dysphagia from achalasia, strictures, or esophageal motility disorders.", descNe: "एकालेसिया, संकुचन वा खाद्यनली गतिशीलता विकारबाट डिस्फेजिया।", color: "#ebf8ff", accent: "#2b6cb0" },
];

export default function Conditions() {
  const { lang } = useLanguage();
  const T = t[lang].conditions;
  const isNe = lang === "ne";
  const ne = isNe ? "font-nepali" : "";

  return (
    <section id="conditions" className="section-padding bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className={`text-[var(--color-teal)] text-xs font-bold tracking-[0.14em] uppercase mb-3 ${ne}`}>{T.tag}</p>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-[var(--color-charcoal)] mb-4 heading-accent heading-accent-center ${ne}`}>
            {T.h2a}{" "}<span style={{ color: "var(--color-primary)" }}>{T.h2b}</span>
          </h2>
          <p className={`text-gray-500 text-base max-w-2xl mx-auto leading-relaxed mt-6 ${ne}`}>{T.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {conditions.map((c, i) => (
            <motion.div key={c.en} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              className="group rounded-2xl p-5 border border-transparent hover:shadow-md transition-all duration-300 cursor-default"
              style={{ background: c.color }}>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mb-3 ${ne}`}
                style={{ background: `${c.accent}15`, color: c.accent }}>
                {isNe ? c.catNe : c.catEn}
              </span>
              <h3 className={`font-semibold text-sm mb-2 leading-snug ${ne}`} style={{ color: c.accent }}>
                {isNe ? c.ne : c.en}
              </h3>
              <p className={`text-gray-600 text-xs leading-relaxed ${ne}`}>
                {isNe ? c.descNe : c.descEn}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} className="text-center mt-14">
          <p className={`text-gray-500 text-sm mb-4 ${ne}`}>{T.ctaSub}</p>
          <button onClick={() => document.querySelector("#appointment")?.scrollIntoView({ behavior: "smooth" })}
            className={`inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-200 shadow-sm hover:shadow-md ${ne}`}
            style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, #2856a0 100%)" }}>
            {T.cta}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
