import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";

const CartModal = forwardRef(function CartModal({ state, title, modalActions }, ref) {
	// console.log(state);
	const { items } = state.cart;
	const { handleUpdateCart } = state;
	const dialog = useRef();

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialog.current.showModal();
			},
		};
	});

	return createPortal(
		<dialog id="modal" ref={dialog}>
			<h2>{title}</h2>
			<Cart items={items} handleUpdateCart={handleUpdateCart} />
			<form method="dialog" id="modal-actions">
				{modalActions}
			</form>
		</dialog>,
		document.getElementById("modal")
	);
});

export default CartModal;
