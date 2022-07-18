/** @format */

import React from "react";
import { Outlet } from "react-router";

import logo from "../../assets/logo.svg";
import NavList from "./NavList";
import FixedTopNav from "./FixedTopNav";
import { useGlobalContext } from "../../context";

const Home = () => {
	const {} = useGlobalContext();
	const date = new Date().getFullYear();

	return (
		<main className="lg:flex h-screen">
			<nav className="nav hidden lg:grid">
				<div className="w-3/5 mx-auto nav_custom">
					<div className="w-full p-2 logo font-bold text-4xl mb-10">
						{/* <img src={logo} alt="sark seven logo" width="100px" height="100px" /> */}
						EMMA
					</div>
					<NavList />
					<div className="flex gap-2 p-2 mt-10">
						<p className="text-gray-500 italic">&copy; {date} Sark Seven ♥</p>
						<img src={logo} alt="sark seven logo" width="15%" />
					</div>
				</div>
			</nav>
			<FixedTopNav />
			<div className="text-3xl pl-4 sm:pl-8 flex items-center w-full h-16 fixed bottom-0 logo left-0 font-bold bg-white lg:hidden">
				EMMA
			</div>
			<Outlet />
		</main>
	);
};

export default Home;
