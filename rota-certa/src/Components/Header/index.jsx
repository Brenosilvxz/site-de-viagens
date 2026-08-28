import Noronha from "../../assets/fernando-de-noronha.jpg";
import "./Header.css";

export default function Header() {
  return (
    <div className="Back">

      {/* IMAGEM */}
      <img
        src={Noronha}
        className="img"
        alt="Fernando de Noronha"
      />

      {/* CAMADA ESCURA */}
      <div className="overlay"></div>

      {/* CONTEÚDO */}
      <div className="info-icon">◎</div>

      <span>Sua próxima história começa aqui</span>

      <h1>
        Viaje para sentir o mundo de verdade.
      </h1>

      <p>
        Roteiros autorais, lugares inesquecíveis e experiências
        que aproximam você da cultura local.
      </p>
        
      <span>Fernando de Noronha</span>

      <h2>
        Mergulhe em águas que parecem irreais.
      </h2>

    </div>
  );
}