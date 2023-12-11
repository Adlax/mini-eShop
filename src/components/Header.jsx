import React, { useRef } from "react";
import CartModal from "./CartModal";

const Header = ({ state }) => {
	// console.log(state);
	const { cart, handleUpdateCart } = state;

	const modal = useRef();
	const openModal = () => {
		modal.current.open();
	};

	const cartItemsNumber = cart.items.length;
	let modalActions = <button>Close</button>;
	if (cartItemsNumber > 0) {
		modalActions = (
			<>
				<button>Close</button>
				<button>Checkout</button>
			</>
		);
	}

	return (
		<>
			<CartModal state={state} ref={modal} title="Your Cart" modalActions={modalActions} />
			<header id="main-header">
				<div id="main-title">
					<img src="logo.png" alt="logo" />
					<h1>Elegant Context</h1>
				</div>
				<p>
					<button onClick={openModal}>Cart ({cartItemsNumber})</button>
				</p>
			</header>
		</>
	);
};

export default Header;
