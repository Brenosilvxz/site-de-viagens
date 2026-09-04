import { useEffect, useState } from "react";

// Imagens
import gramado from "../../assets/gramado.jpg";
import arraial from "../../assets/arraial.jpg";
import maragogi from "../../assets/maragogi.jpg";
import noronha from "../../assets/noronha.jpg";
import bonito from "../../assets/bonito.jpg";
import maranhese from "../../assets/maranhao.jpg";
import buzios from "../../assets/buzios.jpg";
import diamantina from "../../assets/d.jpg";
import paraty from "../../assets/paraty.jpg";
import foz from "../../assets/foz.jpg";

import "./Destinos.css";

export default function Destinos() {
  // Caminho das imagens
  const imagens = {
    "gramado.jpg": gramado,
    "arraial.jpg": arraial,
    "maragogi.jpg": maragogi,
    "noronha.jpg": noronha,
    "bonito.jpg": bonito,
    "maranhao.jpg": maranhese,
    "buzios.jpg": buzios,
    "d.jpg": diamantina,
    "paraty.jpg": paraty,
    "foz.jpg": foz,
  };

  const [destinos, setDestinos] = useState([]);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/destinos")
      .then((res) => res.json())
      .then((dados) => {
        setDestinos(dados);
      });
  }, []);

  // Apenas os 3 primeiros aparecem no carrossel
  const destaques = destinos.slice(0, 3);

  function proximo() {
    setIndex((index + 1) % destaques.length);
  }

  function anterior() {
    setIndex(index === 0 ? destaques.length - 1 : index - 1);
  }

  if (destinos.length === 0) {
    return <p>Carregando destinos...</p>;
  }

  return (
    <main className="Destinos">
      <div className="titulo">
        <span>ESCOLHAS DA ESTAÇÃO</span>

        <h1>Conheça seus próximos destinos</h1>

        <p>
          Descubra lugares incríveis do Brasil e viva experiências únicas em
          cada viagem.
        </p>
      </div>

      {/* CARROSSEL */}

      <div className="carousel">
        <button className="btn left" onClick={anterior}>
          ❮
        </button>

        <img
          src={imagens[destaques[index].imagem]}
          alt={destaques[index].nome}
        />

        <div className="info">
          <small>{destaques[index].estado}</small>

          <h2>{destaques[index].nome}</h2>

          <p>{destaques[index].descricao}</p>

          {/* COMENTÁRIOS DO DESTINO */}
          <div className="comentarios">
            <h3>Comentários</h3>

            {destaques[index].comentarios &&
            destaques[index].comentarios.length > 0 ? (
              destaques[index].comentarios.map((comentario, i) => (
                <div className="comentario" key={i}>
                  <strong>{comentario.nome}</strong>
                  <p>{comentario.comentario}</p>
                </div>
              ))
            ) : (
              <p>Nenhum comentário ainda.</p>
            )}
          </div>
        </div>

        <button className="btn right" onClick={proximo}>
          ❯
        </button>
      </div>

      {/* INDICADORES */}

      <div className="dots">
        {destaques.map((_, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* CARDS DE TODOS OS DESTINOS */}

      <section className="listaDestinos">
        <h2>Explore outros destinos</h2>

        <div className="cardsDestinos">
          {destinos.map((destino) => (
            <div className="cardDestino" key={destino.id}>
              <img
                src={imagens[destino.imagem]}
                alt={destino.nome}
              />

              <div className="cardInfo">
                <small>{destino.estado}</small>

                <h3>{destino.nome}</h3>

                <p>{destino.descricao}</p>

                {/* COMENTÁRIOS DO CARD */}
                <div className="comentarios">
                  <h4>Comentários</h4>

                  {destino.comentarios &&
                  destino.comentarios.length > 0 ? (
                    destino.comentarios.map((comentario, i) => (
                      <div className="comentario" key={i}>
                        <strong>{comentario.nome}</strong>

                        <p>{comentario.comentario}</p>
                      </div>
                    ))
                  ) : (
                    <p>Nenhum comentário ainda.</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
