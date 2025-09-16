import React, { useState, useEffect } from 'react';
import Header from '../Header';
import ProductsList from '../ProductsList';
import ExclusiveSection from '../ExclusiveSection';
import TestimonialsList from '../TestimonialsList';
import './Carrossel.css';
// Carrossel separado fora do HomePage
function Carrossel() {
  const imagens = [
    `${process.env.PUBLIC_URL}/imagens/comprar-online.jpg`,
    `${process.env.PUBLIC_URL}/imagens/compra-on4.png`,
    `${process.env.PUBLIC_URL}/imagens/MercadoPago.webp`
  ];

  const [indexAtual, setIndexAtual] = useState(0);

  const anterior = () => {
    setIndexAtual((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length);
  };

  const proximo = () => {
    setIndexAtual((prevIndex) => (prevIndex + 1) % imagens.length);
  };

  // Troca automática das imagens a cada 4 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexAtual((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 4000); // 4 segundos

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar
  }, [imagens.length]);

  return (
    <div className="carrossel-container">
      <h1>Compromisso com a Sua Entrega!</h1>
      <p className="comercial">
        Monitoramos cada etapa da Entrega para Garantir que seu Produto chegue com Rapidez e Segurança ao Destino!
      </p>

      <div className="carrossel">
        <button className="seta esquerda" onClick={anterior}>&lt;</button>
        <div className="carrossel-slide">
          <img src={imagens[indexAtual]} alt="Produto" />
        </div>
        <button className="seta direita" onClick={proximo}>&gt;</button>
      </div>
    </div>
  );
}

// Página principal
export default function HomePage({ products, addProductToCart }) {
  return (
    <>
      <Header />
      <Carrossel />

      <div className="page-inner-content">
        <div className="section-title">
          <h3>Produtos e Ofertas</h3>
          <div className="underline"></div>
        </div>

        <div className="main-content">
          <ProductsList 
            addProductToCart={addProductToCart}
            products={products} 
          />
        </div>
      </div>

      <ExclusiveSection />
      <TestimonialsList />
    </>
  );
}
