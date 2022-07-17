import React from "react";
import image from "../assets/me1.jpg";

const Home = () => {
	document.title = "Porfolio | Home";
	return (
		<div className="main md:flex-1 lg:grid grid-cols-2 place-items-center bg-gray-100 lg:pt-32">
			<div className="grid place-items-center pt-40 lg:pt-0">
				<img src={image} alt="my_pic" className="my_image md:w-3/5" />
			</div>
			<div className="p-4 m-4 text-center lg:text-left">
				<h1 className="font-bold text-4xl md:text-5xl mb-6 uppercase">
					emmanuel yeboah
				</h1>
				<p className="text-black opacity-70">
					Creative young developer based in Ghana, happy to <br /> collaborate
					and work with other people
				</p>
			</div>
		</div>
	);
};

export default Home;
