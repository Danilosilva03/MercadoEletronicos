import React from 'react';

export default function CompraErrada() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
      <h1>❌ Algo deu errado na sua compra.</h1>
      <p>Por favor, verifique os dados inseridos e tente novamente.</p>
    </div>
  );
}
