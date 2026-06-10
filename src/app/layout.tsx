import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_Devanagari } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-devanagari",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Shankar Baral | Gastroenterologist & Hepatologist — Pokhara Gastro Liver Centre",
  description:
    "Dr. Shankar Baral — DM Gastroenterologist at Pokhara Gastro Liver Centre Pvt. Ltd. Specialist in Endoscopy, ERCP, EUS, Fibroscan, Liver Disease & Hepatitis. 10+ years experience in Pokhara, Nepal.",
  keywords: [
    "Gastroenterologist in Pokhara",
    "Liver Specialist Pokhara",
    "DM Gastroenterologist Nepal",
    "Endoscopy Specialist Pokhara",
    "Colonoscopy Doctor Pokhara",
    "Hepatologist Nepal",
    "Pokhara Gastro Liver Centre",
    "ERCP Specialist Nepal",
    "EUS Endoscopy Nepal",
    "Dr Shankar Baral",
    "पोखरा ग्यास्ट्रो लिभर सेन्टर",
    "पोखरा ग्यास्ट्रोएन्टेरोलोजिस्ट",
  ],
  authors: [{ name: "Dr. Shankar Baral" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dr. Shankar Baral | Consultant Gastroenterologist — Pokhara Gastro Liver Centre",
    description:
      "Advanced digestive and liver care at Pokhara Gastro Liver Centre Pvt. Ltd. DM Gastroenterologist with 10+ years experience.",
    siteName: "Dr. Shankar Baral",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Shankar Baral",
  description:
    "Consultant Gastroenterologist & Hepatologist, DM Gastroenterology, Associate Professor at Gandaki Medical College.",
  medicalSpecialty: ["Gastroenterology", "Hepatology"],
  availableService: [
    "Upper GI Endoscopy", "Colonoscopy", "ERCP", "EUS",
    "Fibroscan", "Manometry", "Liver Disease Management",
    "Hepatitis Treatment", "GI Bleeding", "Colorectal Cancer Screening",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pokhara Gastro Liver Centre Pvt. Ltd.",
    addressLocality: "Pokhara",
    addressCountry: "NP",
  },
  telephone: "+977-61-590162",
  email: "baralshankar77@gmail.com",
  affiliation: [
    { "@type": "Hospital", name: "Pokhara Gastro Liver Centre Pvt. Ltd." },
    { "@type": "EducationalOrganization", name: "Gandaki Medical College" },
    { "@type": "EducationalOrganization", name: "Pokhara Academy of Health Sciences" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${notoDevanagari.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
