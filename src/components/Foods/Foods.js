import React from 'react';
import './Foods.css';

const Foods = (props) => {
	// console.log(props);

	const {strMeal, strMealThumb, strCategory, strTags} = props.meal;
	return (
		<div className="meal">

			<img src={strMealThumb} alt="" />
			<h3>{strMeal}</h3>
			
			<p>
				<small>
					<strong>Category: </strong>{strCategory}
				</small>
				<br />
				<small>
					<strong>Tags: </strong>{strTags}
				</small>
			</p>

			<button
				className="btn-cart"
				onClick={() => props.handleAddToCart(strMeal)}
			>add to list</button>
		</div>
	);
};

export default Foods;