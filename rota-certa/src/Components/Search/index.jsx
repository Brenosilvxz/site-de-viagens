import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Search.css";

export default function Search() {
  const [destino, setDestino] = useState("");

  const [data, setData] = useState("");

  const navigate = useNavigate();

  function pesquisar() {
    if (!destino) {
      alert("Digite um destino");

      return;
    }

    navigate(`/destinos?busca=${destino}&data=${data}`);
  }

  return (
    <div className="search">
      <div className="campo">
        <small>PARA ONDE?</small>

        <input
          placeholder="Descubra um destino"
          value={destino}
          onChange={(e) => setDestino(e.target.value)}
        />
      </div>

      <div className="campo data">
        <small>QUANDO?</small>

        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>

      <button onClick={pesquisar}>🔍</button>
    </div>
  );
}
