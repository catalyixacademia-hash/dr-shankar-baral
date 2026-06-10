"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Contact() {
  const { lang } = useLanguage();
  const T = t[lang].contact;
  const isNe = lang === "ne";
  const ne = isNe ? "font-nepali" : "";

  const contactInfo = [
    {
      icon: MapPin,
      labelEn: "Primary Location", labelNe: "मुख्य स्थान",
      valueEn: "Pokhara Gastro Liver Centre, Pokhara", valueNe: "पोखरा ग्यास्ट्रो लिभर सेन्टर, पोखरा",
      subEn: "Gandaki Province, Nepal", subNe: "गण्डकी प्रदेश, नेपाल",
      color: "var(--color-primary)",
    },
    {
      icon: Phone,
      labelEn: "Appointment", labelNe: "अपोइन्टमेन्ट",
      valueEn: "061-590162 · 9846205487", valueNe: "०६१-५९०१६२ · ९८४६२०५४८७",
      subEn: "Sunday to Friday, 9AM–5PM", subNe: "आइतवार देखि शुक्रवार, बिहान ९–साँझ ५",
      color: "var(--color-teal)",
      href: "tel:061590162",
    },
    {
      icon: Mail,
      labelEn: "Email", labelNe: "इमेल",
      valueEn: "baralshankar77@gmail.com", valueNe: "baralshankar77@gmail.com",
      subEn: "Response within 24 hours", subNe: "२४ घण्टाभित्र जवाफ",
      color: "var(--color-gold-dark)",
      href: "mailto:baralshankar77@gmail.com",
    },
    {
      icon: Clock,
      labelEn: "Consultation Hours", labelNe: "परामर्श समय",
      valueEn: "Sun–Fri: 9AM–5PM", valueNe: "आइत–शुक्र: बिहान ९–साँझ ५",
      subEn: "Saturday: 9AM–1PM", subNe: "शनिवार: बिहान ९–दिउँसो १",
      color: "#7c3aed",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className={`text-[var(--color-teal)] text-xs font-bold tracking-[0.14em] uppercase mb-3 ${ne}`}>{T.tag}</p>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-[var(--color-charcoal)] mb-4 heading-accent heading-accent-center ${ne}`}>
            {T.h2a}{" "}<span style={{ color: "var(--color-primary)" }}>{T.h2b}</span>
          </h2>
          <p className={`text-gray-500 text-base max-w-xl mx-auto leading-relaxed mt-6 ${ne}`}>{T.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contactInfo.map((item, i) => (
              <motion.div key={item.labelEn} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-[var(--color-surface)] rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${item.color}15` }}>
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <p className={`text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1 ${ne}`}>
                  {isNe ? item.labelNe : item.labelEn}
                </p>
                {item.href ? (
                  <a href={item.href}
                    className={`font-semibold text-[var(--color-charcoal)] text-sm hover:text-[var(--color-primary)] transition-colors block ${ne}`}>
                    {isNe ? item.valueNe : item.valueEn}
                  </a>
                ) : (
                  <p className={`font-semibold text-[var(--color-charcoal)] text-sm ${ne}`}>
                    {isNe ? item.valueNe : item.valueEn}
                  </p>
                )}
                <p className={`text-gray-400 text-xs mt-0.5 ${ne}`}>{isNe ? item.subNe : item.subEn}</p>
              </motion.div>
            ))}
          </div>

          {/* Map placeholder */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm min-h-[360px] relative"
            style={{ background: "var(--color-surface)" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8"
              style={{ background: "linear-gradient(135deg, #eef1f7 0%, #e8edf5 100%)" }}>
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: "linear-gradient(rgba(26,58,92,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(26,58,92,0.15) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }} />
              <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-white/60 rounded" />
              <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-white/60 rounded" />

              <div className="relative z-10 text-center">
                <div className="w-14 h-14 rounded-full bg-[var(--color-primary)] flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div className="bg-white rounded-xl shadow-lg px-5 py-4 max-w-xs">
                  <p className={`font-serif font-bold text-[var(--color-primary)] text-sm ${ne}`}>
                    {isNe ? "पोखरा ग्यास्ट्रो लिभर सेन्टर" : "Pokhara Gastro Liver Centre"}
                  </p>
                  <p className={`text-gray-500 text-xs mt-1 ${ne}`}>
                    {isNe ? "पोखरा, नेपाल" : "Pokhara, Nepal"}
                  </p>
                  <a href="https://maps.google.com?q=Pokhara+Gastro+Liver+Centre+Pokhara+Nepal"
                    target="_blank" rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-1.5 mt-3 text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-teal)] transition-colors ${ne}`}>
                    <Globe size={11} />{T.mapLabel}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
