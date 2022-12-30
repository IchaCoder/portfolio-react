import React from "react";
import { Outlet } from "react-router";

import logo from "../../assets/logo.svg";
import NavList from "./NavList";
import FixedTopNav from "./FixedTopNav";
import FixedBottomNav from "./FixedBottomNav";

const Home = () => {
	const date = new Date().getFullYear();

	return (
		<>
			<FixedTopNav />
			<FixedBottomNav />
			<nav className="nav hidden lg:grid bg-white dark:bg-[#121212] h-screen fixed">
				<div className="w-3/5 mx-auto nav_custom">
					<div className="w-full p-2 logo font-bold text-4xl mb-10 dark:text-white">
						EMMA
					</div>
					<NavList />
					<div className="flex gap-2 p-2 mt-10 ">
						<p className="text-gray-500 italic dark:text-white">
							&copy; {date} Sark Seven ♥
						</p>
						<img src={logo} alt="sark seven logo" width="15%" />
					</div>
				</div>
			</nav>
		</>
	);
};

export default Home;
