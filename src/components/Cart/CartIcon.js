import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import './CartIcon.css';

const CartIcon = () => {
  const { getTotalItems, setIsCartOpen, isScrolled } = useCart();
  const totalItems = getTotalItems();

  return (
    <button
      className={`cart-icon-btn ${isScrolled ? 'scrolled' : ''}`}
      onClick={() => setIsCartOpen(true)}
      aria-label="عرض سلة التسوق"
    >
      <FaShoppingCart className="cart-icon" />
      {totalItems > 0 && (
        <span className="cart-badge">{totalItems}</span>
      )}
    </button>
  );
};

export default CartIcon;

