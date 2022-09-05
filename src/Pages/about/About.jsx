import React from "react";
import mypic from "../../assets/me1.jpg";

const About = () => {
	return (
		<div className="main md:flex-1 mb-20">
			<img
				src={mypic}
				alt="myPicture"
				className="about_img pt-32 md:pt-0 lg:p-0 "
			/>
			<section className="grid md:grid-cols-2 p-5 md:p-12 md:gap-8 gap-16 leading-loose">
				<div className="">
					<h2 className="font-bold text-xl">Emmanuel Yeboah || Sark Seven</h2>
					<p>
						Hello, I am a student and developer based in Ghana.With the grit and
						determination to make the web a better place, I make websites for
						fun. Happy to collaborate on a project with anyone.
					</p>
					<button className="bg-black text-white p-2 md:p-4 px-8 mt-10 hover:tracking-widest">
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
		</div>
	);
};

export default About;
