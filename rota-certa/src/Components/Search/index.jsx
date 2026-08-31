import "./Search.css";

export default function Search() {
  return (
    <div className="search">
      <div className="campo">
        <small>PARA ONDE?</small>
        <input placeholder="Descubra um destino" />
      </div>

      <div className="campo data">
        <small>QUANDO?</small>
        <input placeholder="Escolha a data" />
      </div>

      <button>⌕</button>
    </div>
  );
}
