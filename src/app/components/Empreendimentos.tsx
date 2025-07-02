"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";

import Image from "next/image";
import { empreendimentos } from "@/data/empreendimentos";
import Container from "./Container";

export default function Empreendimentos() {
  return (
    <section className="bg-[#0B0B18] text-white py-20 overflow-hidden">
      <Container>
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 leading-tight text-center">
          Nossos <br /> Empreendimentos
        </h2>

        {/* Centraliza o Swiper */}
        <div className="relative h-[520px] sm:h-[700px] md:h-[800px] flex items-center justify-center">
          <Swiper
            direction="vertical"
            slidesPerView={2}
            spaceBetween={40}
            mousewheel={{ forceToAxis: true }}
            autoplay={{ delay: 4500 }}
            modules={[Mousewheel, Autoplay]}
            className="w-full max-w-5xl h-full"
          >
            {empreendimentos.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center h-full"
              >
                <div className="relative w-full max-w-2xl aspect-[16/9] rounded-xl overflow-hidden group shadow-lg">
                  {/* Imagem otimizada */}
                  <Image
                    src={item.imagem}
                    alt={item.nome}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 640px, 720px"
                    quality={90}
                    priority={index === 0}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay escuro com gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10" />

                  {/* Conteúdo */}
                  <div className="absolute bottom-4 left-4 z-20">
                    <h3 className="text-xl md:text-2xl font-bold">
                      {item.nome}
                    </h3>
                    <p className="text-sm text-gray-300">{item.status}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
