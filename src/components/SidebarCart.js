import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill, faXmark } from "@fortawesome/free-solid-svg-icons";
import SidebarProduct from "./SidebarProduct";
import { useNavigate } from "react-router-dom";

// Função para converter preços corretamente
const parsePrice = (priceString) => {
  if (!priceString) return 0; // Retorna 0 se o valor estiver indefinido

  if (typeof priceString !== "string") {
    console.warn("O preço não é uma string:", priceString);
    priceString = String(priceString);
  }

  // Remove 'R$', pontos e troca a vírgula por ponto
  const parsedValue = parseFloat(
    priceString.replace(/[^\d,]/g, "").replace(",", ".")
  );

  if (isNaN(parsedValue)) {
    console.error("Erro ao converter preço:", priceString);
    return 0;
  }

  return parsedValue;
};

export default function SidebarCart({
  setShowSidebarCart,
  showSidebarCart,
  selectedProducts,
  setSelectedProducts,
  cartTotal,
  setCartTotal,
}) {
  const navigate = useNavigate();

  // Calculando o total do carrinho
  useEffect(() => {
    if (!selectedProducts || selectedProducts.length === 0) {
      setCartTotal(0);
      return;
    }

    const newTotal = selectedProducts.reduce((total, product) => {
      const priceNumber = parsePrice(product.price);
      const quantity = product.quantity || 1;

      if (!priceNumber || isNaN(priceNumber)) {
        console.warn(`Preço inválido para o produto ${product.name}`);
      }

      return total + priceNumber * quantity;
    }, 0);

    console.log("Novo total do carrinho calculado:", newTotal);
    setCartTotal(newTotal);
  }, [selectedProducts, setCartTotal]);

  // Remover produto do carrinho
  const removeProductFromCart = (id) => {
    const updatedProducts = selectedProducts.filter(
      (product) => product.id !== id
    );
    setSelectedProducts(updatedProducts);
  };

  // Atualizar a quantidade do produto no carrinho
  const handleProductQuantityUpdate = (id, newQuantity) => {
    if (newQuantity < 1) return; // Garante que a quantidade seja pelo menos 1

    const updatedProducts = selectedProducts.map((product) =>
      product.id === id ? { ...product, quantity: newQuantity } : product
    );
    setSelectedProducts(updatedProducts);
  };

  // Navegar para a página de checkout
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate("/checkout"), 300);
  };

  return (
    <aside className={`sidebar-cart ${showSidebarCart ? "show" : ""}`}>
      <div className="top">
        <h3>Carrinho de Compras</h3>
        <button onClick={() => setShowSidebarCart(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>

      <div className="sidebar-products-list">
        {selectedProducts.length > 0 ? (
          selectedProducts.map((product) => (
            <SidebarProduct
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              quantity={product.quantity}
              removeProductFromCart={removeProductFromCart}
              updateProductQuantity={handleProductQuantityUpdate}
            />
          ))
        ) : (
          <i className="Menu-cart">Seu carrinho está vazio</i>
        )}
      </div>

      {cartTotal > 0 && (
        <div className="total-container">
          <b>Valor Total: </b>
          {cartTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
          <button className="btn-cart" onClick={handleClick}>
            <FontAwesomeIcon icon={faMoneyBill} />
            <span>Enviar</span>
          </button>
        </div>
      )}
    </aside>
  );
}
