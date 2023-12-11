import { createContext, useContext, useState } from "react";
import DUMMY_PRODUCTS from "../dummy-products";

const initContext = {
	items: [],
};

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
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

	// const state = { cart, handleAddToCart, handleUpdateCart };

	const state = {
		items: cart.items,
		handleAddToCart,
		handleUpdateCart,
	};

	return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
