import { useState } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import './App.css';
import waffleImage from './assets/images/image-waffle-desktop.jpg';
import tiramisuImage from './assets/images/image-tiramisu-desktop.jpg';
import pannaCottaImage from './assets/images/image-panna-cotta-desktop.jpg';
import meringueImage from './assets/images/image-meringue-desktop.jpg';
import macaronImage from './assets/images/image-macaron-desktop.jpg';
import cremeBruleeImage from './assets/images/image-creme-brulee-desktop.jpg';
import cakeImage from './assets/images/image-cake-desktop.jpg';
import brownieImage from './assets/images/image-brownie-desktop.jpg';
import baklavaImage from './assets/images/image-baklava-desktop.jpg';
import CartInfo from './components/CartInfo';

function App() {
	const [cartItems, setCartItems] = useState([]); // state for cart items

	// Function to add items to cart
	const handleAddToCart = (item) => {
		setCartItems((prevItems) => {
			const existingItem = prevItems.find((i) => i.id === item.id);

			if (existingItem) {
				if (item.quantity === 0) {
					return prevItems.filter((i) => i.id !== item.id);
				}
				return prevItems.map((i) =>
					i.id === item.id ? { ...i, quantity: item.quantity, updatedPrice: item.updatedPrice } : i
				);
			}
			// add a new item if it doesnt exist
			return [...prevItems, { ...item, updatedPrice: item.wafflePrice * item.quantity }];
		});
	};

	// function to manage cart ite removal
	const handleRemoveFromCart = (id) => {
		setCartItems((prevItems) => {
			// resets the count for the removed item
			resetCartItem(id);
			// Removes the item from the cart list
			return prevItems.filter((item) => item.id !== id);
		});
  };

		//function thats maps through individual items
		const resetCartItem = (id) => {
			if (itemResetFunctions[id]) {
				itemResetFunctions[id](); // calls the rest function for the specific item
			}
		};

		//store reset functions
		const itemResetFunctions = {};

	return (
		<main>
			<div>
				<Header />
				<div className="cartList">
					{/* first cart */}
					<Cart
						id={1}
						imageSrc={waffleImage}
						altText="Waffles with berries"
						waffleSpan="Waffle"
						waffleText="Waffles with berries"
						wafflePrice={(6.5).toFixed(2)}
						handleAddToCart={handleAddToCart}
						registerResetFunction={(id, resetFunction) => {
							itemResetFunctions[id] = resetFunction;
						}}
					/>

					{/* second cart */}
					<Cart
						id={2}
						imageSrc={cremeBruleeImage}
						altText="Crémé Brúlee"
						waffleSpan="Créme Brúlée"
						waffleText="Vanilla Bean Créme Brúlée"
						wafflePrice={(7.0).toFixed(2)}
						handleAddToCart={handleAddToCart}
            registerResetFunction={(id, resetFunction) => {
							itemResetFunctions[id] = resetFunction;
						}}
					/>

					{/* Third cart */}
					<Cart
						id={3}
						imageSrc={macaronImage}
						altText="macaron"
						waffleSpan="Macaron"
						waffleText="Macaron Mix of Five"
						wafflePrice={(8.0).toFixed(2)}
						handleAddToCart={handleAddToCart}
            registerResetFunction={(id, resetFunction) => {
							itemResetFunctions[id] = resetFunction;
						}}
					/>

					{/* Fourth cart */}
					<Cart
						id={4}
						imageSrc={tiramisuImage}
						altText="Tiramisu"
						waffleSpan="Tiramisu"
						waffleText="Classic Tiramisu"
						wafflePrice={(5.5).toFixed(2)}
						handleAddToCart={handleAddToCart}
            registerResetFunction={(id, resetFunction) => {
							itemResetFunctions[id] = resetFunction;
						}}
					/>

					{/* Fifth cart */}
					<Cart
						id={5}
						imageSrc={baklavaImage}
						altText="baklava"
						waffleSpan="Baklava"
						waffleText="Pistachio Baklava"
						wafflePrice={(4.0).toFixed(2)}
						handleAddToCart={handleAddToCart}
            registerResetFunction={(id, resetFunction) => {
							itemResetFunctions[id] = resetFunction;
						}}
					/>

					{/* Sixth cart */}
					<Cart
						id={6}
						imageSrc={meringueImage}
						altText="Pie"
						waffleSpan="Pie"
						waffleText="Lemon Meringue Pie"
						wafflePrice={(5.0).toFixed(2)}
						handleAddToCart={handleAddToCart}
            registerResetFunction={(id, resetFunction) => {
							itemResetFunctions[id] = resetFunction;
						}}
					/>

					{/* Seventh cart */}
					<Cart
						id={7}
						imageSrc={cakeImage}
						altText="cake"
						waffleSpan="Cake"
						waffleText="Red Velvet Cake"
						wafflePrice={(4.5).toFixed(2)}
						handleAddToCart={handleAddToCart}
            registerResetFunction={(id, resetFunction) => {
							itemResetFunctions[id] = resetFunction;
						}}
					/>

					{/* Eight cart */}
					<Cart
						id={8}
						imageSrc={brownieImage}
						altText="brownie"
						waffleSpan="Brownie"
						waffleText="Salted Caramel Brownie"
						wafflePrice={(5.5).toFixed(2)}
						handleAddToCart={handleAddToCart}
            registerResetFunction={(id, resetFunction) => {
							itemResetFunctions[id] = resetFunction;
						}}
					/>

					{/* Nineth cart */}
					<Cart
						id={9}
						imageSrc={pannaCottaImage}
						altText="Panna cotta"
						waffleSpan="Panna Cotta"
						waffleText="Vanilla Panna Cotta"
						wafflePrice={(6.5).toFixed(2)}
						handleAddToCart={handleAddToCart}
            registerResetFunction={(id, resetFunction) => {
							itemResetFunctions[id] = resetFunction;
						}}
					/>
				</div>
			</div>
			<CartInfo
				cartItems={cartItems}
				handleRemoveFromCart={handleRemoveFromCart}
				setCartItems={setCartItems}
			/>
		</main>
	);
}

export default App;
