import React from "react";
import DUMMY_PRODUCTS from "../dummy-products";
import Product from "./Product";

const Shop = () => {
	return (
		<section id="shop">
			<h2>Elegant Clothing For Everyone</h2>
			<ul id="products">
				{DUMMY_PRODUCTS.map((product) => {
					// console.log(product);
					return (
						<li key={product.id}>
							<Product {...product} />
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Shop;
