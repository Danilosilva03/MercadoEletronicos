import { faMoneyBill, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Product({
  id,
  image,
  name,
  rating,
  price,
  originalPrice,
  installmentPrice,
  maxInstallments,
  addProductToCart
}) {
  const navigate = useNavigate();

  // Função para formatar preços corretamente
  const parsePrice = (priceString) => {
    if (typeof priceString !== 'string') return 0;
    const parsed = parseFloat(priceString.replace('R$', '').replace(/\./g, '').replace(',', '.'));
    return isNaN(parsed) ? 0 : parsed;
  };

  const formatToBRL = (value) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const parsedPrice = parsePrice(price);
  const parsedOriginalPrice = originalPrice ? parsePrice(originalPrice) : null;
  const parsedInstallmentPrice = installmentPrice ? parsePrice(installmentPrice) : null;

  const formattedPrice = formatToBRL(parsedPrice);
  const formattedOriginalPrice = parsedOriginalPrice ? formatToBRL(parsedOriginalPrice) : null;
  const formattedInstallmentPrice = parsedInstallmentPrice ? formatToBRL(parsedInstallmentPrice) : null;

  const ratingStars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  // Adiciona ao carrinho e redireciona para o checkout
  const handleBuyNow = () => {
    addProductToCart({ id, name, price, image });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
      navigate('/checkout');
    }, 500);
  };

  const handleAddToCart = () => {
    addProductToCart({ id, name, price, image });
  };

  return (
    <div className="product">
      <img src={`${process.env.PUBLIC_URL}/${image}`} alt={name} className="product-image" />
      <p className="product-name">{name}</p>
      <p className="product-rating">{ratingStars}</p>

      <div className="product-price-container">
        {formattedOriginalPrice && formattedOriginalPrice !== formattedPrice ? (
          <>
            <p className="product-price original-price" style={{ textDecoration: 'line-through', color: 'red' }}>
              {formattedOriginalPrice}
            </p>
            <p className="product-price promotion-price" style={{ fontWeight: 'bold' }}>
              {formattedPrice}
            </p>
          </>
        ) : (
          <p className="product-price">{formattedPrice}</p>
        )}

        {formattedInstallmentPrice && maxInstallments && (
          <p className="product-installments">
            {`Ou ${maxInstallments}x de ${formattedInstallmentPrice} sem juros`}
          </p>
        )}
      </div>

      <div className="buttons">
        <button onClick={handleBuyNow} className="btn-icon buy-now-btn">
          <span>Comprar Agora</span>
          <FontAwesomeIcon icon={faMoneyBill} />
        </button>

        <button onClick={handleAddToCart} className="btn-icon add-to-cart-btn">
          <span>Adicionar ao Carrinho</span>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </div>
  );
}
