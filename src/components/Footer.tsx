"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const T = t[lang].footer;
  const isNe = lang === "ne";
  const ne = isNe ? "font-nepali" : "";

  const scroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { labelEn: "About Dr. Baral", labelNe: "डा. बराल बारे", href: "#about" },
    { labelEn: "Services", labelNe: "सेवाहरू", href: "#services" },
    { labelEn: "Conditions Treated", labelNe: "उपचार गरिएका रोगहरू", href: "#conditions" },
    { labelEn: "Procedures", labelNe: "प्रक्रियाहरू", href: "#procedures" },
    { labelEn: "Research", labelNe: "अनुसन्धान", href: "#research" },
    { labelEn: "Patient Education", labelNe: "बिरामी शिक्षा", href: "#education" },
  ];

  const services = [
    { en: "Upper GI Endoscopy", ne: "माथिल्लो जीआई एन्डोस्कोपी" },
    { en: "Colonoscopy", ne: "कोलोनोस्कोपी" },
    { en: "ERCP", ne: "ईआरसीपी" },
    { en: "Liver Disease Management", ne: "कलेजो रोग व्यवस्थापन" },
    { en: "Hepatitis Treatment", ne: "हेपाटाइटिस उपचार" },
    { en: "GI Bleeding", ne: "जीआई रक्तस्राव" },
  ];

  return (
    <footer style={{ background: "linear-gradient(135deg, #0f2339 0%, #1a3a5c 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <h3 className="font-serif text-xl font-bold text-white">Dr. Shankar Baral</h3>
              <p className="text-[var(--color-gold)] text-xs font-semibold tracking-wide mt-1">DM Gastroenterology</p>
            </div>
            <p className={`text-gray-400 text-sm leading-relaxed mb-6 ${ne}`}>{T.desc}</p>
            <div className="space-y-2.5">
              <a href="tel:061590162"
                className="flex items-center gap-2.5 text-gray-300 hover:text-white text-sm transition-colors">
                <Phone size={13} className="text-[var(--color-gold)]" />
                061-590162 / 9846205487
              </a>
              <a href="mailto:baralshankar77@gmail.com"
                className="flex items-center gap-2.5 text-gray-300 hover:text-white text-sm transition-colors break-all">
                <Mail size={13} className="text-[var(--color-gold)]" />
                baralshankar77@gmail.com
              </a>
              <div className="flex items-start gap-2.5 text-gray-300 text-sm">
                <MapPin size={13} className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" />
                <span className={ne}>{isNe ? "पोखरा ग्यास्ट्रो लिभर सेन्टर, पोखरा" : "Pokhara Gastro Liver Centre, Pokhara"}</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className={`text-white font-semibold text-sm mb-5 uppercase tracking-wider ${ne}`}>{T.quickLinks}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.labelEn}>
                  <a href={link.href} onClick={(e) => { e.preventDefault(); scroll(link.href); }}
                    className={`text-gray-400 hover:text-white text-sm transition-colors ${ne}`}>
                    {isNe ? link.labelNe : link.labelEn}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className={`text-white font-semibold text-sm mb-5 uppercase tracking-wider ${ne}`}>{T.services}</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.en}>
                  <a href="#services" onClick={(e) => { e.preventDefault(); scroll("#services"); }}
                    className={`text-gray-400 hover:text-white text-sm transition-colors ${ne}`}>
                    {isNe ? s.ne : s.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className={`text-white font-semibold text-sm mb-5 uppercase tracking-wider ${ne}`}>{T.appointment}</h4>
            <p className={`text-gray-400 text-sm leading-relaxed mb-5 ${ne}`}>{T.appointmentDesc}</p>
            <a href="#appointment" onClick={(e) => { e.preventDefault(); scroll("#appointment"); }}
              className={`inline-flex items-center gap-2 bg-[var(--color-gold)] hover:bg-[var(--color-gold-dark)] text-white font-semibold px-6 py-3 rounded-full text-sm transition-all duration-200 shadow-sm ${ne}`}>
              {T.bookNow}
            </a>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className={`text-gray-500 text-xs leading-relaxed ${ne}`}>
                <strong className="text-gray-300">{T.emergency}</strong>{" "}{T.emergencyDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className={`text-gray-500 text-xs ${ne}`}>
            © {new Date().getFullYear()} Dr. Shankar Baral. {T.copy}
          </p>
          <p className={`text-gray-600 text-xs ${ne}`}>{T.specialty}</p>
        </div>
      </div>
    </footer>
  );
}
