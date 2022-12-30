import React from "react";
import Button from "./Button";
import portfolio_data from "./data";
import PortfolioCards from "./PortfolioCards";

const Portfolio = () => {
	return (
		<div className="main pt-40 dark:bg-[#282828] bg-[rgb(243,244,246)] portfolio_main lg:pl-8 pb-4">
			<div className="p-3 w-max portfolio_heading uppercase px-4 font-semibold text-xs ml-4 dark:text-black dark:bg-gray-300">
				Porfolio
			</div>
			<div className="portfolio_header lg:flex dark:text-white">
				<h1 className="font-bold text-3xl ml-4 mt-4">Creative Portfolio</h1>
				<div className="mt-16 md:mt-0 ml-4 flex justify-between flex-wrap gap-2 mr-4 md:justify-end md:gap-8 lg:pl-32 lg:items-end mb-1">
					{portfolio_data.map((item, index) => {
						return <Button name={item} key={index} />;
					})}
				</div>
			</div>
			<PortfolioCards />
		</div>
	);
};

export default Portfolio;
