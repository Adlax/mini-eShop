import React from "react";
import { useCartContext } from "../store/context";

const Product = ({ id, image, title, price, description }) => {
	const { addToCartAC } = useCartContext();
	return (
		<article className="product">
			<img src={image} alt="image" />
			<div className="product-content">
				<div>
					<h3>{title}</h3>
					<p className="product-price">${price}</p>
					<p>description</p>
				</div>
				<p className="product-actions">
					<button onClick={() => addToCartAC(id)}>Add to Cart</button>
				</p>
			</div>
		</article>
	);
};

export default Product;
