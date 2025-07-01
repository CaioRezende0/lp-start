import { Calendar } from "lucide-react";
import Beneficios from "./components/Beneficios";
import Depoimentos from "./components/Depoimentos";
import Empreendimentos from "./components/Empreendimentos";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import CalendarioEventos from "./components/CalendarioEventos";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Empreendimentos />
      <Beneficios />
      <Sobre />
      <Depoimentos />
      <CalendarioEventos />
      <Footer />
    </>
  );
}
