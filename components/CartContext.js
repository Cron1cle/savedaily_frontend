import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);
  const [showToast, setShowToast] = useState(false);
  

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, {...item, quantity: 1}]);
  };

  const removeFromCart = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  const incrementQuantity = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = (newCartItems[index].quantity || 1) + 1;
    setCartItems(newCartItems);
  };

  const decrementQuantity = (index) => {
    const newCartItems = [...cartItems];
  
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    } else {
      setCartItems(cartItems.filter((_, i) => i !== index));
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const addRecentlyViewedProduct = (product) => {
    setRecentlyViewedProducts((prevProducts) => {
      const exists = prevProducts.some(item => item.productId === product.productId);
      if (!exists) {
        return [product, ...prevProducts].slice(0, 5); 
      }
      return prevProducts;
    });
  };

  return (
    <CartContext.Provider value={{ counter, incrementCounter, cartItems, addToCart, removeFromCart, incrementQuantity,decrementQuantity, clearCart, recentlyViewedProducts, addRecentlyViewedProduct, showToast, setShowToast }}>
      {children}
    </CartContext.Provider>
  );
};