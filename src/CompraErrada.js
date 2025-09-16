import React from 'react';
import { useNavigate } from 'react-router-dom';

function CompraErrada() {
  const navigate = useNavigate();

  return (
    <div className="compra-status">
      <h1>❌ Compra Não Aprovada</h1>
      <p>Houve um problema com seu pagamento. Tente novamente.</p>
      <button onClick={() => navigate('/')}>Voltar para o início</button>
    </div>
  );
}

export default CompraErrada;
