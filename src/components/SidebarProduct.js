import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// Função para converter o preço de string para número float
const parsePrice = (priceString) => {
  // Garante que o preço seja tratado como uma string
  if (typeof priceString !== 'string') {
    priceString = String(priceString);
  }
  
  // Remove "R$", pontos e substitui vírgulas por pontos
  return parseFloat(priceString.replace('R$', '').replace(/\./g, '').replace(',', '.')) || 0;
};

export default function SidebarProduct({
  id,
  name,
  image,
  price,
  removeProductFromCart,
  updateProductQuantity,
  quantity,
}) {
  const initialPrice = parsePrice(price); // Converte o preço inicial para número
  const [localQuantity, setLocalQuantity] = useState(quantity);

  // Atualiza a quantidade no estado local e no carrinho
  const handleIncrease = () => {
    const newQuantity = localQuantity + 1;
    setLocalQuantity(newQuantity);
    updateProductQuantity(id, newQuantity);
  };

  const handleDecrease = () => {
    if (localQuantity > 1) {
      const newQuantity = localQuantity - 1;
      setLocalQuantity(newQuantity);
      updateProductQuantity(id, newQuantity);
    }
  };

  // Sincroniza a quantidade local com a quantidade do carrinho
  useEffect(() => {
    setLocalQuantity(quantity);
  }, [quantity]);

  // Calcula o total para o produto
  const calculateTotal = () => {
    return initialPrice * localQuantity;
  };

  return (
  
    <div className="sidebar-product">
      <div className="left-side">
        <button
          className="remove-product-btn"
          onClick={() => removeProductFromCart(id)}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="details">
          <h3>{name}</h3>
          <div className="quantity-control">
            <button onClick={handleDecrease} className="quantity-btn">-</button>
            <input
              type="number"
              min={1}
              value={localQuantity}
              readOnly
              className="quantity-input"
            />
            <button onClick={handleIncrease} className="quantity-btn">+</button>
          </div>
          <p className="price-sum">
            <b>Total Soma:</b> {calculateTotal().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
      </div>
      <div className="right-side">
      <img src={`${process.env.PUBLIC_URL}/${image}`} alt={name} className="product-image" />
      </div>
    </div>
  );
}
