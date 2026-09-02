import "./Planejar.css";

import hero from "../../assets/hero.jpg";

export default function Planejar() {
  return (
    <main className="Planejar">
      <img src={hero} alt="" />

      <section className="planejarHero">
        <div className="planejarTexto">
          <span>PLANEJE SUA PRÓXIMA AVENTURA</span>

          <h1>Sua viagem começa com o planejamento certo</h1>

          <p>
            Encontre destinos, organize seus planos e viva experiências
            inesquecíveis.
          </p>
        </div>
      </section>

      {/* FORMULÁRIO */}

      <section className="formViagem">
        <h2>Planeje sua viagem</h2>

        <div className="campos">
          <div>
            <label>Destino</label>

            <input placeholder="Ex: Gramado" />
          </div>

          <div>
            <label>Data da viagem</label>

            <input type="date" />
          </div>

          <div>
            <label>Pessoas</label>

            <select>
              <option>1 pessoa</option>

              <option>2 pessoas</option>

              <option>Família</option>
            </select>
          </div>

          <div>
            <label>Orçamento</label>

            <select>
              <option>Econômico</option>

              <option>Confortável</option>

              <option>Luxo</option>
            </select>
          </div>
        </div>

        <button>Criar planejamento</button>
      </section>

      {/* ETAPAS */}

      <section className="etapas">
        <h2>Como funciona?</h2>

        <div className="cardsEtapas">
          <div className="card">
            <h3>01</h3>

            <h4>Escolha o destino</h4>

            <p>Encontre lugares incríveis para sua próxima viagem.</p>
          </div>

          <div className="card">
            <h3>02</h3>

            <h4>Organize os detalhes</h4>

            <p>Defina datas, orçamento e experiências.</p>
          </div>

          <div className="card">
            <h3>03</h3>

            <h4>Aproveite a viagem</h4>

            <p>Viaje tranquilo e aproveite cada momento.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
