import React from 'react'

export default function TestimonialsList() {
  return (
  <div className="page-inner-content">
       <div className="imagensMeio">
           <div className="imagensMeio2"> 
           <img src={`${process.env.PUBLIC_URL}/imagens/promo.webp`} alt="products"  className="headerIM" />
           </div>
            <div className="imagensMeio2">
            <img src={`${process.env.PUBLIC_URL}/imagens/super-ofertas-3.jpg`} alt="products" className="headerIM" />
            </div>
           <div className="imagensMeio2">
              <img src={`${process.env.PUBLIC_URL}/imagens/promo4.webp`} alt="products" />
           </div>
       </div>
  </div> 
   )
}
