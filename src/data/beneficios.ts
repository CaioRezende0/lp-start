import { Rocket, Users, Handshake, Target, DollarSign, LucideIcon } from "lucide-react";

export interface Beneficio {
  titulo: string;
  descricao: string;
  icon: LucideIcon;
}

export const beneficios: Beneficio[] = [
  {
    titulo: "Treinamento de produto",
    descricao: "Conheça todos os detalhes dos nossos empreendimentos.",
    icon: Rocket,
  },
  {
    titulo: "Mentoria de Vendas",
    descricao: "Aprenda com os melhores do mercado.",
    icon: Users,
  },
  {
    titulo: "Suporte e acompanhamento para fechamento",
    descricao: "Esteja sempre acompanhado por especialistas.",
    icon: Handshake,
  },
  {
    titulo: "Gestor de Tráfego",
    descricao: "Campanhas de marketing feitas sob medida para você.",
    icon: Target,
  },
  {
    titulo: "Comissão de 7%",
    descricao: "....................................................",
    icon: DollarSign,
  },
  {
    titulo: "Mentoria de Vendas",
    descricao: "Aprenda com os melhores do mercado.",
    icon: Users,
  },
];
