import React from "react";
import emptyCart from "../assets/empty_cart.svg";

const Cart = ({ cart, changeQuantity, removeFromCart }) => {
  const total = () => {
    let subtotal = 0;
    cart.forEach((item) => {
      subtotal += (+item.salePrice || +item.originalPrice) * +item.quantity;
    });
    return {
      
      tax: subtotal * 0.1,
      total: subtotal + (subtotal * 0.1),
      subtotal,
    };
  };
  return (
    <section id="cart">
      <div className="row">
        {cart.length > 0 && (
          <div className="cart-header">
            <h3 className="cart-general-title">Item</h3>
            <h3 className="cart-general-title">Quantity</h3>
            <h3 className="cart-general-title">Price</h3>
          </div>
        )}
        {cart.length === 0 && (
          <>
            <div className="cart-empty-container">
              <h1 className="empty-cart-header">Cart is currently empty!</h1>
              <figure className="empty-image-wrapper">
                <img src={emptyCart} alt="" className="empty-image" />
              </figure>
            </div>
          </>
        )}
        {cart.map((book) => {
          return (
            <div className="cart-container">
              <div className="cart-item">
                <div className="cart-item-info">
                  <figure className="cart-image-wrapper">
                    <img src={book.url} alt="" className="cart-image" />
                  </figure>
                  <div className="cart-description">
                    <p className="cart-description-title">{book.title}</p>
                    <p className="cart-description-price">
                      {book.salePrice ? (
                        <>
                          <span className="discount-decoration">
                            ${book.originalPrice}
                          </span>
                          ${book.salePrice}
                        </>
                      ) : (
                        <> ${book.originalPrice}</>
                      )}
                    </p>
                    <button
                      className="cart-button"
                      onClick={() => removeFromCart(book)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div className="cart-quantity">
                <input
                  type="number"
                  min={0}
                  max={99}
                  className="cart-input"
                  onChange={(event) => changeQuantity(book, event.target.value)}
                  value={book.quantity}
                />
              </div>
              <div className="cart-price-container">
                <p className="cart-price">
                  {book.salePrice ? (
                    <><span>${(book.salePrice * book.quantity).toFixed(2)}</span></>
                  ) : (
                    <><span>${(book.originalPrice * book.quantity).toFixed(2)}</span></>
                  )}
                </p>
              </div>
            </div>
          );
        })}
        {cart.length > 0 && (
          <div className="cart-calculation">
            <h4 className="cart-subtotal">
              <span className="cart-enhance">Subtotal:</span> $
              {total().subtotal.toFixed(2)}
            </h4>
            <h4 className="cart-tax">
              <span className="cart-enhance">Tax :</span> $
              {total().tax.toFixed(2)}
            </h4>
            <h4 className="cart-total">
              <span className="cart-enhance">Total :</span> $
              {total().total.toFixed(2)}
            </h4>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;