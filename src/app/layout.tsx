import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wendell Bonucci | Links & Perfil Profissional",

  description:
    "Página oficial de Wendell Bonucci. Acesse meus projetos, redes sociais, experiências profissionais e conheça mais sobre meu trabalho com desenvolvimento de software, análise de dados e soluções digitais.",

  keywords: [
    "Wendell Bonucci",
    "Wendell Bonucci Desenvolvedor",
    "Desenvolvedor Full-Stack",
    "Desenvolvedor de Software",
    "Analista de Dados",
    "Software Developer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Desenvolvimento Web",
    "Soluções Digitais",
    "Desenvolvimento de Software",
    "Fortaleza CE",
  ],

  authors: [
    {
      name: "Wendell Bonucci",
      url: "https://wendellbonucci.vercel.app/",
    },
  ],

  creator: "Wendell Bonucci",
  publisher: "Wendell Bonucci",

  icons: {
    icon: "/wendellbonucci.ico",
    shortcut: "/wendellbonucci.ico",
    apple: "/wendellbonucci.ico",
  },

  openGraph: {
    title: "Wendell Bonucci | Perfil Profissional",
    description:
      "Conheça meu trabalho, projetos, experiências e redes sociais. Desenvolvimento de software, análise de dados e soluções digitais em um só lugar.",
    url: "https://wendellbonucci.vercel.app/",
    siteName: "Wendell Bonucci",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wendell Bonucci - Desenvolvedor e Analista de Dados",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wendell Bonucci | Perfil Profissional",
    description:
      "Projetos, redes sociais, experiências e soluções digitais desenvolvidas por Wendell Bonucci.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body className="bg-(--color-background) text-(--color-white)">
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
