import React from "react";
import "./news.css";
import SingleNews from "./SingleNews";
import NewsCard from "./NewsCard";

const News = () => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	return (
		<div className="main pt-40 portfolio_main news_main bg-[rgb(243,244,246)] w-full dark:bg-[#282828] pb-4 lg:pl-8">
			<div className=" p-3 w-max portfolio_heading dark:bg-gray-300 dark:text-black uppercase px-4 font-semibold text-xs ml-4">
				news
			</div>
			<div className="portfolio_header lg:flex">
				<h1 className="font-bold text-3xl ml-4 dark:text-white mt-4">
					Latest News
				</h1>
			</div>
			<NewsCard />
			<SingleNews setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
		</div>
	);
};

export default News;
