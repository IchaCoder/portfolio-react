import React from "react";
import image from "../../assets/me1.jpg";
import {
	BsTwitter,
	FaFacebookF,
	FaLinkedinIn,
	BsGithub,
} from "react-icons/all";
import { motion } from "framer-motion";

const Home = () => {
	document.title = "Porfolio | Home";

	const container = {
		hidden: { opacity: 0, x: -50 },
		show: {
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.5,
				type: "spring",
				stiffness: "200",
			},
		},
	};

	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className="dark:bg-[#282828] h-screen grid lg:place-items-center lg:grid-cols-2 main"
		>
			<div className="pt-40 lg:pt-0 lg:mb-32 grid lg:block place-items-center">
				<img src={image} alt="Emmanuel Yeboah" className="my_image md:w-3/5" />
			</div>
			<div className="p-4 m-4 text-center lg:text-left lg:mr-20 lg:mb-20">
				<h1 className="font-bold text-4xl md:text-5xl mb-6 uppercase dark:text-white">
					emmanuel yeboah
				</h1>
				<p className="text-black opacity-70 dark:text-gray-300">
					Creative young developer based in Ghana, happy to collaborate and work
					with other people
				</p>
				<div className="text-lg flex justify-center m-4 dark:text-white lg:m-0 lg:p-0 lg:justify-start gap-4 lg:pt-6 p-4 mb-20">
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
		</motion.div>
	);
};

export default Home;
