import React, { useRef } from "react";
import CartModal from "./CartModal";
import { useCartContext } from "../store/context";

const Header = () => {
	const { items, handleUpdateCart } = useCartContext();
	console.log(items);

	const modal = useRef();
	const openModal = () => {
		modal.current.open();
	};

	const cartItemsNumber = items.length;
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
			<CartModal ref={modal} title="Your Cart" modalActions={modalActions} />
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
