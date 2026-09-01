import "./Cards.css";

import maranhese from "../../assets/maranheses.jpg";
import diamantina from "../../assets/chapada-diamantina.jpg";
import paraty from "../../assets/paraty.jpg";
import { Link } from "react-router-dom";

export default function Cards() {
  return (
    <section className="destinos">
      <div className="destinos__topo">
        <div>
          <span className="destinos__eyebrow">
            ESCOLHAS DA ESTAÇÃO
          </span>

          <h1>Destinos que ficam na memória</h1>
        </div>

        <Link to="/destinos" className="destinos__link">Ver todos os destinos</Link>
      </div>

      <div className="cards">
        {/* CARD 1 */}
        <article className="card">
          <img
            src={maranhese}
            alt="Lençóis Maranhenses"
          />

          <div className="card__degrade" />

          <span className="card__regiao card__regiao--amarelo">
            MARANHÃO
          </span>

          <div className="card__conteudo">
            <h2>Lençóis Maranhenses</h2>
            <p>Dunas, lagoas e céu infinito</p>
          </div>

          <button className="card__botao">
           <Link to={maranhese}>↗</Link> 
          </button>
        </article>

        {/* CARD 2 */}
        <article className="card">
          <img
            src= {diamantina}
            alt="Chapada Diamantina"
          />

          <div className="card__degrade" />

          <span className="card__regiao card__regiao--vermelho">
            BAHIA
          </span>

          <div className="card__conteudo">
            <h2>Chapada Diamantina</h2>
            <p>Trilhas para mudar o ritmo</p>
          </div>

          <button className="card__botao">
            <Link to={diamantina}>↗</Link> 
          </button>
        </article>

        {/* CARD 3 */}
        <article className="card">
          <img
            src= {paraty}
            alt="Paraty"
          />

          <div className="card__degrade" />

          <span className="card__regiao">
            RIO DE JANEIRO
          </span>

          <div className="card__conteudo">
            <h2>Paraty</h2>
            <p>História cercada de verde</p>
          </div>

          <button className="card__botao">
             <Link to={paraty}>↗</Link> 
          </button>
        </article>
      </div>
    </section>
  );
}
