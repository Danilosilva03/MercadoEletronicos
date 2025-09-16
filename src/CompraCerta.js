import React from 'react';
import { useNavigate } from 'react-router-dom';

function CompraCerta() {
  const navigate = useNavigate();

  return (
    <div className="compra-status">
      <h1>✅ Compra Aprovada!</h1>
      <p>Obrigado por comprar conosco. Você receberá um e-mail com os detalhes.</p>
      <button onClick={() => navigate('/')}>Voltar para o início</button>
    </div>
  );
}

export default CompraCerta;
