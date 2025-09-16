import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ProductsPage from './components/pages/ProductsPage';
import SidebarCart from './components/SidebarCart';
import FormPagamento from './components/FormPagamento';
import CompraCerta from './CompraCerta';     // NOVO
import CompraErrada from './CompraErrada';   // NOVO
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [showSidebarCart, setShowSidebarCart] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCartTotal = (value) => {
    setCartTotal(prevTotal => prevTotal + value);
  };

  const addProductToCart = (product) => {
    const productPrice = parsePrice(product.price);

    const existingProduct = selectedProducts.find((p) => p.id === product.id);

    if (existingProduct) {
      const updatedProducts = selectedProducts.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setSelectedProducts(updatedProducts);
      addToCartTotal(productPrice);
    } else {
      setSelectedProducts(prevProducts => [...prevProducts, { ...product, quantity: 1 }]);
      addToCartTotal(productPrice);
    }
  };

  const updateCartQuantity = (productId, newQuantity) => {
    setSelectedProducts(prevProducts => {
      const updatedProducts = prevProducts.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
      const newTotal = updatedProducts.reduce((total, item) => {
        return total + parsePrice(item.price) * item.quantity;
      }, 0);
      setCartTotal(newTotal);
      return updatedProducts;
    });
  };

  const removeProductFromCart = (productId) => {
    const productToRemove = selectedProducts.find((p) => p.id === productId);
    if (!productToRemove) return;

    const updatedProducts = selectedProducts.filter((p) => p.id !== productId);
    setSelectedProducts(updatedProducts);

    const productPrice = parsePrice(productToRemove.price);
    addToCartTotal(-productPrice * productToRemove.quantity);
  };

  const parsePrice = (priceString) => {
    if (typeof priceString !== 'string') {
      console.warn('O preço não é uma string:', priceString);
      priceString = String(priceString);
    }
    const parsedPrice = parseFloat(priceString.replace('R$', '').replace(/\./g, '').replace(',', '.'));
    return isNaN(parsedPrice) ? 0 : parsedPrice;
  };

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/db.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erro ao carregar o JSON');
        }
        return res.json();
      })
      .then((data) => {
        if (data.products) setProducts(data.products);
      })
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <Router basename="/MercadoEletronicos">
      <div className="App">
        <Navbar selectedProducts={selectedProducts} setShowSidebarCart={setShowSidebarCart} />

        <SidebarCart
          addToCartTotal={addToCartTotal}
          removeProductFromCart={removeProductFromCart}
          cartTotal={cartTotal}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
          setShowSidebarCart={setShowSidebarCart}
          showSidebarCart={showSidebarCart}
          setCartTotal={setCartTotal}
        />

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  addToCartTotal={addToCartTotal}
                  removeProductFromCart={removeProductFromCart}
                  selectedProducts={selectedProducts}
                  addProductToCart={addProductToCart}
                  products={products}
                  setShowSidebarCart={setShowSidebarCart}
                  showSidebarCart={showSidebarCart}
                  cartTotal={cartTotal}
                />
              }
            />
            <Route path="/products" element={<ProductsPage products={products} addProductToCart={addProductToCart} />} />
            <Route
              path="/checkout"
              element={
                <FormPagamento
                  cartTotal={cartTotal}
                  selectedProducts={selectedProducts}
                  onRemoveProduct={removeProductFromCart}
                />
              }
            />
            <Route path="/compracerta" element={<CompraCerta />} />
            <Route path="/compraerrada" element={<CompraErrada />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
