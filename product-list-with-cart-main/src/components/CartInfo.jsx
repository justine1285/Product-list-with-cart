import React, { useState } from 'react';
import EmptyCart from '/src/assets/images/illustration-empty-cart.svg';
import carbonNeutral from '/src/assets/images/icon-carbon-neutral.svg'
import confirmIcon from '/src/assets/images/icon-order-confirmed.svg'
import styles from './CartInfo.module.css';

const CartInfo = ({ cartItems, handleRemoveFromCart, setCartItems }) => {
  // state to toggle overlay visibility
  const [makeOverlayVisible, setMakeOverlayVisible] = useState(false);

  //calculate total order amount
  const totalOrderAmount = cartItems.reduce(
    (total, item) => total + parseFloat(item.updatedPrice || 0), // sums up the updated price value
    0
  ).toFixed(2); // ensures its in decimal format

  const handleConfirmOrder = () => {
    setMakeOverlayVisible(true); //shows overlay
  };

  const closeOverlay = () => {
    setCartItems([]);
    setMakeOverlayVisible(false);
  }
  return (
    <main className={styles.cartInfoContainer}>
        <header className={styles.cartInfoHeader}>Your Cart ({cartItems.length})</header>
        {cartItems.length === 0 ? (
          <>
            <img src={EmptyCart} alt="illustration of empty cart" />
            <p className={styles.cartInfoText}>Your added items will appear here</p>
          </>
        ) : (
          <ul className={styles.cartItemList}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.cartItem}>
              <div>
                <span className={styles.itemName}>{item.waffleText}</span><br />
                <span className={styles.itemQuantity}> {item.quantity}x
                  <span className={styles.itemPrice}> 
                    @${item.wafflePrice}  
                  </span>
                  <span className={styles.updatedPrice}>
                    ${item.updatedPrice}
                  </span>
                </span>
              </div>
              <div>
              <button className={styles.deleteButton} onClick={() => handleRemoveFromCart(item.id)}>x</button>
              </div>
            </li>
            ))}
            <>
              <div className={styles.totalOrder}>
                <p className={styles.total}>Order Total</p>
                <span className={styles.totalAmount}>${totalOrderAmount}</span>
              </div>

              <div className={styles.carbonContainer}><img src={carbonNeutral} alt="icon" /> This is a <span className={styles.carbonText}>carbon-neutral</span> delivery</div>

              <button className={styles.confirmOrderButton}
              onClick={handleConfirmOrder}
              >Confirm Order</button>
            </>
          </ul>
        )}
        {makeOverlayVisible && (
          <div className={styles.overlayContainer}>
            <div className={styles.overlayContent}>
              <img  src={confirmIcon} alt="confirm icon" className={styles.iconImage} />
              <header>Order Confirmed</header>
              <p>We hope you enjoy your food!</p>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                      <img src={item.imageSrc} alt={item.waffleText} />
                      <div>
                        <span className={styles.itemName}>{item.waffleText}</span><br />
                        <span className={styles.itemQuantity}> {item.quantity}x </span>
                        <span className={styles.itemPrice}> 
                        @${item.wafflePrice}  
                      </span>
                      </div>
                    <span className={styles.updatedPrice}>
                      ${item.updatedPrice}
                    </span>
                  </li>
                ))}
              </ul>
                <div className={styles.totalOrder}>
                  <p className={styles.total}>Order Total</p>
                  <span className={styles.totalAmount}>${totalOrderAmount}</span>
                </div>
                <button className={styles.confirmOrderButton}
              onClick={closeOverlay}
              >Start New Order</button>
            </div>
          </div>
        )}
    </main>
  );
};

export default CartInfo
 