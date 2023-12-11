import { createContext, useContext, useReducer } from "react";
import reducer from "./reduder";
import { ADD_TO_CART, UPDATE_CART } from "./actions";

const initContext = {
	items: [],
	handleAddToCart: () => {},
	handleUpdateCart: () => {},
};

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [store, dispatch] = useReducer(reducer, initContext);

	const addToCartAC = (id) => {
		dispatch({
			type: ADD_TO_CART,
			payload: id,
		});
	};

	const updateToCartAC = (id, amount) => {
		dispatch({
			type: UPDATE_CART,
			payload: { id, amount },
		});
	};

	const state = {
		items: store.items,
		addToCartAC,
		updateToCartAC,
	};

	return <CartContext.Provider value={state}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);
