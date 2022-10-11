import React from "react";
import Button from "./Button";
import portfolio_data from "./data";

const Portfolio = () => {
	return (
		<div className="main portfolio_main lg:pl-8">
			<div className="mt-40 p-3 w-max portfolio_heading uppercase px-4 font-semibold text-xs ml-4">
				Porfolio
			</div>
			<div className="portfolio_header lg:flex">
				<h1 className="font-bold text-3xl ml-4 mt-4">Creative Portfolio</h1>
				<div className="mt-16 md:mt-0 ml-4 flex justify-between flex-wrap gap-2 mr-4 md:justify-end md:gap-8 lg:pl-32 lg:items-end mb-1">
					{portfolio_data.map((item, index) => {
						return <Button name={item} key={index} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
