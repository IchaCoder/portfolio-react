import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { useGlobalContext } from "../../context";

const NewsCard = () => {
	const { news, loading, getSingleNews } = useGlobalContext();

	const openSingleNews = (id) => {
		getSingleNews(id);
	};

	return (
		<div className="mt-8 max-w-[95%] mx-auto mb-24 porfolio_cards">
			{!loading ? (
				news.slice(0, 10).map((item) => {
					const { author, date, id, imageUrl, title } = item;

					return (
						<ScrollAnimation
							animateIn="custom_animate"
							className="bg-white shadow-lg single_news"
							key={id}
						>
							<div className="h-96 overflow-hidden">
								<img
									src={imageUrl}
									className="h-full w-full object-cover hover:transform hover:scale-110 news_img"
									alt={title}
									loading="lazy"
									onClick={() => openSingleNews(id)}
								/>
							</div>
							<div className="text-[#767676] pt-9 mx-8 pb-2 border-b border-solid border-[rgba(0,0,0,.15)] text-sm italic">
								By {author} | {date}
							</div>
							<h3
								className="pt-4 px-8 font-bold text-lg cursor-pointer"
								onClick={() => openSingleNews(id)}
							>
								{title}
							</h3>
							<button
								className="read_more relative ml-8 pt-6 pb-14 font-semibold text-xs read_more_span"
								onClick={() => openSingleNews(id)}
							>
								READ MORE
							</button>
						</ScrollAnimation>
					);
				})
			) : (
				<div className="text-3xl text-center">Loading...</div>
			)}
		</div>
	);
};

export default NewsCard;
