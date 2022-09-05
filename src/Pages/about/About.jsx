import React from "react";
import mypic from "../../assets/me1.jpg";
import Modal from "../../component/about/Modal";
import { useGlobalContext } from "../../context";

const About = () => {
	const { setIsModalOpen } = useGlobalContext();
	return (
		<div className="main md:flex-1 mb-20">
			<img
				src={mypic}
				alt="myPicture"
				className="about_img pt-32 md:pt-0 lg:p-0 "
			/>
			<h2 className="font-bold text-xl pl-5 md:pl-12 pt-8">
				Emmanuel Yeboah || Sark Seven
			</h2>
			<section className="grid md:grid-cols-2 p-5 md:p-12 md:pt-5 md:gap-8 gap-16 leading-loose">
				<div className="">
					<p>
						Hello, I am a student and developer based in Ghana.With the grit and
						determination to make the web a better place, I make websites for
						fun. Happy to collaborate on a project with anyone.
					</p>
					<button
						className="bg-black text-white p-2 md:p-4 px-8 mt-10 hover:tracking-widest"
						onClick={() => setIsModalOpen(true)}
					>
						Read More
					</button>
				</div>
				<div>
					<div className="opacity-70">
						<span className="font-semibold opacity-100 mr">Born:</span> 2000
					</div>
					<div className="opacity-70">
						<span className="font-semibold opacity-100">Address:</span> Kumasi
					</div>
					<div className="opacity-70">
						<span className="font-semibold opacity-100">Email:</span>{" "}
						<a href="mailto:ichabordyeboah247@gmail.com">
							ichabordyeboah247@gmail.com
						</a>
					</div>
					<div className="opacity-70">
						<span className="font-semibold opacity-100">Phone:</span>{" "}
						<a href="tel:+233555543385">+233 555543385</a>
					</div>
					<div className="opacity-70">
						<span className="font-semibold opacity-100">Study:</span> University
						of Ghana
					</div>
				</div>
			</section>
			<Modal />
		</div>
	);
};

export default About;
