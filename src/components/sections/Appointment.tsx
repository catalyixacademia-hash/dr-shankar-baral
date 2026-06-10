"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Phone, Mail, MapPin, CheckCircle, AlertCircle, Send } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/translations";

export default function Appointment() {
  const { lang } = useLanguage();
  const T = t[lang].appointment;
  const isNe = lang === "ne";
  const ne = isNe ? "font-nepali" : "";

  const [form, setForm] = useState({ name: "", phone: "", email: "", reason: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const consultationHours = [
    { dayEn: "Sunday – Friday", dayNe: "आइतवार – शुक्रवार", hours: "9:00 AM – 5:00 PM" },
    { dayEn: "Saturday", dayNe: "शनिवार", hours: "9:00 AM – 1:00 PM" },
  ];

  return (
    <section id="appointment" className="section-padding bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className={`text-[var(--color-teal)] text-xs font-bold tracking-[0.14em] uppercase mb-3 ${ne}`}>{T.tag}</p>
          <h2 className={`font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-[var(--color-charcoal)] mb-4 heading-accent heading-accent-center ${ne}`}>
            {T.h2a}{" "}<span style={{ color: "var(--color-primary)" }}>{T.h2b}</span>
          </h2>
          <p className={`text-gray-500 text-base max-w-2xl mx-auto leading-relaxed mt-6 ${ne}`}>{T.desc}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info Panel */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-6">

            {/* Emergency */}
            <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
              <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className={`text-red-700 font-semibold text-sm ${ne}`}>{T.emergency}</p>
                <p className={`text-red-600 text-xs mt-0.5 leading-relaxed ${ne}`}>{T.emergencyDesc}</p>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-[var(--color-primary)]" />
                <h3 className={`font-semibold text-[var(--color-charcoal)] text-sm ${ne}`}>{T.hours}</h3>
              </div>
              <div className="space-y-3">
                {consultationHours.map((h) => (
                  <div key={h.dayEn} className="flex items-center justify-between text-sm">
                    <span className={`text-gray-500 ${ne}`}>{isNe ? h.dayNe : h.dayEn}</span>
                    <span className="font-medium text-[var(--color-charcoal)]">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary location */}
            <div className="rounded-2xl border p-6 bg-[var(--color-primary)] border-[var(--color-primary)]">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--color-gold-light)]" />
                <div>
                  <p className={`font-semibold text-sm text-white ${ne}`}>
                    {isNe ? "पोखरा ग्यास्ट्रो लिभर सेन्टर प्रा.लि." : "Pokhara Gastro Liver Centre Pvt. Ltd."}
                  </p>
                  <p className={`text-xs mt-0.5 text-white/70 ${ne}`}>
                    {isNe ? "पोखरा, गण्डकी प्रदेश, नेपाल" : "Pokhara, Gandaki Province, Nepal"}
                  </p>
                  {["061-590162", "061-590163"].map((p) => (
                    <a key={p} href={`tel:${p}`}
                      className="flex items-center gap-1.5 text-xs font-medium mt-2 text-[var(--color-gold-light)]">
                      <Phone size={11} />{p}
                    </a>
                  ))}
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <a href="mailto:baralshankar77@gmail.com"
                  className="flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors">
                  <Mail size={11} />baralshankar77@gmail.com
                </a>
              </div>
            </div>

            {/* PAHS location */}
            <div className="rounded-2xl border bg-white border-gray-100 p-6">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[var(--color-primary)]" />
                <div>
                  <p className={`font-semibold text-sm text-[var(--color-charcoal)] ${ne}`}>
                    {isNe ? "पोखरा एकेडेमी अफ हेल्थ साइन्सेज" : "Pokhara Academy of Health Sciences"}
                  </p>
                  <p className={`text-xs mt-0.5 text-gray-400 ${ne}`}>{isNe ? "पीएएचएस, पोखरा" : "PAHS, Pokhara"}</p>
                  <a href="tel:9846205487"
                    className="flex items-center gap-1.5 text-xs font-medium mt-2 text-[var(--color-teal)]">
                    <Phone size={11} />9846205487
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              {!submitted ? (
                <>
                  <h3 className={`font-serif text-xl font-bold text-[var(--color-charcoal)] mb-6 ${ne}`}>{T.formTitle}</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={`block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide ${ne}`}>{T.fields.name} *</label>
                        <input type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder={T.fields.namePH}
                          className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/10 text-sm text-[var(--color-charcoal)] placeholder:text-gray-300 transition-colors ${ne}`} />
                      </div>
                      <div>
                        <label className={`block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide ${ne}`}>{T.fields.phone} *</label>
                        <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                          placeholder={T.fields.phonePH}
                          className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/10 text-sm text-[var(--color-charcoal)] placeholder:text-gray-300 transition-colors ${ne}`} />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide ${ne}`}>{T.fields.email}</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder={T.fields.emailPH}
                        className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/10 text-sm text-[var(--color-charcoal)] placeholder:text-gray-300 transition-colors ${ne}`} />
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide ${ne}`}>{T.fields.reason} *</label>
                      <select name="reason" required value={form.reason} onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/10 text-sm text-[var(--color-charcoal)] transition-colors bg-white ${ne}`}>
                        <option value="">{T.fields.reasonPH}</option>
                        {T.reasons.map((r) => <option key={r}>{r}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide ${ne}`}>{T.fields.message}</label>
                      <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                        placeholder={T.fields.messagePH}
                        className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/10 text-sm text-[var(--color-charcoal)] placeholder:text-gray-300 transition-colors resize-none ${ne}`} />
                    </div>

                    <button type="submit"
                      className={`w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-semibold py-4 rounded-xl text-sm transition-all duration-200 shadow-sm hover:shadow-md ${ne}`}>
                      <Send size={15} />{T.submit}
                    </button>

                    <p className={`text-center text-gray-400 text-xs ${ne}`}>
                      {T.orCall}{" "}
                      <a href="tel:061590162" className="text-[var(--color-primary)] font-semibold">061-590162</a>
                      {" "}·{" "}
                      <a href="tel:9846205487" className="text-[var(--color-primary)] font-semibold">9846205487</a>
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className={`font-serif text-xl font-bold text-[var(--color-charcoal)] mb-2 ${ne}`}>{T.successTitle}</h3>
                  <p className={`text-gray-500 text-sm leading-relaxed max-w-xs mx-auto ${ne}`}>{T.successDesc}</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
