import { useState } from 'react';
import { useEffect } from 'react';
import addToCartImage from '/src/assets/images/icon-add-to-cart.svg';
import styles from './Cart.module.css';

const Cart = ({
	id,
	imageSrc,
	altText,
	waffleSpan,
	waffleText,
	wafflePrice,
	handleAddToCart,
	registerResetFunction,
}) => {
	const [isClickCart, setIsClickCart] = useState(false); // Tracks whether the "Add to Cart" button has been clicked

	const [itemCount, setItemCount] = useState(1); // tracks the item count

	const addToCart = () => {
		setIsClickCart(true); // switches to counter view
		handleAddToCart({
			id,
			waffleSpan,
			waffleText,
			wafflePrice,
			imageSrc,
			quantity: itemCount,
		});
	};

	const handleIncrease = () => {
		const newCount = itemCount + 1;
		setItemCount(newCount); //increases item count
		const updatedPrice = (wafflePrice * newCount).toFixed(2); // calculates the new total price
		handleAddToCart({
			id,
			waffleSpan,
			waffleText,
			wafflePrice,
			updatedPrice,
			quantity: newCount,
		});
	};

	const handleDecrease = () => {
		const newCount = itemCount - 1;
		if (newCount <= 0) {
			setIsClickCart(false);
			handleAddToCart({ id, waffleSpan, waffleText, wafflePrice, updatedPrice: (0).toFixed(2), quantity: 0 });
		} else {
			setItemCount(newCount);
			const updatedPrice = (wafflePrice * newCount).toFixed(2);
			handleAddToCart({
				id,
				waffleSpan,
				waffleText,
				wafflePrice,
				updatedPrice,
				quantity: newCount,
			});
		}
	};

	const resetItem = () => {
		setItemCount(1); // reset count to 1
		setIsClickCart(false); // Reset to "Add to cart" button view
	};

	useEffect(() => {
		registerResetFunction(id, resetItem);
	}, [id, registerResetFunction]);

	return (
		<main className={styles.cartContainer}>
			<img src={imageSrc} alt={altText} className={styles.cartImage} />
			<div className={styles.overlay}>
				{isClickCart ? (
					<div className={styles.counterContainer}>
						<button className={styles.counterButton} onClick={handleDecrease}>
							-
						</button>
						<span className={styles.number}>{itemCount}</span>
						<button className={styles.counterButton} onClick={handleIncrease}>
							+
						</button>
					</div>
				) : (
					<button className={styles.cartButton} onClick={addToCart}>
						<img src={addToCartImage} alt="Add to cart icon" />
						Add to cart
					</button>
				)}
			</div>
			<div className={styles.textContainer}>
				<span className={styles.waffleSpan}>{waffleSpan}</span>
				<h4 className={styles.waffleText}>{waffleText}</h4>
				<p className={styles.wafflePrice}>${wafflePrice}</p>
			</div>
		</main>
	);
};

export default Cart;
