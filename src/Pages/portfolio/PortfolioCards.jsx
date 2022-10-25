import React from "react";
import { BsGithub, HiLink } from "react-icons/all";
import { useGlobalContext } from "../../context";
import Fade from "react-reveal/Fade";

const PortfolioCards = () => {
	const { items } = useGlobalContext();
	return (
		<div className="mt-8 max-w-[95%] mx-auto mb-24 porfolio_cards">
			{items.map((item, index) => {
				const { name, categories, img, link, github } = item;
				return (
					<Fade left>
						<div className="bg-white shadow-lg" key={index} duration={2}>
							<div className="h-96 ">
								<img
									src={img}
									className="h-full w-full object-cover"
									alt={name}
									loading="lazy"
								/>
							</div>
							<h2 className="mt-6 font-semibold text-center">{name}</h2>
							<div className="flex flex-col md:flex-row justify-between mt-4">
								<a
									href={link}
									className="active flex w-max p-2 mx-auto hover:bg-black hover:text-white"
									target="_blank"
								>
									<HiLink className="mr-2 mt-1" /> View Site{" "}
								</a>
								<a
									href={github}
									className="active flex w-max p-2  mx-auto hover:bg-black hover:text-white"
									target="_blank"
								>
									<BsGithub className="mr-2 mt-1" /> Github Link{" "}
								</a>
							</div>
							<div className="mt-6">
								<div className="text-center font-semibold pb-4 flex justify-center gap-5 mb-8">
									{categories.map((category, index) => {
										return <div key={index}>{category}</div>;
									})}
								</div>
							</div>
						</div>
					</Fade>
				);
			})}
		</div>
	);
};

export default PortfolioCards;
