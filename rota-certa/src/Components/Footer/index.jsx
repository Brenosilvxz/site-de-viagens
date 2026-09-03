import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* MARCA */}
        <div className="footer__marca">
          <span className="footer__logo">
            ROTA CERTA
          </span>

          <p>
            Viaje mais devagar.
            <br />
            Viva lugares de verdade.
          </p>

          <span className="footer__frase">
            🌿 Feito para quem ama descobrir.
          </span>
        </div>

        {/* DESTINOS */}
        <div className="footer__coluna">
          <h3>Destinos</h3>

          <span>Praias</span>
          <span>Montanhas</span>
          <span>Cachoeiras</span>
          <span>Florestas</span>
          <span>Cidades históricas</span>
        </div>

        {/* EXPERIÊNCIAS */}
        <div className="footer__coluna">
          <h3>Experiências</h3>

          <span>Trilhas</span>
          <span>Ecoturismo</span>
          <span>Gastronomia local</span>
          <span>Cultura</span>
          <span>Turismo sustentável</span>
        </div>

        {/* NOSSO PROPÓSITO */}
        <div className="footer__coluna">
          <h3>Nosso propósito</h3>

          <span>Valorizar a natureza</span>
          <span>Apoiar comunidades locais</span>
          <span>Preservar paisagens</span>
          <span>Viajar com consciência</span>
          <span>Criar memórias reais</span>
        </div>

      </div>

      {/* FRASE CENTRAL */}

      <div className="footer__mensagem">
        <span>EXPLORE • PRESERVE • VIVA</span>

        <h2>
          O mundo é grande demais
          <br />
          para ser visto com pressa.
        </h2>
      </div>

      {/* PARTE INFERIOR */}

      <div className="footer__bottom">
        <span>
          © 2026 Viajar — Experiências que ficam na memória.
        </span>

        <span>
          🌎 Viaje. Descubra. Preserve.
        </span>
      </div>
    </footer>
  );
}