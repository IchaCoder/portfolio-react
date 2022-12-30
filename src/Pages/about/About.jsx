import React from "react";
import mypic from "../../assets/me1.jpg";
import Modal from "../../component/about/Modal";
import { useGlobalContext } from "../../context";
import { motion } from "framer-motion";

const About = () => {
	const { setIsModalOpen } = useGlobalContext();

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
			className="main h-max pb-20 dark:bg-[#282828] bg-[rgb(243,244,246)]"
		>
			<img
				src={mypic}
				alt="Emmanuel Yeboah"
				className="about_img pt-32 md:pt-20 lg:p-0"
			/>
			<h2 className="font-bold dark:text-white text-xl pl-5 md:pl-12 pt-8">
				Emmanuel Yeboah || Sark Seven
			</h2>
			<section className="grid md:grid-cols-2 p-5 md:p-12 md:pt-5 md:gap-8 gap-16 leading-loose">
				<div className="dark:text-gray-300">
					<p>
						Hello, I am a student and developer based in Ghana. With the grit
						and determination to make the web a better place, I make websites
						for fun. Happy to collaborate on a project with anyone.
					</p>
					<button
						className="bg-black dark:bg-white dark:text-black text-white p-2 md:p-4 px-8 mt-10 hover:tracking-widest"
						onClick={() => setIsModalOpen(true)}
					>
						Read More
					</button>
				</div>
				<div className="dark:text-gray-200">
					<div className="opacity-70">
						<span className="font-semibold opacity-100 mr dark:text-white">
							Born:
						</span>{" "}
						2000
					</div>
					<div className="opacity-70">
						<span className="font-semibold opacity-100 dark:text-white">
							Address:
						</span>{" "}
						Kumasi
					</div>
					<div className="opacity-70">
						<span className="font-semibold opacity-100 dark:text-white">
							Email:
						</span>{" "}
						<a href="mailto:ichabordyeboah247@gmail.com">
							ichabordyeboah247@gmail.com
						</a>
					</div>
					<div className="opacity-70">
						<span className="font-semibold opacity-100 dark:text-white">
							Phone:
						</span>{" "}
						<a href="tel:+233555543385">+233 555543385</a>
					</div>
					<div className="opacity-70">
						<span className="font-semibold opacity-100 dark:text-white">
							Study:
						</span>{" "}
						University of Ghana
					</div>
				</div>
			</section>
			<Modal />
		</motion.div>
	);
};

export default About;
