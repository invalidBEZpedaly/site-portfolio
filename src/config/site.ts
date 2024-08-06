import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://site-portfolio-green.vercel.app"),
  title: {
    default: "Magoemdov Z.",
    template: "%s | Magoemdov Z.",
  },
  manifest: "https://site-portfolio-green.vercel.app//site.webmanifest",
  applicationName: "site-portfolio",
  creator: "Zakir",
  authors: [
    {
      name: "site-portfolio",
      url: "https://site-portfolio-green.vercel.app",
    },
  ],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  description: "Developer",

  openGraph: {
    title: "site-portfolio",
    description: "Developer",
    url: new URL("https://site-portfolio-green.vercel.app"),
    siteName: "site-portfolio",
    images: [`https://site-portfolio-green.vercel.app/open-graph-image.jpg`],
    locale: "en-US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  keywords: [
    "web development",
    "Front end",
    "Nextjs",
    "Reactjs",
    "Developer",
    "Tailwindcss",
    "Shadcn ui",
  ],
};

export const links = {
  github: "https://github.com/invalidBEZpedaly",
  telegram: "https://t.me/eeephemera",
  hh: "https://hh.ru/resume/d423a0c7ff0b1095250039ed1f6a7547574944?hhtmFrom=resume_list",
};
