import React, { useState } from 'react'; // Importando useState
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

export default function Navbar({ setShowSidebarCart, selectedProducts }) {
   const [showMenu, setShowMenu] = useState(false); // Controla a visibilidade do menu
   const navigate = useNavigate();

   const handleNavigation = (path) => {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
      setShowMenu(false); // Fecha o menu ao clicar em uma opção
   };

   return (
      <div className="nav">
         <div className="inner-content">
            <h1 className="logo">
               Mercado<span>Eletronico</span>
            </h1>

             {/* Botão de menu para telas pequenas */}
             <button
               className="menu-button"
               onClick={() => setShowMenu(!showMenu)}
            >
                <img src={`${process.env.PUBLIC_URL}/imagens/menu.png`} alt="Menu" />
            </button>

            {/* Menu lateral (exibido apenas em telas pequenas) */}
            <div className={`mobile-menu ${showMenu ? "show" : ""}`}>
               <ul>
                  <h1>Mercado<span> Menu</span></h1>
                  <li onClick={() => handleNavigation("/")}>Começo</li>
                  <li onClick={() => handleNavigation("/products")}>Produtos</li>
                  <li onClick={() => handleNavigation("/products")}>Eletronico</li>
                  <li onClick={() => handleNavigation("/contact")}>Contato</li>
               </ul>
            </div>

            {/* Menu padrão (exibido apenas em telas grandes) */}
            <nav>
               <ul>
                  <li onClick={() => handleNavigation("/")}>Começo</li>
                  <li onClick={() => handleNavigation("/products")}>Produtos</li>
                  <li onClick={() => handleNavigation("/products")}>Eletronico</li>
                  <li onClick={() => handleNavigation("/contact")}>Contato</li>
               </ul>
            </nav>

            {/* Ícones de busca e carrinho */}
            <div className="navs-icon-container">
               <div className="search-input-container">
                  <input type="search" placeholder="Procurar" />
                  <FontAwesomeIcon icon={faSearch} />
               </div>

               <button
                  className="shopping-cart"
                  onClick={() => setShowSidebarCart(true)}
               >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <div className="products-count">{selectedProducts.length}</div>
               </button>
            </div>
         </div>
      </div>
   );
}
