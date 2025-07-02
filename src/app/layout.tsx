import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

// Fonte principal da aplicação
const epilogue = Epilogue({
  subsets: ["latin"],
  variable: "--font-epilogue",
  display: "swap", // melhora desempenho no carregamento da fonte
});

export const metadata: Metadata = {
  title: "B Fabbrani | Aceleradora de Corretores de Imóveis",
  description:
    "Transforme sua carreira com a maior incorporadora com suporte do Brasil.",
  keywords: [
    "B Fabbrani",
    "corretor de imóveis",
    "incorporadora",
    "empreendimentos",
    "mentoria de vendas",
    "suporte imobiliário",
  ],
  authors: [{ name: "Caio Rezende" }],
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#0B0B18",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={epilogue.variable}>
      <head />
      <body className="antialiased bg-[#0B0B18] text-white">{children}</body>
    </html>
  );
}
