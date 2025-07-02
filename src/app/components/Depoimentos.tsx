"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { depoimentos } from "@/data/depoimentos";
import Container from "./Container";

export default function Depoimentos() {
  return (
    <section className="bg-[#0B0B18] text-white py-20 overflow-hidden">
      <Container>
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

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-12"
        >
          {depoimentos.map((dep, idx) => (
            <SwiperSlide key={idx} className="h-full flex">
              <div className="flex flex-col justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl w-full min-h-[240px] hover:scale-[1.02] transition-transform duration-300">
                <p className="text-base text-gray-300 leading-relaxed mb-6">
                  “{dep.texto}”
                </p>
                <p className="text-sm font-semibold text-[#A78BFA]">
                  {dep.nome}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
