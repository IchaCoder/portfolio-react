import React from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/all";
import {
	BsTwitter,
	FaFacebookF,
	FaLinkedinIn,
	BsGithub,
} from "react-icons/all";
import { useGlobalContext } from "../../context";

const variants = {
	visible: {
		opacity: 1,
		x: 0,
	},
	hidden: { opacity: 0, x: 200 },
};

const navVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 0,
		transition: {
			duration: 1,
			type: "spring",
		},
	},
};

const SingleNews = () => {
	const { singleNews, openSingleNews, setOpenSingleNews } = useGlobalContext();
	const { author, content, date, imageUrl, title, url } = singleNews;
	const handleCloseModal = (e) => {
		const targetClass = e.target.classList;
		if (targetClass.contains("fixed")) {
			setOpenSingleNews(false);
		}
	};

	return (
		<>
			{openSingleNews && (
				<motion.section
					initial="hidden"
					animate="visible"
					variants={variants}
					className={`fixed w-full h-full z-50 top-0 modal left-0 grid place-items-center `}
					onClick={handleCloseModal}
				>
					<div
						className=" bg-white rounded-lg w-11/12 md:w-4/5  relative text-black"
						initial="hidden"
						animate="visible"
						variants={navVariants}
					>
						<div className="flex absolute right-0 border-2 -top-10 border-solid border-white rounded-full">
							<IoMdClose
								className="text-3xl cursor-pointer text-white"
								onClick={() => setOpenSingleNews(false)}
							/>
						</div>
						<div className="newborder max-h-[500px] w-full p-6 md:p-14 overflow-y-scroll">
							<div>
								<img src={imageUrl} alt="image" />
							</div>
							<div className="text-[#767676] uppercase pt-10 pb-2 border-b border-solid border-[rgba(0,0,0,.15)] text-sm italic">
								By {author} | {date}
							</div>
							<h3 className="pt-6 font-bold text-xl cursor-pointer">{title}</h3>
							<p className="py-12">{content}</p>
							<div className="flex gap-4 pb-8">
								<span className="font-semibold">Share:</span>
								<span className="text-lg flex justify-center gap-4 pt-1">
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
								</span>
							</div>
						</div>
					</div>
				</motion.section>
			)}
		</>
	);
};

export default SingleNews;
