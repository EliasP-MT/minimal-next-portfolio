import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elias Pajot | Biomedical Technology Engineer",
    short_name: "Elias Pajot",
    description:
      "Elias Pajot - Biomedical Technology Engineer specializing in engineering design, medical instrumentation, and innovative healthcare solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "biomedical engineering",
      "medical devices",
      "mechanical design",
      "engineering",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}