/** @format */

import React from "react";
import { Outlet } from "react-router";
import { useGlobalContext } from "../context";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import {
	IoHome,
	GoBriefcase,
	BsPersonFill,
	IoNewspaperSharp,
	HiMailOpen,
} from "react-icons/all";

const Home = () => {
	const {} = useGlobalContext();

	return (
		<main className="flex gap-8">
			<nav className="nav">
				<div className="w-3/5 mx-auto nav_custom">
					<div className="w-full p-2 logo font-bold text-4xl mb-12">
						{/* <img src={logo} alt="sark seven logo" width="100px" height="100px" /> */}
						EMMA
					</div>
					<ul>
						<div className="flex p-2">
							<IoHome className="text-xl" />
							<Link to="/" className="ml-3 pr-4 capitalize">
								hello
							</Link>
						</div>
						<div className="flex p-2">
							<BsPersonFill className="text-xl" />
							<Link to="/" className="ml-3 pr-4 capitalize">
								about
							</Link>
						</div>
						<div className="flex p-2">
							<GoBriefcase className="text-xl" />
							<Link to="/" className="ml-3 pr-4 capitalize">
								portfolio
							</Link>
						</div>

						<div className="flex p-2">
							<IoNewspaperSharp className="text-xl" />
							<Link to="/" className="ml-3 pr-4 capitalize">
								News
							</Link>
						</div>
						<div className="flex p-2">
							<HiMailOpen className="text-xl" />
							<Link to="/" className="ml-3 pr-4 capitalize">
								Contact
							</Link>
						</div>
					</ul>
				</div>
			</nav>
			<Outlet />
		</main>
	);
};

export default Home;
