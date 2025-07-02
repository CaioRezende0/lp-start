import Image from "next/image";
import { beneficios } from "@/data/beneficios";
import Container from "./Container";

export default function Beneficios() {

  return (
    <section className="bg-gradient-to-b from-[#e5e9ff] to-[#dce1fa] text-[#0B0B18] py-20">
      <Container>
      {/* ÍCONES de introdução */}
      <div className="flex justify-center items-end gap-4 mb-10">
        <div className="w-20 sm:w-[110px] aspect-square relative">
          <Image
            src="/images/Icone-1.png"
            alt="Ícone 1"
            fill
            className="object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="w-24 sm:w-[160px] aspect-square relative">
          <Image
            src="/images/Icone-2.png"
            alt="Ícone 2"
            fill
            className="object-contain drop-shadow-md hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="w-20 sm:w-[120px] aspect-square relative">
          <Image
            src="/images/Icone-3.png"
            alt="Ícone 3"
            fill
            className="object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      {/* Título */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-xl md:text-2xl uppercase font-extrabold tracking-tight">
          VOCÊ ESTÁ ENFRENTANDO DIFICULDADES PARA FECHAR VENDAS?
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#A78BFA] mt-2">
          A B Fabbrani tem a solução!
        </h3>
        <p className="text-sm md:text-base text-[#333] mt-4">
          O que a B Fabbrani entrega:
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {beneficios.map(({ titulo, descricao, icon: Icon }) => (
          <div
            key={titulo}
            className="bg-[#6D28D9] backdrop-blur-md border border-white/20 text-white p-6 rounded-2xl shadow-xl hover:shadow-4xl duration-300 group min-h-[230px] flex flex-col justify-between hover:scale-105 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#A78BFA]/50 p-3 rounded-full text-[#A78BFA]">
                <Icon size={28} strokeWidth={2} />
              </div>
              <h4 className="text-lg font-semibold">{titulo}</h4>
            </div>
            <p className="text-sm text-gray-300">{descricao}</p>
          </div>
        ))}
      </div>

      {/* Botão */}
      <div className="mt-16 text-center">
        <button className="bg-gradient-to-r from-[#A78BFA] to-[#7C3AED] hover:from-[#8B5CF6] hover:to-[#6D28D9] transition-all duration-300 text-white px-8 py-3 rounded-xl font-semibold shadow-xl hover:scale-105">
          PARTICIPE AGORA!
        </button>
      </div>
      </Container>
    </section>
  );
}
