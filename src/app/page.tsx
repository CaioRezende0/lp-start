import {
  Beneficios,
  Depoimentos,
  Empreendimentos,
  Hero,
  Sobre,
  CalendarioEventos,
  Footer,
} from "./components";

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
