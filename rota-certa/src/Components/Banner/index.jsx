import "./Banner.css";

import paisagem from "../../assets/paisagem.jpg";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__container">

        {/* IMAGEM */}
        <div className="banner__imagem-area">
          <img
            src={paisagem}
            alt="Paisagem de um destino turístico"
            className="banner__imagem"
          />

          {/* DEPOIMENTO */}
          <div className="banner__depoimento">
            <p>
              “A viagem mais bonita foi a que me fez sentir parte do lugar.”
            </p>
          </div>
        </div>

        {/* CONTEÚDO */}
        <div className="banner__conteudo">

          <span className="banner__eyebrow">
            VIAJE DIFERENTE
          </span>

          <h1>
            Menos roteiro pronto.
            <br />
            Mais encontros reais.
          </h1>

          <p className="banner__descricao">
            Criamos jornadas com tempo para observar, provar,
            conversar e descobrir. Tudo com curadoria local e
            suporte do começo ao fim.
          </p>

          {/* BENEFÍCIOS */}
          <div className="banner__beneficios">

            <div className="beneficio">
              <div className="beneficio__icone">
                ♧
              </div>

              <h2>Roteiros autorais</h2>

              <p>
                Percursos pensados no seu ritmo e no que você ama viver.
              </p>
            </div>

            <div className="beneficio">
              <div className="beneficio__icone">
                ♙
              </div>

              <h2>Conexão local</h2>

              <p>
                Guias e anfitriões que conhecem cada história do destino.
              </p>
            </div>

            <div className="beneficio">
              <div className="beneficio__icone">
                ♧
              </div>

              <h2>Suporte humano</h2>

              <p>
                Uma equipe disponível antes, durante e depois da viagem.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
