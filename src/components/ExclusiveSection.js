import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ExclusiveSection.css';

export default function ExclusiveSection( addProductToCart) {
  return (
  <div>
    <div className="exclusive-section">
      <div className="page-inner-content">
        <div className="content">
          <div className="left-side">
            <h2>"Lanche perfeito: crocante por fora, recheado de alegria por dentro!"
            ! </h2> 
            <p>
            "Bem-vindo ao nosso encontro de sabores! 
            Que cada mordida seja uma explosão de felicidade e que esse lanche torne seu dia ainda mais especial!"
            </p>
            <Link to="products" className="see-more-btnn">
              <span>Ver Agora</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
           </div>
           <div className="right-sidee">
           <img src={`${process.env.PUBLIC_URL}/imagens/products/papel.jpg`} alt="Smart Band" />
           </div>
        </div>
      </div>
    </div>
</div>
  );
}