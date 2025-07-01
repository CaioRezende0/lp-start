import { Instagram, Linkedin, Phone } from "lucide-react";
import Image from "next/image";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0B18] text-white pt-20 pb-10 mt-32">
      {/* Gradiente superior */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6D28D9] via-[#A78BFA] to-[#6D28D9]" />
      <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        {/* Logo e descrição */}
        <div className="space-y-4">
          <Image
            src="/images/logo.png"
            alt="Logo B Fabbrani"
            width={160}
            height={40}
            className="mb-2"
          />
          <p className="text-sm text-gray-400 leading-relaxed">
            A B·Fabbrani transforma a carreira de corretores com suporte,
            tecnologia e estratégia. Junte-se à incorporadora com maior presença
            nacional.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h4 className="text-base font-semibold text-[#A78BFA] mb-4">
            Navegação
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#sobre" className="hover:text-white transition">
                Sobre a B Fabbrani
              </a>
            </li>
            <li>
              <a href="#depoimentos" className="hover:text-white transition">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#calendario" className="hover:text-white transition">
                Calendário de Eventos
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-white transition">
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h4 className="text-base font-semibold text-[#A78BFA] mb-4">
            Conecte-se conosco
          </h4>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="bg-[#A78BFA]/10 hover:bg-[#A78BFA]/30 text-[#A78BFA] p-2 rounded-full transition"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="bg-[#A78BFA]/10 hover:bg-[#A78BFA]/30 text-[#A78BFA] p-2 rounded-full transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="bg-[#A78BFA]/10 hover:bg-[#A78BFA]/30 text-[#A78BFA] p-2 rounded-full transition"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} B·Fabbrani. Todos os direitos reservados.
      </div>
      </Container>
    </footer>
  );
}
