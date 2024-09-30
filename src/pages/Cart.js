import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

function Cart() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      const parsedCart = JSON.parse(cartData);
      setCart(parsedCart);

      // Calculate total price
      const ticketPrices = {
        box: 300.00,
        orchestra: 200.00,
        mainFloor: 150.00,
        balcony: 100.00
      };
      
      const total = (parsedCart.box * ticketPrices.box) +
                    (parsedCart.orchestra * ticketPrices.orchestra) +
                    (parsedCart.mainFloor * ticketPrices.mainFloor) +
                    (parsedCart.balcony * ticketPrices.balcony);
      
      setTotalPrice(total);
    }
  }, []);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart ? (
        <div>
          <p>Box Tickets: {cart.box}</p>
          <p>Orchestra Tickets: {cart.orchestra}</p>
          <p>Main Floor Tickets: {cart.mainFloor}</p>
          <p>Balcony Tickets: {cart.balcony}</p>
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
          <button onClick={() => alert('Purchase functionality not implemented.')}>Purchase</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
