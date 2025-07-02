export interface Empreendimento {
  nome: string;
  status: string;
  imagem: string;
}

export const empreendimentos: Empreendimento[] = [
  {
    nome: "Armona",
    status: "100% de entrega concluída.",
    imagem: "/images/1.png",
  },
  {
    nome: "Villa",
    status: "em fase final de obra.",
    imagem: "/images/2.png",
  },
  {
    nome: "Essenza",
    status: "Lançamento recente, unidades disponíveis.",
    imagem: "/images/3.jpg",
  },
  {
    nome: "MonteVerde",
    status: "Obras em andamento, 60% concluídas.",
    imagem: "/images/4.jpg",
  },
  {
    nome: "BellaVista",
    status: "100% vendido, aguardando entrega das chaves.",
    imagem: "/images/5.jpg",
  },
];
