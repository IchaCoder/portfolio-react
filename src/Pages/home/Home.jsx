import React from "react";
import image from "../../assets/me1.jpg";
import {
	BsTwitter,
	FaFacebookF,
	FaLinkedinIn,
	BsGithub,
} from "react-icons/all";

const Home = () => {
	document.title = "Porfolio | Home";
	return (
		<div className="main lg:grid grid-cols-2 place-items-center ">
			<div className="grid place-items-center pt-40 lg:pt-0">
				<img src={image} alt="my_pic" className="my_image md:w-3/5" />
			</div>
			<div className="p-4 m-4 text-center lg:text-left lg:mr-20 lg:pt-28">
				<h1 className="font-bold text-4xl md:text-5xl mb-6 uppercase">
					emmanuel yeboah
				</h1>
				<p className="text-black opacity-70 ">
					Creative young developer based in Ghana, happy to collaborate and work
					with other people
				</p>
				<div className="text-lg flex justify-center m-4 lg:m-0 lg:p-0 lg:justify-start gap-4 lg:pt-6 p-4 mb-20">
					<a href="https://twitter.com/Icha_sanchez" className="active">
						{" "}
						<BsTwitter />{" "}
					</a>
					<a href="www.facebook.com" className="active">
						{" "}
						<FaFacebookF />{" "}
					</a>
					<a
						href="https://www.linkedin.com/in/emmanuel-yeboah-583889209/"
						className="active"
					>
						{" "}
						<FaLinkedinIn />{" "}
					</a>
					<a href="https://github.com/IchaCoder" className="active">
						{" "}
						<BsGithub />{" "}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
