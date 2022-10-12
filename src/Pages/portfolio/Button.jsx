import React from "react";
import { useGlobalContext } from "../../context";
import portfolioItems from "./portfolio-items";

const Button = ({ name }) => {
	const { setItems } = useGlobalContext();
	const handleClick = (e) => {
		const newArray = portfolioItems.filter((item) => {
			if (e.target.textContent === "All") {
				return item;
			} else {
				return item.categories.includes(e.target.textContent);
			}
		});
		setItems(newArray);
	};
	return (
		<button className="hover:tracking-widest" onClick={(e) => handleClick(e)}>
			{name}
		</button>
	);
};

export default Button;
