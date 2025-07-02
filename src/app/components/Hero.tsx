import Image from "next/image";
import Container from "./Container";

export default function Hero() {
  return (
    <>
      <section
        className="relative w-full bg-[#0B0B18] bg-cover bg-right flex items-center pt-20"
        style={{ backgroundImage: "url('/images/bg-hero.png')" }}
      >
        {/* Gradiente de sobreposição */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B18] via-[#0B0B18ee] to-transparent z-0" />

        <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Conteúdo à esquerda */}
          <div className="space-y-6 mb-5 text-center md:text-left">
            <Image
              src="/images/logo.png"
              alt="Logo B Fabbrani"
              width={160}
              height={40}
            />

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Junte-se à <span className="text-[#A78BFA]">B Fabbrani</span>
              <br />
              e transforme sua carreira
              <br />
              de corretor de imóveis!
            </h1>

            <p className="text-[#A78BFA] bg-[#ffffff1a] px-4 py-2 rounded font-medium text-base md:text-lg max-w-fit">
              Descubra o programa de aceleração
              <br className="hidden sm:block" /> de vendas da B Fabbrani
            </p>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Participe do nosso evento de integração de novos corretores e
              comece a vender nossos empreendimentos de alta qualidade.
            </p>

            <button className="bg-[#A78BFA] hover:bg-[#8B5CF6] transition-colors duration-300 text-white px-6 py-3 rounded font-semibold shadow-lg w-full sm:w-fit">
              PARTICIPE AGORA!
            </button>
          </div>

          {/* Imagem das pessoas à direita, alinhada ao fundo */}
          <div className="relative w-full h-full flex items-end justify-end">
            <Image
              src="/images/image-1.png"
              alt="Pessoas"
              width={800}
              height={800}
              priority
              className="object-contain"
            />
          </div>
        </Container>
      </section>
      <div className="w-full bg-[#A78BFA] h-10"></div>
    </>
  );
}
