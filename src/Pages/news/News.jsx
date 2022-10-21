import React from "react";
import "./news.css";
import SingleNews from "./SingleNews";
import NewsCard from "./NewsCard";

const News = () => {
	const [isModalOpen, setIsModalOpen] = React.useState(false);

	return (
		<div className="main portfolio_main news_main lg:pl-8">
			<div className="mt-40 p-3 w-max portfolio_heading uppercase px-4 font-semibold text-xs ml-4">
				news
			</div>
			<div className="portfolio_header lg:flex">
				<h1 className="font-bold text-3xl ml-4 mt-4">Latest News</h1>
			</div>
			<NewsCard />

			<SingleNews setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
		</div>
	);
};

export default News;
