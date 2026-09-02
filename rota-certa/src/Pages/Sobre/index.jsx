import "./Sobre.css";

import sobreBanner from "../../assets/sobre-banner.jpg";

import equipe from "../../assets/equipe.jpg";
import viagem from "../../assets/viagem.jpg";
import brasil from "../../assets/brasil.jpg";

export default function Sobre() {
  return (
    <main className="Sobre">
      {/* HERO */}

      <section
        className="sobreHero"
        style={{
          backgroundImage: `url(${sobreBanner})`,
        }}
      >
        <div className="overlay"></div>

        <div className="sobreTexto">
          <span>SOBRE O ROTA CERTA</span>

          <h1>O caminho certo para viver grandes experiências</h1>

          <p>
            Conectamos viajantes aos destinos mais incríveis do Brasil, criando
            experiências únicas e memoráveis.
          </p>

          <button>Conhecer destinos</button>
        </div>
      </section>

      {/* HISTÓRIA */}

      <section className="historia">
        <img src={equipe} alt="Equipe Rota Certa" />

        <div>
          <h2>Nossa história</h2>

          <p>
            O Rota Certa nasceu para facilitar a descoberta de novos lugares e
            transformar planos de viagem em momentos inesquecíveis.
          </p>

          <p>
            Nossa missão é mostrar que cada destino possui uma história
            esperando para ser vivida.
          </p>
        </div>
      </section>

      {/* EXPERIÊNCIA */}

      <section className="experiencia">
        <div>
          <h2>Mais que uma viagem</h2>

          <p>
            Criamos uma experiência completa para você encontrar lugares,
            culturas e aventuras.
          </p>
        </div>

        <img src={viagem} alt="Experiência de viagem" />
      </section>

      {/* BRASIL */}

      <section className="brasil">
        <img src={brasil} alt="Brasil" />

        <div>
          <h2>Descubra o Brasil</h2>

          <p>
            Praias paradisíacas, montanhas, cidades históricas e experiências
            que ficam para sempre na memória.
          </p>
        </div>
      </section>

      {/* NÚMEROS */}

      <section className="numeros">
        <div>
          <h2>+50</h2>
          <p>Destinos</p>
        </div>

        <div>
          <h2>100%</h2>
          <p>Experiências</p>
        </div>

        <div>
          <h2>Brasil</h2>
          <p>Explorado</p>
        </div>
      </section>
    </main>
  );
}
