/** @format */

import React from "react";
import { Outlet } from "react-router";
import { useGlobalContext } from "../context";
import logo from "../assets/logo.svg";
import NavList from "./NavList";

const Home = () => {
	const {} = useGlobalContext();
	const date = new Date().getFullYear();

	return (
		<main className="lg:flex gap-8">
			<nav className="nav hidden lg:grid">
				<div className="w-3/4 mx-auto nav_custom">
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
			<Outlet />
		</main>
	);
};

export default Home;
