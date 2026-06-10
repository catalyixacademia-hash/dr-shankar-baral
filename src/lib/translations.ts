export type Lang = "en" | "ne";

export const t = {
  en: {
    /* ── NAV ── */
    nav: {
      about: "About",
      services: "Services",
      conditions: "Conditions",
      procedures: "Procedures",
      research: "Research",
      contact: "Contact",
      book: "Book Appointment",
    },

    /* ── HERO ── */
    hero: {
      tag: "Consultant Gastroenterologist & Hepatologist",
      h1a: "Advanced Digestive",
      h1b: "& Liver Care",
      h1c: "You Can Trust",
      sub: "DM Gastroenterologist with 10+ years of specialized experience in Endoscopy, ERCP, EUS, Liver Disease Management, and advanced interventional GI procedures at Pokhara Gastro Liver Centre, Pokhara.",
      badges: [
        "DM Gastroenterology",
        "10+ Years Experience",
        "Advanced Endoscopy & ERCP",
        "Researcher & Medical Educator",
      ],
      cta1: "Book Appointment",
      cta2: "View Services",
      stats: ["Years Experience", "Procedures Done", "Research Papers", "Citations"],
    },

    /* ── CREDENTIALS ── */
    cred: {
      tag: "Why Patients Trust Dr. Shankar Baral",
      h2a: "Expertise Backed by",
      h2b: "Evidence",
      desc: "A decade of specialized clinical practice, international research collaborations, and academic teaching — all in service of better patient outcomes.",
      statLabels: [
        "Years Medical Experience",
        "Endoscopic Procedures",
        "Research Publications",
        "Academic Citations",
      ],
      statSubs: [
        "7+ years in Gastroenterology",
        "Upper GI, Colonoscopy, ERCP & EUS",
        "Peer-reviewed international journals",
        "Incl. landmark HALT-IT Trial, The Lancet",
      ],
      qualTitle: "Academic Qualifications",
      affTitle: "Professional Affiliations",
      trainTitle: "Advanced Training",
      trainItems: [
        { label: "ERCP & EUS Training", where: "Sir Gangaram Hospital, Delhi" },
        { label: "Post-DM ERCP Training", where: "Dulikhel Hospital, Kavre" },
      ],
      nmc: "Nepal Medical Council",
      nmcSub: "Permanent Registration · NMC No. 10280",
    },

    /* ── ABOUT ── */
    about: {
      tag: "About Dr. Baral",
      h2a: "A Career Dedicated to",
      h2b: "Digestive Health",
      p1: "Dr. Shankar Baral is a Consultant Gastroenterologist and Hepatologist currently serving as Assistant Professor at Pokhara Academy of Health Sciences (PAHS) and Consultant at Pokhara Gastro Liver Centre Pvt. Ltd. He holds a DM in Gastroenterology from the National Academy of Medical Sciences (NAMS, Bir Hospital), Kathmandu.",
      p2: "With 10+ years in the medical field and 7+ years specialized in gastroenterology, Dr. Baral performs a comprehensive range of interventional procedures — including ERCP, EUS, Fibroscan, Manometry, Achalasia Dilatation, and Metallic Stenting — developed through training at Sir Gangaram Hospital, New Delhi, and Dulikhel Hospital.",
      p3: "As a contributing investigator to the HALT-IT Trial published in The Lancet (2020), and with 8 peer-reviewed publications and 397+ academic citations, he brings internationally recognized research expertise to his daily clinical practice.",
      highlights: [
        { title: "DM Gastroenterology — NAMS", text: "Doctoral training at Bir Hospital, Kathmandu, with advanced ERCP and EUS at Sir Gangaram Hospital, New Delhi." },
        { title: "HALT-IT International Trial", text: "Contributing investigator for Nepal in the landmark Lancet study on tranexamic acid for GI bleeding." },
        { title: "Medical Educator", text: "Assistant Professor at PAHS since 2022. Former lecturer at Gandaki Medical College." },
        { title: "Patient-Centered Care", text: "Evidence-based, compassionate approach — from rural health camps to complex interventional endoscopy." },
        { title: "Specialist Skills", text: "ERCP, EUS, Fibroscan, Manometry, Achalasia Dilatation, Metallic Stenting & Therapeutic Colonoscopy." },
      ],
      badge: "PAHS\nAssistant Professor\n2022 – Present",
    },

    /* ── SERVICES ── */
    services: {
      tag: "Clinical Services",
      h2a: "Specialized Care for",
      h2b: "Every GI Condition",
      desc: "From diagnostic endoscopy to EUS, ERCP, Fibroscan and Manometry — Dr. Baral provides the full spectrum of interventional gastroenterology and hepatology care.",
      popular: "Most Requested",
      items: [
        { title: "Upper GI Endoscopy", desc: "High-definition diagnostic and therapeutic upper GI endoscopy for ulcers, GERD, bleeding, and esophageal conditions.", benefits: ["Same-day diagnosis", "Biopsy capable", "Therapeutic"] },
        { title: "Colonoscopy", desc: "Complete colorectal examination for cancer screening, polyp removal, and IBD evaluation.", benefits: ["Cancer prevention", "Polyp removal", "IBD diagnosis"] },
        { title: "ERCP", desc: "Endoscopic Retrograde Cholangiopancreatography for bile duct stones, strictures, and pancreatic duct disorders.", benefits: ["Stone removal", "Stent placement", "Drainage"] },
        { title: "EUS (Endoscopic Ultrasound)", desc: "High-resolution ultrasound imaging from inside the GI tract for staging cancers and evaluating submucosal lesions.", benefits: ["Cancer staging", "Tissue sampling", "Lesion assessment"] },
        { title: "Fibroscan", desc: "Non-invasive liver elastography to assess liver fibrosis and steatosis without a biopsy.", benefits: ["Non-invasive", "Instant results", "Fibrosis grading"] },
        { title: "Manometry", desc: "Esophageal manometry to evaluate swallowing disorders, achalasia, and esophageal motility abnormalities.", benefits: ["Motility diagnosis", "Achalasia confirmation", "GERD evaluation"] },
        { title: "Liver Disease Management", desc: "Comprehensive evaluation and treatment of acute and chronic liver diseases from fatty liver to advanced cirrhosis.", benefits: ["Accurate staging", "Personalized care", "Monitoring"] },
        { title: "Hepatitis Treatment", desc: "Evidence-based antiviral therapy for Hepatitis B and C, including modern direct-acting antivirals.", benefits: ["High cure rates", "Low side effects", "Monitoring"] },
        { title: "Fatty Liver Care", desc: "Grade assessment and structured lifestyle-based management of NAFLD and NASH.", benefits: ["Fibroscan staging", "Dietary guidance", "Monitoring"] },
        { title: "Cirrhosis Management", desc: "Ongoing care for cirrhosis including variceal surveillance, ascites management, and hepatic encephalopathy.", benefits: ["Complication prevention", "Band ligation", "Transplant review"] },
        { title: "Colorectal Cancer Screening", desc: "Systematic cancer screening and polypectomy with histological analysis for high-risk patients.", benefits: ["Early detection", "Polypectomy", "Surveillance plan"] },
        { title: "GI Bleeding Management", desc: "Urgent endoscopic diagnosis and hemostasis for upper and lower GI bleeding including variceal bleeding.", benefits: ["Emergency care", "Hemostasis", "Band ligation"] },
      ],
    },

    /* ── CONDITIONS ── */
    conditions: {
      tag: "Conditions Treated",
      h2a: "Comprehensive GI &",
      h2b: "Liver Care",
      desc: "Dr. Baral diagnoses and treats the full spectrum of digestive and liver conditions — from common ailments to complex, rare diseases.",
      cta: "Request a Consultation",
      ctaSub: "Not sure if your condition is listed? Consult Dr. Baral for a comprehensive evaluation.",
    },

    /* ── PROCEDURES ── */
    procedures: {
      tag: "Advanced Procedures",
      h2a: "Precision Endoscopy &",
      h2b: "Therapeutic Techniques",
      desc: "Dr. Baral performs a comprehensive range of advanced endoscopic procedures with meticulous technique and patient safety as the foremost priority.",
      indicatedFor: "Indicated for",
      duration: "Duration",
    },

    /* ── RESEARCH ── */
    research: {
      tag: "Research & Academia",
      h2a: "Advancing Gastroenterology",
      h2b: "Globally",
      desc: "From the wards of NAMS to the pages of The Lancet — Dr. Baral's research connects Pokhara to the global gastroenterology community.",
      featured: "Featured Publication",
      role: "Role",
      studyType: "Study Type",
      journal: "Journal",
      rg: "View on ResearchGate",
    },

    /* ── COMMUNITY ── */
    community: {
      tag: "Community Impact",
      h2a: "Medicine Beyond the",
      h2b: "Clinic Walls",
      desc: "Dr. Baral believes that a physician's responsibility extends beyond individual consultations. Through community health camps, public awareness programs, and medical education, he works to bring specialist-level digestive health knowledge to all people in western Nepal.",
      quote: "Healthcare is a right, not a privilege. Every person deserves access to accurate diagnosis and compassionate care.",
      quoteBy: "— Dr. Shankar Baral",
      cta: "Book a Consultation",
      initiatives: [
        { title: "Rural Health Camps", desc: "Regular health camps in underserved rural communities around Pokhara, providing free gastroenterology consultations.", impact: "500+ patients reached annually" },
        { title: "Digestive Health Awareness", desc: "Public education campaigns on liver disease prevention, colorectal cancer awareness, and hepatitis vaccination.", impact: "Thousands educated yearly" },
        { title: "Medical Training & Mentorship", desc: "Mentoring medical students and junior doctors at PAHS and Gandaki Medical College.", impact: "50+ doctors mentored" },
        { title: "Healthy Nation Foundation", desc: "Active contributor promoting preventive healthcare, nutrition education, and accessible diagnostics.", impact: "Statewide health programs" },
      ],
    },

    /* ── APPOINTMENT ── */
    appointment: {
      tag: "Book an Appointment",
      h2a: "Begin Your Path to",
      h2b: "Better Health",
      desc: "Schedule a consultation with Dr. Shankar Baral. Our team will confirm your appointment within 24 hours.",
      emergency: "Medical Emergency?",
      emergencyDesc: "For urgent GI bleeding or severe abdominal pain, go directly to your nearest emergency department or call 061-590162.",
      hours: "Consultation Hours",
      formTitle: "Request an Appointment",
      fields: {
        name: "Full Name",
        namePH: "Your full name",
        phone: "Phone Number",
        phonePH: "Your phone number",
        email: "Email Address",
        emailPH: "your@email.com",
        reason: "Reason for Visit",
        reasonPH: "Select your concern",
        message: "Additional Information",
        messagePH: "Briefly describe your symptoms or any previous treatments...",
      },
      submit: "Request Appointment",
      orCall: "Or call:",
      successTitle: "Request Received!",
      successDesc: "We'll confirm your appointment within 24 hours. For urgent concerns, call 061-590162.",
      reasons: ["Acid Reflux / GERD", "Upper GI Endoscopy", "Colonoscopy / Cancer Screening", "Liver Disease / Hepatitis", "Fatty Liver", "Abdominal Pain", "GI Bleeding", "ERCP", "EUS", "Second Opinion", "Other"],
    },

    /* ── CONTACT ── */
    contact: {
      tag: "Get in Touch",
      h2a: "We're Here to",
      h2b: "Help You",
      desc: "Reach Dr. Baral's practice directly. For appointments, call or use the booking form above. For general inquiries, email us.",
      mapLabel: "Open in Google Maps",
      primaryLocation: "Primary Location",
    },

    /* ── PATIENT EDUCATION ── */
    education: {
      tag: "Patient Education",
      h2a: "Know Your Gut.",
      h2b: "Protect Your Health.",
      sub: "Evidence-based articles on digestive health, liver disease, and preventive care — written for patients, not textbooks.",
      readMore: "Read more",
      comingSoon: "More articles coming soon",
      comingSoonSub: "Subscribe for patient education updates from Dr. Baral's practice.",
    },

    /* ── AFFILIATIONS ── */
    affiliations: {
      tag: "Professional Affiliations",
      h2a: "Trusted by",
      h2b: "Leading Institutions",
      desc: "Dr. Baral holds active appointments at multiple hospitals and academic institutions across Pokhara, ensuring accessible, expert care across the region.",
    },

    /* ── FOOTER ── */
    footer: {
      desc: "Consultant Gastroenterologist & Hepatologist with 10+ years of experience providing advanced digestive and liver care in Pokhara, Nepal.",
      quickLinks: "Quick Links",
      services: "Services",
      appointment: "Appointment",
      appointmentDesc: "Ready to take the first step toward better digestive health? Book a consultation today.",
      bookNow: "Book Now",
      emergency: "Emergency:",
      emergencyDesc: "For urgent GI bleeding or severe symptoms, go directly to the nearest emergency department or call 061-590162.",
      copy: "All rights reserved.",
      specialty: "Specialist in Gastroenterology & Hepatology · Pokhara, Nepal",
    },
  },

  /* ══════════════════════════════════════════
     NEPALI TRANSLATIONS
  ══════════════════════════════════════════ */
  ne: {
    /* ── NAV ── */
    nav: {
      about: "परिचय",
      services: "सेवाहरू",
      conditions: "रोगहरू",
      procedures: "प्रक्रियाहरू",
      research: "अनुसन्धान",
      contact: "सम्पर्क",
      book: "अपोइन्टमेन्ट लिनुहोस्",
    },

    /* ── HERO ── */
    hero: {
      tag: "परामर्शदाता ग्यास्ट्रोएन्टेरोलोजिस्ट र हेपाटोलोजिस्ट",
      h1a: "उन्नत पाचन",
      h1b: "र कलेजो उपचार",
      h1c: "जसमा तपाईं भर गर्न सक्नुहुन्छ",
      sub: "डीएम ग्यास्ट्रोएन्टेरोलोजिस्ट — एन्डोस्कोपी, ईआरसीपी, ईयूएस, कलेजो रोग व्यवस्थापन र उन्नत जीआई प्रक्रियाहरूमा १०+ वर्षको विशेषज्ञ अनुभवसहित पोखरा ग्यास्ट्रो लिभर सेन्टरमा सेवारत।",
      badges: [
        "डीएम ग्यास्ट्रोएन्टेरोलोजी",
        "१०+ वर्षको अनुभव",
        "उन्नत एन्डोस्कोपी र ईआरसीपी",
        "अनुसन्धानकर्ता र चिकित्सा शिक्षक",
      ],
      cta1: "अपोइन्टमेन्ट लिनुहोस्",
      cta2: "सेवाहरू हेर्नुहोस्",
      stats: ["वर्षको अनुभव", "प्रक्रियाहरू सम्पन्न", "अनुसन्धान पत्रहरू", "उद्धरणहरू"],
    },

    /* ── CREDENTIALS ── */
    cred: {
      tag: "बिरामीहरूले किन डा. शंकर बरालमा भर गर्छन्",
      h2a: "प्रमाणमा आधारित",
      h2b: "विशेषज्ञता",
      desc: "एक दशकको विशेष नैदानिक अभ्यास, अन्तर्राष्ट्रिय अनुसन्धान सहकार्य र शैक्षिक शिक्षण — सबै राम्रो बिरामी परिणामको सेवामा।",
      statLabels: [
        "वर्षको चिकित्सा अनुभव",
        "एन्डोस्कोपिक प्रक्रियाहरू",
        "अनुसन्धान प्रकाशनहरू",
        "शैक्षिक उद्धरणहरू",
      ],
      statSubs: [
        "ग्यास्ट्रोएन्टेरोलोजीमा ७+ वर्ष",
        "माथिल्लो जीआई, कोलोनोस्कोपी, ईआरसीपी र ईयूएस",
        "अन्तर्राष्ट्रिय सहकर्मी-समीक्षित पत्रिकाहरू",
        "ल्यान्सेट HALT-IT ट्रायल सहित",
      ],
      qualTitle: "शैक्षिक योग्यताहरू",
      affTitle: "व्यावसायिक सम्बद्धताहरू",
      trainTitle: "उन्नत तालिम",
      trainItems: [
        { label: "ईआरसीपी र ईयूएस तालिम", where: "सर गंगाराम अस्पताल, दिल्ली" },
        { label: "डीएम पछिको ईआरसीपी तालिम", where: "दुलिखेल अस्पताल, काभ्रे" },
      ],
      nmc: "नेपाल मेडिकल काउन्सिल",
      nmcSub: "स्थायी दर्ता · एनएमसी नं. १०२८०",
    },

    /* ── ABOUT ── */
    about: {
      tag: "डा. बराल बारे",
      h2a: "पाचन स्वास्थ्यप्रति",
      h2b: "समर्पित करिअर",
      p1: "डा. शंकर बराल पोखरामा पाचन र कलेजो रोगका परामर्शदाता विशेषज्ञ हुनुहुन्छ। हाल उहाँ पोखरा एकेडेमी अफ हेल्थ साइन्सेज (पीएएचएस)मा सहायक प्राध्यापकको रूपमा कार्यरत हुनुहुन्छ र पोखरा ग्यास्ट्रो लिभर सेन्टर प्रा.लि.मा परामर्शदाता हुनुहुन्छ। उहाँले काठमाण्डौको नेशनल एकेडेमी अफ मेडिकल साइन्सेज (एनएएमएस, बीर अस्पताल)बाट ग्यास्ट्रोएन्टेरोलोजीमा डीएम प्राप्त गर्नुभएको छ।",
      p2: "चिकित्सा क्षेत्रमा १०+ वर्ष र ग्यास्ट्रोएन्टेरोलोजीमा ७+ वर्षको विशेष अनुभवसहित, डा. बराल ईआरसीपी, ईयूएस, फाइब्रोस्क्यान, म्यानोमेट्री, एकालेसिया डाइलेटेशन र मेटालिक स्टेन्टिङ लगायत उन्नत प्रक्रियाहरू सम्पन्न गर्नुहुन्छ।",
      p3: "द ल्यान्सेट (२०२०)मा प्रकाशित HALT-IT ट्रायलका सहयोगी अनुसन्धानकर्ताको रूपमा र ८ सहकर्मी-समीक्षित प्रकाशनहरू र ३९७+ शैक्षिक उद्धरणहरूसहित, उहाँ आफ्नो दैनिक नैदानिक अभ्यासमा अन्तर्राष्ट्रिय स्तरको अनुसन्धान विशेषज्ञता ल्याउनुहुन्छ।",
      highlights: [
        { title: "डीएम ग्यास्ट्रोएन्टेरोलोजी — एनएएमएस", text: "काठमाण्डौको बीर अस्पतालमा डाक्टरेट तालिम, र नयाँ दिल्लीको सर गंगाराम अस्पतालमा उन्नत ईआरसीपी र ईयूएस।" },
        { title: "HALT-IT अन्तर्राष्ट्रिय ट्रायल", text: "जीआई रक्तस्रावमा ट्रान्सेक्सामिक एसिडमा ल्यान्सेट अध्ययनका लागि नेपालका सहयोगी अनुसन्धानकर्ता।" },
        { title: "चिकित्सा शिक्षक", text: "२०२२ देखि पीएएचएसमा सहायक प्राध्यापक। गण्डकी मेडिकल कलेजका पूर्व व्याख्याता।" },
        { title: "बिरामीकेन्द्रित सेवा", text: "ग्रामीण स्वास्थ्य शिविरदेखि जटिल इन्टरभेन्सनल एन्डोस्कोपीसम्म — प्रमाण-आधारित, करुणाशील दृष्टिकोण।" },
        { title: "विशेष कौशलहरू", text: "ईआरसीपी, ईयूएस, फाइब्रोस्क्यान, म्यानोमेट्री, एकालेसिया डाइलेटेशन, मेटालिक स्टेन्टिङ र थेरापेटिक कोलोनोस्कोपी।" },
      ],
      badge: "पीएएचएस\nसहायक प्राध्यापक\n२०२२ – हालसम्म",
    },

    /* ── SERVICES ── */
    services: {
      tag: "नैदानिक सेवाहरू",
      h2a: "हरेक जीआई समस्याको",
      h2b: "विशेष उपचार",
      desc: "डायग्नोस्टिक एन्डोस्कोपीदेखि ईयूएस, ईआरसीपी, फाइब्रोस्क्यान र म्यानोमेट्रीसम्म — डा. बराल इन्टरभेन्सनल ग्यास्ट्रोएन्टेरोलोजी र हेपाटोलोजीको पूर्ण सेवा प्रदान गर्नुहुन्छ।",
      popular: "सबभन्दा माग भएको",
      items: [
        { title: "माथिल्लो जीआई एन्डोस्कोपी", desc: "अल्सर, जीईआरडी, रक्तस्राव र खाद्यनलीका समस्याहरूका लागि उच्च परिभाषा डायग्नोस्टिक र थेरापेटिक एन्डोस्कोपी।", benefits: ["तत्काल निदान", "बायोप्सी सम्भव", "उपचारात्मक"] },
        { title: "कोलोनोस्कोपी", desc: "क्यान्सर स्क्रिनिङ, पोलिप हटाउन र आईबीडी मूल्यांकनका लागि सम्पूर्ण कोलोरेक्टल जाँच।", benefits: ["क्यान्सर रोकथाम", "पोलिप हटाउने", "आईबीडी निदान"] },
        { title: "ईआरसीपी", desc: "पित्त नली ढुंगा, संकुचन र प्यान्क्रियाटिक नली विकारका लागि एन्डोस्कोपिक रेट्रोग्रेड कोलेन्जियोप्यान्क्रियाटोग्राफी।", benefits: ["ढुंगा हटाउने", "स्टेन्ट राख्ने", "निकास"] },
        { title: "ईयूएस (एन्डोस्कोपिक अल्ट्रासाउन्ड)", desc: "क्यान्सर स्टेजिङ र सबम्यूकोसल घाउहरूको मूल्यांकनका लागि जीआई ट्र्याक्टभित्रबाट उच्च-रेजोलुसन अल्ट्रासाउन्ड।", benefits: ["क्यान्सर स्टेजिङ", "टिसु नमुना", "घाउ मूल्यांकन"] },
        { title: "फाइब्रोस्क्यान", desc: "बायोप्सी बिना नै कलेजो फाइब्रोसिस र स्टेटोसिस मूल्यांकनका लागि गैर-आक्रामक कलेजो इलास्टोग्राफी।", benefits: ["गैर-आक्रामक", "तत्काल नतिजा", "फाइब्रोसिस ग्रेडिङ"] },
        { title: "म्यानोमेट्री", desc: "निलगोड्ने विकार, एकालेसिया र खाद्यनली गतिशीलता असामान्यताहरूको मूल्यांकनका लागि एसोफेजियल म्यानोमेट्री।", benefits: ["गतिशीलता निदान", "एकालेसिया पुष्टि", "जीईआरडी मूल्यांकन"] },
        { title: "कलेजो रोग व्यवस्थापन", desc: "फ्याटी लिभरदेखि उन्नत सिरोसिससम्म तीव्र र दीर्घकालीन कलेजो रोगहरूको व्यापक मूल्यांकन र उपचार।", benefits: ["सटीक स्टेजिङ", "व्यक्तिगत हेरचाह", "अनुगमन"] },
        { title: "हेपाटाइटिस उपचार", desc: "आधुनिक प्रत्यक्ष-कार्यकारी एन्टिभाइरलहरू सहित हेपाटाइटिस बी र सीका लागि प्रमाण-आधारित एन्टिभाइरल थेरापी।", benefits: ["उच्च निको दर", "कम दुष्प्रभाव", "अनुगमन"] },
        { title: "फ्याटी लिभर हेरचाह", desc: "एनएएफएलडी र एनएएसएचको ग्रेड मूल्यांकन र संरचित जीवनशैली-आधारित व्यवस्थापन।", benefits: ["फाइब्रोस्क्यान स्टेजिङ", "आहार मार्गदर्शन", "अनुगमन"] },
        { title: "सिरोसिस व्यवस्थापन", desc: "भेरिकोसियल निगरानी, जलोदर व्यवस्थापन र हेपाटिक एन्सेफालोप्याथी सहित सिरोसिसको दीर्घकालीन हेरचाह।", benefits: ["जटिलता रोकथाम", "ब्यान्ड लिगेसन", "प्रत्यारोपण समीक्षा"] },
        { title: "कोलोरेक्टल क्यान्सर स्क्रिनिङ", desc: "उच्च जोखिम भएका बिरामीहरूका लागि हिस्टोलोजिकल विश्लेषणसहित व्यवस्थित क्यान्सर स्क्रिनिङ र पोलिपेक्टोमी।", benefits: ["प्रारम्भिक पहिचान", "पोलिपेक्टोमी", "निगरानी योजना"] },
        { title: "जीआई रक्तस्राव व्यवस्थापन", desc: "भेरिकोसियल रक्तस्राव सहित माथिल्लो र तल्लो जीआई रक्तस्रावका लागि तत्काल एन्डोस्कोपिक निदान र हेमोस्टेसिस।", benefits: ["आपतकालीन हेरचाह", "हेमोस्टेसिस", "ब्यान्ड लिगेसन"] },
      ],
    },

    /* ── CONDITIONS ── */
    conditions: {
      tag: "उपचार गरिएका रोगहरू",
      h2a: "व्यापक जीआई र",
      h2b: "कलेजो उपचार",
      desc: "डा. बराल पाचन र कलेजो रोगहरूको पूर्ण स्पेक्ट्रम निदान र उपचार गर्नुहुन्छ — सामान्य रोगहरूदेखि जटिल, दुर्लभ रोगहरूसम्म।",
      cta: "परामर्शको लागि अनुरोध गर्नुहोस्",
      ctaSub: "तपाईंको रोग सूचीमा छ कि छैन थाहा छैन? व्यापक मूल्यांकनका लागि डा. बरालसँग परामर्श लिनुहोस्।",
    },

    /* ── PROCEDURES ── */
    procedures: {
      tag: "उन्नत प्रक्रियाहरू",
      h2a: "सटीक एन्डोस्कोपी र",
      h2b: "थेरापेटिक प्रविधिहरू",
      desc: "डा. बराल सूक्ष्म प्रविधि र बिरामी सुरक्षालाई सर्वोच्च प्राथमिकता दिँदै उन्नत एन्डोस्कोपिक प्रक्रियाहरूको व्यापक दायरा सम्पन्न गर्नुहुन्छ।",
      indicatedFor: "संकेत",
      duration: "अवधि",
    },

    /* ── RESEARCH ── */
    research: {
      tag: "अनुसन्धान र शैक्षिक योगदान",
      h2a: "ग्यास्ट्रोएन्टेरोलोजीलाई",
      h2b: "विश्वस्तरमा अगाडि बढाउँदै",
      desc: "एनएएमएसको वार्डदेखि द ल्यान्सेटका पृष्ठहरूसम्म — डा. बरालको अनुसन्धानले पोखरालाई विश्व ग्यास्ट्रोएन्टेरोलोजी समुदायसँग जोड्छ।",
      featured: "विशेष प्रकाशन",
      role: "भूमिका",
      studyType: "अध्ययन प्रकार",
      journal: "पत्रिका",
      rg: "रिसर्चगेटमा हेर्नुहोस्",
    },

    /* ── COMMUNITY ── */
    community: {
      tag: "सामुदायिक प्रभाव",
      h2a: "क्लिनिकको पर्खालभन्दा",
      h2b: "बाहिरको चिकित्सा",
      desc: "डा. बराल विश्वास गर्नुहुन्छ कि चिकित्सकको जिम्मेवारी व्यक्तिगत परामर्शभन्दा बाहिर फैलिन्छ। सामुदायिक स्वास्थ्य शिविरहरू, जनचेतना कार्यक्रमहरू र चिकित्सा शिक्षाको माध्यमबाट उहाँ पश्चिम नेपालका सबै मानिसहरूमा पाचन स्वास्थ्य ज्ञान पुर्‍याउनु प्रयासरत छन्।",
      quote: "स्वास्थ्य सेवा अधिकार हो, विशेषाधिकार होइन। हरेक व्यक्तिलाई सटीक निदान र करुणाशील उपचारको पहुँच हुनुपर्छ।",
      quoteBy: "— डा. शंकर बराल",
      cta: "परामर्श बुक गर्नुहोस्",
      initiatives: [
        { title: "ग्रामीण स्वास्थ्य शिविरहरू", desc: "पोखरा वरपरका सेवा वञ्चित ग्रामीण समुदायहरूमा नियमित स्वास्थ्य शिविरहरू, निःशुल्क परामर्श प्रदान।", impact: "वार्षिक ५०० + बिरामी" },
        { title: "पाचन स्वास्थ्य जनचेतना", desc: "कलेजो रोग रोकथाम, कोलोरेक्टल क्यान्सर जनचेतना र हेपाटाइटिस खोपमा सार्वजनिक शिक्षा अभियानहरू।", impact: "वार्षिक हजारौं शिक्षित" },
        { title: "चिकित्सा तालिम र मेन्टरशिप", desc: "पीएएचएस र गण्डकी मेडिकल कलेजमा मेडिकल विद्यार्थीहरू र जुनियर डाक्टरहरूलाई मेन्टरिङ।", impact: "५०+ डाक्टरहरू मेन्टर" },
        { title: "हेल्दी नेशन फाउन्डेशन", desc: "निवारक स्वास्थ्य सेवा, पोषण शिक्षा र सुलभ डायग्नोस्टिक्स प्रवर्द्धन गर्ने सक्रिय योगदानकर्ता।", impact: "राज्यव्यापी कार्यक्रमहरू" },
      ],
    },

    /* ── APPOINTMENT ── */
    appointment: {
      tag: "अपोइन्टमेन्ट लिनुहोस्",
      h2a: "राम्रो स्वास्थ्यतर्फ",
      h2b: "आफ्नो यात्रा सुरु गर्नुहोस्",
      desc: "डा. शंकर बरालसँग परामर्श तालिका मिलाउनुहोस्। हाम्रो टोलीले २४ घण्टाभित्र तपाईंको अपोइन्टमेन्ट पुष्टि गर्नेछ।",
      emergency: "मेडिकल इमर्जेन्सी?",
      emergencyDesc: "जीआई रक्तस्राव वा तीव्र पेट दुखाइको लागि तत्काल नजिकको इमर्जेन्सी विभागमा जानुहोस् वा ०६१-५९०१६२ मा फोन गर्नुहोस्।",
      hours: "परामर्श समय",
      formTitle: "अपोइन्टमेन्टको अनुरोध गर्नुहोस्",
      fields: {
        name: "पूरा नाम",
        namePH: "तपाईंको पूरा नाम",
        phone: "फोन नम्बर",
        phonePH: "तपाईंको फोन नम्बर",
        email: "इमेल ठेगाना",
        emailPH: "your@email.com",
        reason: "भ्रमणको कारण",
        reasonPH: "आफ्नो समस्या छनोट गर्नुहोस्",
        message: "थप जानकारी",
        messagePH: "आफ्नो लक्षण वा पहिलेका उपचारहरू संक्षिप्त रूपमा वर्णन गर्नुहोस्...",
      },
      submit: "अपोइन्टमेन्टको अनुरोध गर्नुहोस्",
      orCall: "वा फोन गर्नुहोस्:",
      successTitle: "अनुरोध प्राप्त भयो!",
      successDesc: "हामी २४ घण्टाभित्र तपाईंको अपोइन्टमेन्ट पुष्टि गर्नेछौं। जरुरी समस्याको लागि ०६१-५९०१६२ मा फोन गर्नुहोस्।",
      reasons: ["एसिड रिफ्लक्स / जीईआरडी", "माथिल्लो जीआई एन्डोस्कोपी", "कोलोनोस्कोपी / क्यान्सर स्क्रिनिङ", "कलेजो रोग / हेपाटाइटिस", "फ्याटी लिभर", "पेट दुखाइ", "जीआई रक्तस्राव", "ईआरसीपी", "ईयूएस", "दोस्रो विचार", "अन्य"],
    },

    /* ── CONTACT ── */
    contact: {
      tag: "सम्पर्क गर्नुहोस्",
      h2a: "हामी तपाईंलाई",
      h2b: "मद्दत गर्न यहाँ छौं",
      desc: "डा. बरालको क्लिनिकमा सिधा सम्पर्क गर्नुहोस्। अपोइन्टमेन्टका लागि फोन गर्नुहोस् वा माथिको बुकिङ फारम प्रयोग गर्नुहोस्।",
      mapLabel: "गुगल म्यापमा खोल्नुहोस्",
      primaryLocation: "मुख्य स्थान",
    },

    /* ── PATIENT EDUCATION ── */
    education: {
      tag: "बिरामी शिक्षा",
      h2a: "आफ्नो पाचन प्रणाली बुझ्नुहोस्।",
      h2b: "स्वास्थ्य सुरक्षित गर्नुहोस्।",
      sub: "पाचन स्वास्थ्य, कलेजो रोग र निवारक हेरचाहमा प्रमाण-आधारित लेखहरू — बिरामीहरूका लागि लेखिएका।",
      readMore: "थप पढ्नुहोस्",
      comingSoon: "थप लेखहरू चाँडै आउँदैछन्",
      comingSoonSub: "डा. बरालको क्लिनिकबाट बिरामी शिक्षा अपडेटहरूका लागि सदस्यता लिनुहोस्।",
    },

    /* ── AFFILIATIONS ── */
    affiliations: {
      tag: "व्यावसायिक सम्बद्धताहरू",
      h2a: "अग्रणी संस्थाहरूको",
      h2b: "विश्वास",
      desc: "डा. बराल पोखराका धेरै अस्पताल र शैक्षिक संस्थाहरूमा सक्रिय नियुक्तिहरू राख्नुहुन्छ, पूरे क्षेत्रमा सुलभ विशेषज्ञ उपचार सुनिश्चित गर्दै।",
    },

    /* ── FOOTER ── */
    footer: {
      desc: "पोखरा, नेपालमा उन्नत पाचन र कलेजो उपचार प्रदान गर्दै १०+ वर्षको अनुभवसहित परामर्शदाता ग्यास्ट्रोएन्टेरोलोजिस्ट र हेपाटोलोजिस्ट।",
      quickLinks: "द्रुत लिङ्कहरू",
      services: "सेवाहरू",
      appointment: "अपोइन्टमेन्ट",
      appointmentDesc: "पाचन स्वास्थ्यतर्फ पहिलो कदम चाल्न तयार? आज परामर्श बुक गर्नुहोस्।",
      bookNow: "अहिले बुक गर्नुहोस्",
      emergency: "इमर्जेन्सी:",
      emergencyDesc: "जीआई रक्तस्राव वा तीव्र लक्षणहरूका लागि नजिकको इमर्जेन्सी विभागमा जानुहोस् वा ०६१-५९०१६२ मा फोन गर्नुहोस्।",
      copy: "सर्वाधिकार सुरक्षित।",
      specialty: "ग्यास्ट्रोएन्टेरोलोजी र हेपाटोलोजी विशेषज्ञ · पोखरा, नेपाल",
    },
  },
} as const;

export type Translations = (typeof t)["en"];
