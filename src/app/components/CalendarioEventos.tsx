import { CalendarDays } from "lucide-react";
import { eventos } from "@/data/eventos";
import Container from "./Container";

export default function CalendarioEventos() {

  return (
    <section className="bg-[#E4E7FA] py-20 text-[#0B0B18]">
      <Container>
      {/* Título */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold">
          Calendário de Eventos
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Fique por dentro dos próximos encontros com a B Fabbrani.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventos.map((evento, idx) => (
          <div
            key={idx}
            className="bg-white/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="flex items-center gap-3 mb-4 text-[#6D28D9]">
              <CalendarDays size={20} />
              <span className="text-sm font-semibold tracking-wide uppercase">
                {evento.data}
              </span>
            </div>

            <h3 className="text-lg font-bold mb-2 text-[#111827]">
              {evento.titulo}
            </h3>

            <p className="text-sm text-[#374151]">{evento.descricao}</p>
          </div>
        ))}
      </div>
      </Container>
    </section>
  );
}
