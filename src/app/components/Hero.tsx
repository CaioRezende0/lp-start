import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-between px-6 md:px-16 lg:px-24 bg-[#0B0B18] bg-cover bg-right"
      style={{ backgroundImage: "url('/images/bg-hero.png')" }}
    >
      {/* Gradiente escuro por cima do fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B18] via-[#0B0B18ee] to-transparent z-0" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-xl flex flex-col space-y-6">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Logo B Fabbrani"
          width={160}
          height={40}
        />

        {/* Título */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
          Junte-se à <span className="text-[#A78BFA]">B Fabriani</span>
          <br />
          e transforme sua carreira
          <br />
          de corretor de imóveis!
        </h1>

        {/* Subheadline destacada */}
        <p className="text-[#A78BFA] bg-[#ffffff1a] px-4 py-2 rounded font-medium text-base md:text-lg max-w-fit">
          Descubra o programa de aceleração
          <br className="hidden sm:block" /> de vendas da B Fabriani
        </p>

        {/* Texto adicional */}
        <p className="text-sm md:text-base text-gray-300 leading-relaxed">
          Participe do nosso evento de integração de novos corretores e comece a
          vender nossos empreendimentos de alta qualidade.
        </p>

        {/* Botão */}
        <button className="bg-[#A78BFA] hover:bg-[#8B5CF6] transition-colors duration-300 text-white px-6 py-3 rounded font-semibold shadow-lg w-fit">
          PARTICIPE AGORA!
        </button>
      </div>

      {/* Imagem das pessoas */}
      <div className="relative z-10 hidden md:block">
        <Image
          src="/images/image-1.png"
          alt="Pessoas"
          width={480}
          height={480}
          priority
          className="object-contain"
        />
      </div>
    </section>
  );
}
