import React from "react";
import image from "../assets/me1.jpg";
import {
	BsTwitter,
	FaFacebookF,
	FaLinkedinIn,
	BsGithub,
} from "react-icons/all";

const Home = () => {
	document.title = "Porfolio | Home";
	return (
		<div className="main md:flex-1 lg:grid grid-cols-2 place-items-center bg-gray-100 ">
			<div className="grid place-items-center pt-40 lg:pt-0">
				<img src={image} alt="my_pic" className="my_image md:w-3/5" />
			</div>
			<div className="p-4 m-4 text-center lg:text-left lg:mr-20">
				<h1 className="font-bold text-4xl md:text-5xl mb-6 uppercase">
					emmanuel yeboah
				</h1>
				<p className="text-black opacity-70 ">
					Creative young developer based in Ghana, happy to collaborate and work
					with other people
				</p>
				<div className="text-lg flex justify-evenly m-4 p-8">
					<a href="https://twitter.com/Icha_sanchez">
						{" "}
						<BsTwitter />{" "}
					</a>
					<a href="www.facebook.com">
						{" "}
						<FaFacebookF />{" "}
					</a>
					<a href="https://www.linkedin.com/in/emmanuel-yeboah-583889209/">
						{" "}
						<FaLinkedinIn />{" "}
					</a>
					<a href="https://github.com/IchaCoder">
						{" "}
						<BsGithub />{" "}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
