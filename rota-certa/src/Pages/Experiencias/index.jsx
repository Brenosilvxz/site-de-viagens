import { useState } from "react";

import "./Experiencias.css";

import mergulho from "../../assets/mergulho.jpg";
import trilha from "../../assets/trilha.jpg";
import aventura from "../../assets/aventura.jpg";
import barco from "../../assets/barco.jpg";

export default function Experiencias() {
  const experiencias = [
    {
      imagem: mergulho,
      titulo: "Mergulho em águas cristalinas",
      descricao: "Explore o fundo do mar e conheça uma vida marinha incrível.",
      local: "Fernando de Noronha - PE",
      duracao: "2 a 4 horas",
      categoria: "Aventura",
    },

    {
      imagem: trilha,
      titulo: "Trilhas e cachoeiras",
      descricao: "Caminhos cercados pela natureza com paisagens inesquecíveis.",
      local: "Chapada Diamantina - BA",
      duracao: "1 dia",
      categoria: "Natureza",
    },

    {
      imagem: aventura,
      titulo: "Aventuras radicais",
      descricao: "Experiências para quem busca adrenalina e diversão.",
      local: "Bonito - MS",
      duracao: "Meio período",
      categoria: "Aventura",
    },

    {
      imagem: barco,
      titulo: "Passeio de barco",
      descricao: "Conheça praias e lugares secretos pelo litoral brasileiro.",
      local: "Arraial do Cabo - RJ",
      duracao: "3 horas",
      categoria: "Passeio",
    },
  ];

  const [index, setIndex] = useState(0);

  function proximo() {
    setIndex((index + 1) % experiencias.length);
  }

  function anterior() {
    setIndex(index === 0 ? experiencias.length - 1 : index - 1);
  }

  return (
    <main className="Experiencias">
      <div className="tituloExperiencias">
        <span>VIVA NOVAS HISTÓRIAS</span>

        <h1>Experiências para tornar sua viagem única</h1>

        <p>
          Descubra atividades incríveis e transforme cada destino em uma
          lembrança.
        </p>
      </div>

      {/* CARROSSEL */}

      <div className="carouselExperiencias">
        <button className="btn left" onClick={anterior}>
          ❮
        </button>

        <img
          src={experiencias[index].imagem}
          alt={experiencias[index].titulo}
        />

        <div className="infoExperiencia">
          <h2>{experiencias[index].titulo}</h2>

          <p>{experiencias[index].descricao}</p>
        </div>

        <button className="btn right" onClick={proximo}>
          ❯
        </button>
      </div>

      {/* INDICADORES */}

      <div className="dots">
        {experiencias.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* CARDS */}

      <section className="cardsExperiencias">
        <h2>Encontre sua próxima experiência</h2>

        <div className="gridExperiencias">
          {experiencias.map((item) => (
            <article className="cardExperiencia" key={item.titulo}>
              <img src={item.imagem} alt={item.titulo} />

              <div className="cardConteudo">
                <span>{item.categoria}</span>

                <h3>{item.titulo}</h3>

                <p>{item.descricao}</p>

                <div className="detalhes">
                  <p>📍 {item.local}</p>

                  <p>⏱️ {item.duracao}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
