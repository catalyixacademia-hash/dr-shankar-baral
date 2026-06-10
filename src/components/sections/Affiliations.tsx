"use client";

import { motion } from "framer-motion";
import { Building2, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const affiliations = [
  {
    nameEn: "Gandaki Medical College Teaching Hospital", nameNe: "गण्डकी मेडिकल कलेज टिचिङ अस्पताल",
    short: "GMCTH",
    roleEn: "Associate Professor", roleNe: "सहयोगी प्राध्यापक",
    location: "Pokhara, Nepal",
    typeEn: "Teaching Hospital", typeNe: "टिचिङ अस्पताल",
    descEn: "One of the leading medical colleges in Western Nepal, where Dr. Baral serves as Associate Professor since 2082/05/01.",
    descNe: "पश्चिम नेपालको अग्रणी मेडिकल कलेजहरूमध्ये एक, जहाँ डा. बराल २०८२/०५/०१ देखि सहयोगी प्राध्यापकको रूपमा कार्यरत छन्।",
    color: "#1a3a5c", bg: "var(--color-surface)",
  },
  {
    nameEn: "Pokhara Gastro Liver Centre Pvt. Ltd.", nameNe: "पोखरा ग्यास्ट्रो लिभर सेन्टर प्रा.लि.",
    short: "PGLC",
    roleEn: "Consultant Gastroenterologist", roleNe: "परामर्शदाता ग्यास्ट्रोएन्टेरोलोजिस्ट",
    location: "Pokhara, Nepal",
    typeEn: "Specialty Clinic", typeNe: "विशेषज्ञ क्लिनिक",
    descEn: "Primary consultation and procedure centre. Dr. Baral sees patients and performs full range of endoscopic procedures. Phone: 061-590162 / 061-590163.",
    descNe: "मुख्य परामर्श र प्रक्रिया केन्द्र। डा. बराल बिरामी हेर्नुहुन्छ र एन्डोस्कोपिक प्रक्रियाहरूको पूर्ण दायरा सम्पन्न गर्नुहुन्छ। फोन: ०६१-५९०१६२ / ०६१-५९०१६३।",
    color: "#0d7377", bg: "#f0fafa",
  },
  {
    nameEn: "Pokhara Academy of Health Sciences (PAHS)", nameNe: "पोखरा एकेडेमी अफ हेल्थ साइन्सेज (पीएएचएस)",
    short: "PAHS",
    roleEn: "Assistant Professor", roleNe: "सहायक प्राध्यापक",
    location: "Pokhara, Nepal",
    typeEn: "Health Sciences Academy", typeNe: "स्वास्थ्य विज्ञान एकेडेमी",
    descEn: "Academic and clinical engagement since 2022 at the region's premier health sciences institution.",
    descNe: "२०२२ देखि क्षेत्रको प्रमुख स्वास्थ्य विज्ञान संस्थामा शैक्षिक र नैदानिक संलग्नता।",
    color: "#7c3aed", bg: "#f5f3ff",
  },
  {
    nameEn: "Nepal Manipal Teaching Hospital", nameNe: "नेपाल मणिपाल टिचिङ अस्पताल",
    short: "NMTH",
    roleEn: "Senior Consultant", roleNe: "वरिष्ठ परामर्शदाता",
    location: "Pokhara, Nepal",
    typeEn: "Teaching Hospital", typeNe: "टिचिङ अस्पताल",
    descEn: "Affiliated teaching hospital where Dr. Baral extends specialized gastroenterology care to a wider patient population.",
    descNe: "सम्बद्ध टिचिङ अस्पताल जहाँ डा. बराल व्यापक बिरामी जनसंख्यामा विशेषज्ञ ग्यास्ट्रोएन्टेरोलोजी सेवा पुर्‍याउनुहुन्छ।",
    color: "#d97706", bg: "#fefce8",
  },
];

export default function Affiliations() {
  const { lang } = useLanguage();
  const T = t[lang].affiliations;
  const isNe = lang === "ne";
  const ne = isNe ? "font-nepali" : "";

  return (
    <section id="affiliations" className="section-padding bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className={`text-[var(--color-teal)] text-xs font-bold tracking-[0.14em] uppercase mb-3 ${ne}`}>{T.tag}</p>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-[var(--color-charcoal)] mb-4 heading-accent heading-accent-center ${ne}`}>
            {T.h2a}{" "}<span style={{ color: "var(--color-primary)" }}>{T.h2b}</span>
          </h2>
          <p className={`text-gray-500 text-base max-w-2xl mx-auto leading-relaxed mt-6 ${ne}`}>{T.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {affiliations.map((aff, i) => (
            <motion.div key={aff.nameEn} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-gray-100 p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: aff.bg }}>
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm"
                  style={{ background: `${aff.color}15` }}>
                  <span className="font-bold text-sm" style={{ color: aff.color }}>{aff.short}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-serif font-bold text-[var(--color-charcoal)] text-base leading-snug mb-2 ${ne}`}>
                    {isNe ? aff.nameNe : aff.nameEn}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${ne}`}
                      style={{ background: `${aff.color}15`, color: aff.color }}>
                      {isNe ? aff.typeNe : aff.typeEn}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 text-[10px]">
                      <MapPin size={10} />{aff.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 size={12} style={{ color: aff.color }} />
                    <span className={`text-xs font-semibold ${ne}`} style={{ color: aff.color }}>
                      {isNe ? aff.roleNe : aff.roleEn}
                    </span>
                  </div>
                  <p className={`text-gray-500 text-xs leading-relaxed ${ne}`}>
                    {isNe ? aff.descNe : aff.descEn}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
