import DUMMY_PRODUCTS from "../dummy-products";
import { ADD_TO_CART, UPDATE_CART } from "./actions";

const reducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART: {
			console.log(action);
			const id = action.payload;
			const newItems = [...state.items];
			const existingItemIndex = newItems.findIndex((item) => item.id === id);
			const existingItem = newItems[existingItemIndex];
			if (existingItem) {
				const updatedItem = {
					...existingItem,
					quantity: existingItem.quantity + 1,
				};
				newItems[existingItemIndex] = updatedItem;
			} else {
				const newItem = DUMMY_PRODUCTS.find((item) => item.id === id);
				newItems.push({
					id: id,
					name: newItem.title,
					price: newItem.price,
					quantity: 1,
				});
			}
			const newState = {
				...state,
				items: newItems,
			};
			console.log(newState);
			return newState;
		}
		case UPDATE_CART: {
			console.log(action);
			const { amount, id } = action.payload;
			const newStateItems = [...state.items];
			const existingItemIndex = newStateItems.findIndex((item) => item.id === id);
			const existingItem = { ...newStateItems[existingItemIndex] };
			existingItem.quantity += amount;
			if (existingItem.amount <= 0) {
				newStateItems.splice(existingItemIndex, 1);
			} else {
				newStateItems[existingItemIndex] = existingItem;
			}
			const newState = {
				...state,
				items: newStateItems,
			};
			console.log(newState);
			return newState;
		}
		default: {
			return state;
		}
	}
};

export default reducer;
