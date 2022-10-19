import React from "react";
import img from "../../assets/me1.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import "./news.css";
import SingleNews from "./SingleNews";

const News = () => {
	const [isModalOpen, setIsModalOpen] = React.useState(true);
	return (
		<div className="main portfolio_main news_main lg:pl-8">
			<div className="mt-40 p-3 w-max portfolio_heading uppercase px-4 font-semibold text-xs ml-4">
				news
			</div>
			<div className="portfolio_header lg:flex">
				<h1 className="font-bold text-3xl ml-4 mt-4">Latest News</h1>
			</div>

			<div className="mt-8 max-w-[95%] mx-auto mb-24 porfolio_cards">
				<ScrollAnimation
					animateIn="custom_animate"
					className="bg-white shadow-lg single_news"
				>
					<div className="h-96 overflow-hidden">
						<img
							src={img}
							className="h-full w-full object-cover hover:transform hover:scale-110 news_img"
							alt="pic"
							loading="lazy"
						/>
					</div>
					<div className="text-[#767676] pt-9 mx-8 pb-2 border-b border-solid border-[rgba(0,0,0,.15)] text-sm italic">
						By Emmanuel Yeboah | 05 April 2021
					</div>
					<h3 className="pt-4 px-8 font-bold text-lg cursor-pointer">
						Microsoft release a new tool that enables direct video hosting blah
						blah
					</h3>
					<button className="read_more relative ml-8 pt-6 pb-14 font-semibold text-xs read_more_span">
						READ MORE
					</button>
				</ScrollAnimation>
				<div className="bg-white shadow-lg single_news">
					<div className="h-96 overflow-hidden">
						<img
							src={img}
							className="h-full w-full object-cover hover:transform hover:scale-110 news_img"
							alt="pic"
							loading="lazy"
						/>
					</div>
					<div className="text-[#767676] pt-9 mx-8 pb-2 border-b border-solid border-[rgba(0,0,0,.15)] text-sm">
						By Emmanuel Yeboah | 05 April 2021
					</div>
					<h3 className="pt-4 px-8 font-bold text-lg cursor-pointer">
						Microsoft release a new tool that enables direct video hosting blah
						blah
					</h3>
					<button className="read_more relative ml-8 pt-6 pb-14 font-semibold text-xs read_more_span">
						READ MORE
					</button>
				</div>
				<div className="bg-white shadow-lg single_news">
					<div className="h-96 ">
						<img
							src={img}
							className="h-full w-full object-cover hover:transform hover:scale-110 news_img"
							alt="pic"
							loading="lazy"
						/>
					</div>
					<div className="text-[#767676] pt-9 mx-8 pb-2 border-b border-solid border-[rgba(0,0,0,.15)] text-sm">
						By Emmanuel Yeboah | 05 April 2021
					</div>
					<h3 className="pt-4 px-8 font-bold text-lg cursor-pointer">
						Microsoft release a new tool that enables direct video hosting blah
						blah
					</h3>
					<button className="read_more relative ml-8 pt-6 pb-14 font-semibold text-xs read_more_span">
						READ MORE
					</button>
				</div>
			</div>
			<SingleNews setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
		</div>
	);
};

export default News;
