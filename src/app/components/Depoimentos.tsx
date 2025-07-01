import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Depoimentos() {
  const depoimentos = [
    {
      nome: "Ana Oliveira",
      texto:
        "A B Fabriani me deu todo suporte para crescer como corretora. Foi uma virada de chave na minha carreira!",
    },
    {
      nome: "Carlos Santos",
      texto:
        "Consegui dobrar meu faturamento com o programa de aceleração de vendas da B Fabriani.",
    },
    {
      nome: "Fernanda Lima",
      texto:
        "O acompanhamento e treinamento foram incríveis. Me sinto preparada e segura no mercado!",
    },
  ];

  return (
    <section className="bg-[#0B0B18] text-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Faixa com marquee */}
      <div className="relative w-full overflow-hidden mb-16">
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#0B0B18] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0B0B18] to-transparent z-10" />
        <div className="whitespace-nowrap animate-marquee text-[#A78BFA] font-semibold text-sm tracking-widest">
          {Array(20).fill("· B·FABBRIANI · BF ").join("")}
        </div>
      </div>

      {/* Título */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Depoimentos de Sucesso
      </h2>

      {/* Carrossel de cards */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
          {depoimentos.map((dep, idx) => (
            <div
              key={idx}
              className="min-w-[280px] sm:min-w-[320px] snap-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between transition-transform hover:scale-[1.02] duration-300"
            >
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                “{dep.texto}”
              </p>
              <p className="text-sm font-semibold text-[#A78BFA]">{dep.nome}</p>
            </div>
          ))}
        </div>

        {/* Botões visuais */}
        <button
          aria-label="Anterior"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#A78BFA]/10 text-[#A78BFA] p-2 rounded-full hover:bg-[#A78BFA]/30 transition"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          aria-label="Próximo"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#A78BFA]/10 text-[#A78BFA] p-2 rounded-full hover:bg-[#A78BFA]/30 transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
