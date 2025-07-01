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
];
