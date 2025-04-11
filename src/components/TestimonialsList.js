import React from 'react'

export default function TestimonialsList() {
  return ( <div className="page-inner-content">
       <div className="imagensMeio">
           <div className="imagensMeio2"> 
           <img src={`${process.env.PUBLIC_URL}/imagens/products/lanche1.jpg`} alt="products"  className="headerI" />
           </div>
            <div className="imagensMeio2">
            <img src={`${process.env.PUBLIC_URL}/imagens/products/lanche3.png`} alt="products" className="headerIM" />
            </div>

           <div className="imagensMeio2">
              <img src={`${process.env.PUBLIC_URL}/imagens/products/lanche2.jpg`} alt="products" />
           </div>
       </div>
  </div> 
   )
}
