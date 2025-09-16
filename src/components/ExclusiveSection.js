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
            <h2>"Performance, inovação e conectividade em um só lugar"
             </h2> 
            <p>
            Trabalhe, jogue e se conecte com o que há de mais moderno em tecnologia móvel. 
            Celulares com alto desempenho, câmeras avançadas e baterias duradouras. 
            Qualidade e garantia, direto pra você.
            </p>
            <Link to="products" className="see-more-btnn">
              <span>Ver Agora</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
           </div>
           <div className="right-sidee1">
           <img src={`${process.env.PUBLIC_URL}/imagens/products/iphones.webp`} alt="Smart Band" />
           </div>
        </div>
      </div>
    </div>
</div>
  );
}