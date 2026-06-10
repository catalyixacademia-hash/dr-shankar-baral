"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Leaf, Shield, Activity, Apple, Heart } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const articles = [
  {
    categoryEn: "Digestive Health", categoryNe: "पाचन स्वास्थ्य",
    categoryColor: "#0d7377", categoryBg: "#f0fafa",
    icon: Activity,
    titleEn: "Understanding GERD: When Heartburn Becomes a Medical Concern",
    titleNe: "जीईआरडी बुझ्नुहोस्: छाती जलन कहिले चिकित्सकीय समस्या बन्छ",
    excerptEn: "Occasional heartburn is normal, but persistent acid reflux can damage your esophagus. Learn when to seek specialist care and what treatment options are available.",
    excerptNe: "कहिलेकाहीं छाती जलन सामान्य हो, तर निरन्तर एसिड रिफ्लक्सले खाद्यनलीलाई क्षति पुर्‍याउन सक्छ। कहिले विशेषज्ञ सेवा लिने र कुन उपचार विकल्पहरू उपलब्ध छन् जान्नुहोस्।",
    readTimeEn: "5 min read", readTimeNe: "५ मिनेट",
  },
  {
    categoryEn: "Liver Health", categoryNe: "कलेजो स्वास्थ्य",
    categoryColor: "#d97706", categoryBg: "#fefce8",
    icon: Leaf,
    titleEn: "Fatty Liver: The Silent Epidemic — What You Need to Know",
    titleNe: "फ्याटी लिभर: मौन महामारी — तपाईंले जान्नु पर्ने कुरा",
    excerptEn: "Non-alcoholic fatty liver disease affects 1 in 4 adults worldwide. Discover the risk factors, symptoms, and how lifestyle changes can reverse early-stage disease.",
    excerptNe: "गैर-मादक फ्याटी लिभर रोगले विश्वभर ४ मध्ये १ वयस्कलाई प्रभावित गर्छ। जोखिम कारकहरू, लक्षणहरू र जीवनशैली परिवर्तनले प्रारम्भिक अवस्थाको रोग कसरी उल्टाउन सकिन्छ पत्ता लगाउनुहोस्।",
    readTimeEn: "7 min read", readTimeNe: "७ मिनेट",
  },
  {
    categoryEn: "Cancer Prevention", categoryNe: "क्यान्सर रोकथाम",
    categoryColor: "#991b1b", categoryBg: "#fef2f2",
    icon: Shield,
    titleEn: "Colorectal Cancer: Why Screening at 45 Could Save Your Life",
    titleNe: "कोलोरेक्टल क्यान्सर: ४५ मा स्क्रिनिङले किन तपाईंको जीवन बचाउन सक्छ",
    excerptEn: "Colorectal cancer is almost entirely preventable with timely colonoscopy screening. Understand who should be screened, how often, and what to expect.",
    excerptNe: "समयमै कोलोनोस्कोपी स्क्रिनिङले कोलोरेक्टल क्यान्सर लगभग पूर्ण रूपमा रोक्न सकिन्छ। कसले कति पटक स्क्रिनिङ गराउनु पर्छ र के अपेक्षा राख्ने बुझ्नुहोस्।",
    readTimeEn: "6 min read", readTimeNe: "६ मिनेट",
  },
  {
    categoryEn: "Endoscopy Awareness", categoryNe: "एन्डोस्कोपी जनचेतना",
    categoryColor: "#1d4ed8", categoryBg: "#eff6ff",
    icon: BookOpen,
    titleEn: "Demystifying Colonoscopy: Everything You Were Afraid to Ask",
    titleNe: "कोलोनोस्कोपी बुझ्नुहोस्: सोध्न डर लागेका सबै प्रश्नहरू",
    excerptEn: "Many patients avoid colonoscopy out of fear or embarrassment. We answer the most common questions about preparation, the procedure itself, and recovery.",
    excerptNe: "धेरै बिरामीहरू डर वा लाज मानेर कोलोनोस्कोपी गराउँदैनन्। तयारी, प्रक्रिया र सुधारबारे सबभन्दा सामान्य प्रश्नहरूको जवाफ यहाँ छ।",
    readTimeEn: "8 min read", readTimeNe: "८ मिनेट",
  },
  {
    categoryEn: "Nutrition", categoryNe: "पोषण",
    categoryColor: "#276749", categoryBg: "#f0fdf4",
    icon: Apple,
    titleEn: "The Gut-Friendly Diet: Foods That Heal and Foods That Harm",
    titleNe: "आन्त्र-मैत्री आहार: निको पार्ने र हानि गर्ने खानाहरू",
    excerptEn: "Your diet directly impacts your digestive health. Discover evidence-based dietary recommendations for common GI conditions from a gastroenterology specialist.",
    excerptNe: "तपाईंको खाना सोझै पाचन स्वास्थ्यमा असर गर्छ। ग्यास्ट्रोएन्टेरोलोजी विशेषज्ञबाट सामान्य जीआई समस्याहरूका लागि प्रमाण-आधारित आहार सिफारिसहरू पत्ता लगाउनुहोस्।",
    readTimeEn: "9 min read", readTimeNe: "९ मिनेट",
  },
  {
    categoryEn: "Preventive Care", categoryNe: "निवारक हेरचाह",
    categoryColor: "#7c3aed", categoryBg: "#f5f3ff",
    icon: Heart,
    titleEn: "Hepatitis B & C: Testing, Vaccination, and Modern Cure Options",
    titleNe: "हेपाटाइटिस बी र सी: परीक्षण, खोप र आधुनिक उपचार विकल्पहरू",
    excerptEn: "With modern antiviral therapy, Hepatitis C is now curable in over 95% of cases. Learn about testing, vaccination for Hepatitis B, and treatment breakthroughs.",
    excerptNe: "आधुनिक एन्टिभाइरल थेरापीले हेपाटाइटिस सी अब ९५% भन्दा बढी मामिलामा निको पार्न सकिन्छ। परीक्षण, हेपाटाइटिस बी खोप र उपचारका नयाँ सफलताहरू बुझ्नुहोस्।",
    readTimeEn: "6 min read", readTimeNe: "६ मिनेट",
  },
];

export default function PatientEducation() {
  const { lang } = useLanguage();
  const T = t[lang].education;
  const isNe = lang === "ne";
  const ne = isNe ? "font-nepali" : "";

  return (
    <section id="education" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <p className={`text-[var(--color-teal)] text-xs font-bold tracking-[0.14em] uppercase mb-3 ${ne}`}>{T.tag}</p>
            <h2 className={`font-serif text-3xl sm:text-4xl font-bold text-[var(--color-charcoal)] ${ne}`}>
              {T.h2a}{" "}
              <span style={{ color: "var(--color-primary)" }}>{T.h2b}</span>
            </h2>
          </div>
          <p className={`text-gray-500 text-sm max-w-xs leading-relaxed md:text-right ${ne}`}>{T.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.article key={article.titleEn} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className={`group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}>
              <div className="px-5 pt-5 pb-4" style={{ background: article.categoryBg }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: `${article.categoryColor}20` }}>
                    <article.icon size={14} style={{ color: article.categoryColor }} />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${ne}`}
                    style={{ color: article.categoryColor }}>
                    {isNe ? article.categoryNe : article.categoryEn}
                  </span>
                </div>
                <h3 className={`font-serif font-bold text-[var(--color-charcoal)] text-base leading-snug group-hover:text-[var(--color-primary)] transition-colors ${ne}`}>
                  {isNe ? article.titleNe : article.titleEn}
                </h3>
              </div>
              <div className="px-5 py-4 bg-white">
                <p className={`text-gray-500 text-sm leading-relaxed mb-4 ${ne}`}>
                  {isNe ? article.excerptNe : article.excerptEn}
                </p>
                <div className="flex items-center justify-between">
                  <span className={`text-gray-400 text-xs ${ne}`}>{isNe ? article.readTimeNe : article.readTimeEn}</span>
                  <span className={`flex items-center gap-1 text-xs font-semibold group-hover:gap-2 transition-all ${ne}`}
                    style={{ color: article.categoryColor }}>
                    {T.readMore}<ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-8 rounded-2xl bg-[var(--color-surface)] border border-gray-100">
          <p className={`text-[var(--color-charcoal)] font-semibold mb-1 ${ne}`}>{T.comingSoon}</p>
          <p className={`text-gray-400 text-sm ${ne}`}>{T.comingSoonSub}</p>
        </motion.div>
      </div>
    </section>
  );
}
