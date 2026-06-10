"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, FlaskConical } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

const gradients = [
  "linear-gradient(135deg, #1a3c6e 0%, #2856a0 100%)",
  "linear-gradient(135deg, #0a8a90 0%, #12b5bd 100%)",
  "linear-gradient(135deg, #c9a24a 0%, #a07c2e 100%)",
  "linear-gradient(135deg, #6d28d9 0%, #9d4edd 100%)",
];
const lights = [
  "rgba(26,60,110,0.08)", "rgba(10,138,144,0.08)",
  "rgba(201,162,74,0.10)", "rgba(109,40,217,0.08)",
];
const icons = [Award, GraduationCap, BookOpen, FlaskConical];
const statValues = [10, 1000, 8, 397];
const statSuffixes = ["+", "+", "", "+"];

const qualifications = [
  { degree: "DM Gastroenterology", degreeNe: "डीएम ग्यास्ट्रोएन्टेरोलोजी", institute: "National Academy of Medical Sciences (NAMS), Bir Hospital", instituteNe: "नेशनल एकेडेमी अफ मेडिकल साइन्सेज (एनएएमएस), बीर अस्पताल", year: "2018 – 2021", city: "Kathmandu", cityNe: "काठमाण्डौ" },
  { degree: "MD – Internal Medicine", degreeNe: "एमडी — आन्तरिक चिकित्सा", institute: "Manipal College of Medical Sciences (K.U.)", instituteNe: "मणिपाल कलेज अफ मेडिकल साइन्सेज (के.यू.)", year: "2012 – 2015", city: "Pokhara", cityNe: "पोखरा" },
  { degree: "MBBS", degreeNe: "एमबीबीएस", institute: "Manipal College of Medical Sciences (K.U.)", instituteNe: "मणिपाल कलेज अफ मेडिकल साइन्सेज (के.यू.)", year: "2005 – 2010", city: "Pokhara", cityNe: "पोखरा" },
];

const affiliations = [
  { name: "Pokhara Gastro Liver Centre Pvt. Ltd.", nameNe: "पोखरा ग्यास्ट्रो लिभर सेन्टर प्रा.लि.", role: "Consultant Gastroenterologist", roleNe: "परामर्शदाता ग्यास्ट्रोएन्टेरोलोजिस्ट", since: "Pokhara" },
  { name: "Gandaki Medical College", nameNe: "गण्डकी मेडिकल कलेज", role: "Associate Professor", roleNe: "सहयोगी प्राध्यापक", since: "2082/05/01 – Present" },
  { name: "Pokhara Academy of Health Sciences (PAHS)", nameNe: "पोखरा एकेडेमी अफ हेल्थ साइन्सेज (पीएएचएस)", role: "Assistant Professor", roleNe: "सहायक प्राध्यापक", since: "2022 – Present" },
  { name: "Nepal Manipal Teaching Hospital", nameNe: "नेपाल मणिपाल टिचिङ अस्पताल", role: "Senior Consultant", roleNe: "वरिष्ठ परामर्शदाता", since: "Pokhara" },
];

export default function Credentials() {
  const { lang } = useLanguage();
  const T = t[lang].cred;
  const isNe = lang === "ne";
  const ne = isNe ? "font-nepali" : "";

  return (
    <section id="credentials" className="section-padding bg-[var(--color-surface)]">
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
          <p className={`text-gray-500 text-base max-w-2xl mx-auto leading-relaxed mt-6 ${ne}`}>
            {T.desc}
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {icons.map((Icon, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              style={{ background: lights[i] }}>
              <div className="h-1 w-full" style={{ background: gradients[i] }} />
              <div className="p-7">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: gradients[i] }}>
                  <Icon size={20} color="white" />
                </div>
                <div className="font-serif text-[2.6rem] font-bold leading-none mb-2"
                  style={{ background: gradients[i], WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  <AnimatedCounter end={statValues[i]} suffix={statSuffixes[i]} />
                </div>
                <p className={`font-semibold text-[var(--color-charcoal)] text-sm mb-1 ${ne}`}>
                  {T.statLabels[i]}
                </p>
                <p className={`text-gray-400 text-xs leading-relaxed ${ne}`}>{T.statSubs[i]}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Qualifications + Affiliations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Qualifications */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className={`font-serif text-2xl font-bold text-[var(--color-charcoal)] mb-2 heading-accent ${ne}`}>
              {T.qualTitle}
            </h3>
            <div className="space-y-5 mt-8">
              {qualifications.map((q) => (
                <div key={q.degree} className="relative pl-5 border-l-2 border-[var(--color-gold)]">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-[var(--color-gold)]" />
                  <p className={`font-bold text-[var(--color-primary)] text-sm ${ne}`}>
                    {isNe ? q.degreeNe : q.degree}
                  </p>
                  <p className={`text-[var(--color-charcoal)] text-sm mt-0.5 ${ne}`}>
                    {isNe ? q.instituteNe : q.institute}
                  </p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-gray-400 text-xs">{q.year}</span>
                    <span className="text-gray-300">·</span>
                    <span className={`text-gray-400 text-xs ${ne}`}>{isNe ? q.cityNe : q.city}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 p-5 rounded-2xl border border-[var(--color-teal)]/20 bg-[var(--color-teal)]/5">
              <p className={`text-[var(--color-teal)] text-xs font-bold uppercase tracking-wider mb-3 ${ne}`}>
                {T.trainTitle}
              </p>
              <div className="space-y-2">
                {T.trainItems.map((item) => (
                  <div key={item.label} className="flex justify-between text-sm gap-4">
                    <span className={`text-[var(--color-charcoal)] font-medium ${ne}`}>{item.label}</span>
                    <span className={`text-gray-400 text-xs text-right ${ne}`}>{item.where}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Affiliations */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className={`font-serif text-2xl font-bold text-[var(--color-charcoal)] mb-2 heading-accent ${ne}`}>
              {T.affTitle}
            </h3>
            <div className="space-y-3 mt-8">
              {affiliations.map((a, i) => (
                <motion.div key={a.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:border-[var(--color-primary)]/20 hover:shadow-sm transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                    style={{ background: "var(--color-primary)" }}>{i + 1}</div>
                  <div>
                    <p className={`font-semibold text-[var(--color-charcoal)] text-sm leading-snug ${ne}`}>
                      {isNe ? a.nameNe : a.name}
                    </p>
                    <p className={`text-[var(--color-teal)] text-xs font-medium mt-0.5 ${ne}`}>
                      {isNe ? a.roleNe : a.role}
                    </p>
                    <p className="text-gray-400 text-xs mt-0.5">{a.since}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 p-4 rounded-xl flex items-center gap-4"
              style={{ background: "linear-gradient(135deg, var(--color-primary) 0%, #2856a0 100%)" }}>
              <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">NMC</div>
              <div>
                <p className={`text-white font-semibold text-sm ${ne}`}>{T.nmc}</p>
                <p className={`text-white/65 text-xs mt-0.5 ${ne}`}>{T.nmcSub}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
