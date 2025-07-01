import Image from "next/image";

export default function Sobre() {
  return (
    <section
      className="relative w-full min-h-[520px] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-20 bg-[#0B0B18] bg-cover bg-no-repeat bg-right"
      style={{ backgroundImage: "url('/images/bg-sobre.png')" }}
    >
      {/* Gradiente escuro por cima do background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B18ee] via-[#0B0B18cc] to-transparent z-0" />

      {/* Conteúdo à esquerda */}
      <div className="relative z-10 max-w-xl text-white space-y-6">
        {/* Logo horizontal */}
        <Image
          src="/images/logo.png"
          alt="Logo B Fabbrani"
          width={160}
          height={40}
          className="mb-2"
        />

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
          <span className="text-[#A78BFA]">A incorporadora</span>
          <br className="hidden sm:block" />
          com maior suporte do Brasil
        </h2>

        {/* Texto */}
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          Com 10 anos de experiência, a B Fabriani é uma incorporadora nacional
          com lançamentos em diversos estados do Brasil.
        </p>
      </div>

      {/* Logo BF à direita com visual moderno */}
      <div className="relative z-10 mt-10 md:mt-0">
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-10 py-8 shadow-xl flex flex-col items-center justify-center transition-transform hover:scale-105 duration-300">
          <Image
            src="/images/logo-2.png"
            alt="Logo BF"
            width={180}
            height={90}
            className="object-contain"
          />
          <p className="text-[#A78BFA] font-semibold mt-4 tracking-wide">
            B·FABBRIANI
          </p>
        </div>
      </div>
    </section>
  );
}
