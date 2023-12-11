import React, { useState } from "react";
import Header from "./components/Header";
import Shop from "./components/Shop";
import DUMMY_PRODUCTS from "./dummy-products";
import Product from "./components/Product";

const App = () => {
	const [cart, setCart] = useState({
		items: [],
	});

	const handleAddToCart = (id) => {
		setCart((oldState) => {
			const newState = [...oldState.items];
			const existingItemIndex = newState.findIndex((item) => item.id === id);
			const existingItem = newState[existingItemIndex];
			if (existingItem) {
				const updatedItem = {
					...existingItem,
					quantity: existingItem.quantity + 1,
				};
				newState[existingItemIndex] = updatedItem;
			} else {
				const newItem = DUMMY_PRODUCTS.find((item) => item.id === id);
				newState.push({
					id: id,
					name: newItem.title,
					price: newItem.price,
					quantity: 1,
				});
			}
			return {
				items: newState,
			};
		});
	};

	const handleUpdateCart = (id, amount) => {
		setCart((oldState) => {
			const newState = [...oldState.items];
			const existingItemIndex = newState.findIndex((item) => item.id === id);
			const existingItem = { ...newState[existingItemIndex] };
			existingItem.quantity += amount;

			if (existingItem.amount <= 0) {
				newState.splice(existingItemIndex, 1);
			} else {
				newState[existingItemIndex] = existingItem;
			}

			return {
				items: newState,
			};
		});
	};

	const state = { cart, handleAddToCart, handleUpdateCart };

	return (
		<>
			<Header state={state} />
			<Shop>
				{DUMMY_PRODUCTS.map((product) => {
					// console.log(product);
					return (
						<li key={product.id}>
							<Product {...product} handleAddToCart={handleAddToCart} />
						</li>
					);
				})}
			</Shop>
		</>
	);
};

export default App;
