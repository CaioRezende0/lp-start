import Image from "next/image";
import { empreendimentos } from "@/data/empreendimentos";

export default function Empreendimentos() {

  return (
    <section className="bg-[#0B0B18] text-white py-20 px-6 md:px-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-12 leading-tight">
        Nossos <br /> Empreendimentos
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {empreendimentos.map((item) => (
          <div
            key={item.nome}
            className="relative aspect-[16/10] rounded-xl overflow-hidden group"
          >
            {/* Imagem de fundo */}
            <Image
              src={item.imagem}
              alt={item.nome}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay escuro com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

            {/* Conteúdo */}
            <div className="absolute bottom-4 left-4 z-20">
              <h3 className="text-xl md:text-2xl font-bold">{item.nome}</h3>
              <p className="text-sm text-gray-300">{item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
