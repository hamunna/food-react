import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Foods from '../Foods/Foods';
import './Main.css';

const Main = () => {
	const [meals, setMeals] = useState([]);
	const [cart, setCart] = useState([]);

	const handleAddToCart = meal => {
		const cartAry = [...cart, meal];
		setCart(cartAry);
	}
	
	useEffect(() => {
		fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
		// fetch('products.JSON')
			.then(res => res.json())
			.then(data => setMeals(data.meals));
	}, [])

	

	return (
		<div>
			<main>
				<div className="container">
					<div className="main-contianer">
						<div className="food-container">

							{
								meals.map(meal => <Foods
									key={meal.key}
									meal={meal}
									handleAddToCart={handleAddToCart}
								></Foods>)

							}
						</div>

						<div className="cart-container">

							<h2>Cart Container</h2>
							<ul>
							{
								cart.map(single => <li>{single}</li>)
							}
							</ul>
						</div>
					</div>
				</div>
			</main>

		</div>
	);
};

export default Main;