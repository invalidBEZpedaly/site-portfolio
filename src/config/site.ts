import type { Metadata } from "next";

export const siteConfig: Metadata = {
  metadataBase: new URL("https://mohamed-lifa7.vercel.app"),
  title: {
    default: "Magoemdov Z.",
    template: "%s | Magoemdov Z.",
  },
  manifest: "https://mohamed-lifa7.vercel.app/site.webmanifest",
  applicationName: "Mohammed-lifa7",
  creator: "Zakir",
  authors: [
    {
      name: "Mohammed-lifa7",
      url: "https://mohamed-lifa7.vercel.app",
    },
  ],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  description: "Web developer",

  openGraph: {
    title: "Mohammed-lifa7",
    description: "Web developer",
    url: new URL("https://mohamed-lifa7.vercel.app"),
    siteName: "Mohammed-lifa7",
    images: [`https://mohamed-lifa7.vercel.app/open-graph-image.jpg`],
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
};
