import "./NotFound.css"

export default function NotFound() {
  return (
    <div className="not-found-container">
      {/* Elementos decorativos de fundo animados */}
      <div className="sky-elements">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
        <div className="plane-path">
          <div className="flying-plane">✈️</div>
        </div>
      </div>

      <div className="not-found-content">
        <span className="error-badge">Erro 404</span>
        <h1>Oops! Rota não encontrada.</h1>
        <p>
          Parece que o destino que você está procurando foi descontinuado ou o piloto fez uma curva errada. Vamos retornar à base?
        </p>
        
        <div className="action-buttons">
          <a href="/" className="btn-primary">Voltar ao Início</a>
          <a href="/destinos" className="btn-secondary">Explorar Destinos</a>
        </div>
      </div>
    </div>
  )
}