export interface Evento {
  titulo: string;
  data: string;
  descricao: string;
}

export const eventos: Evento[] = [
  {
    titulo: "Integração em São Paulo",
    data: "10 de Agosto de 2025",
    descricao: "Evento exclusivo para corretores da capital paulista.",
  },
  {
    titulo: "Treinamento Online",
    data: "15 de Agosto de 2025",
    descricao: "Capacitação técnica com nossos especialistas.",
  },
  {
    titulo: "Encontro Nacional B·Fabbrani",
    data: "22 de Agosto de 2025",
    descricao: "Um dia inteiro de networking, palestras e novidades.",
  },
];
