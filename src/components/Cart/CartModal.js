import React from 'react';
import { FaTimes, FaPlus, FaMinus, FaTrash, FaShoppingCart, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';
import './CartModal.css';

const CartModal = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ar-EG', {
      style: 'currency',
      currency: 'EGP',
    }).format(price);
  };

  const generateWhatsAppMessage = () => {
    const phoneNumber = '201050894112';
    let message = 'مرحباً، أريد طلب المنتجات التالية:\n\n';
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   الكمية: ${item.quantity}\n`;
      if (item.description) {
        message += `   الوصف: ${item.description}\n`;
      }
      if (item.price && item.price > 0) {
        message += `   السعر: ${formatPrice(item.price)} × ${item.quantity} = ${formatPrice(item.price * item.quantity)}\n`;
      }
      message += `   الصورة: ${window.location.origin}${item.image}\n\n`;
    });

    message += `\nإجمالي عدد القطع: ${cartItems.reduce((total, item) => total + item.quantity, 0)}\n`;
    if (getTotalPrice() > 0) {
      message += `الإجمالي: ${formatPrice(getTotalPrice())}\n`;
    }
    
    message += '\nشكراً لكم!';
    
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const handleWhatsAppOrder = () => {
    const whatsappUrl = generateWhatsAppMessage();
    window.open(whatsappUrl, '_blank');
  };

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      <div className="cart-modal">
        <div className="cart-header">
          <h2 className="cart-title">سلة التسوق</h2>
          <button
            className="cart-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="إغلاق السلة"
          >
            <FaTimes />
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <FaShoppingCart className="cart-empty-icon" />
              <p className="cart-empty-text">سلة التسوق فارغة</p>
              <button
                className="btn btn-primary"
                onClick={() => setIsCartOpen(false)}
              >
                متابعة التسوق
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-item-details">
                      <h3 className="cart-item-name">{item.name}</h3>
                      {item.description && (
                        <p className="cart-item-description">{item.description}</p>
                      )}
                      <div className="cart-item-price">
                        {item.price ? formatPrice(item.price) : 'اتصل للاستفسار'}
                      </div>
                    </div>
                    <div className="cart-item-controls">
                      <div className="quantity-controls">
                        <button
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="تقليل الكمية"
                        >
                          <FaMinus />
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="زيادة الكمية"
                        >
                          <FaPlus />
                        </button>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="حذف المنتج"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                <div className="cart-total">
                  <span className="cart-total-label">الإجمالي:</span>
                  <span className="cart-total-price">
                    {getTotalPrice() > 0
                      ? formatPrice(getTotalPrice())
                      : 'اتصل للاستفسار'}
                  </span>
                </div>
                <div className="cart-actions">
                  <button
                    className="btn btn-outline"
                    onClick={clearCart}
                  >
                    مسح السلة
                  </button>
                  <button
                    className="btn btn-whatsapp"
                    onClick={handleWhatsAppOrder}
                  >
                    <FaWhatsapp />
                    طلب عبر واتساب
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;

