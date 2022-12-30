import React from "react";
import {
	IoHome,
	GoBriefcase,
	BsPersonFill,
	IoNewspaperSharp,
	HiMailOpen,
} from "react-icons/all";
import { NavLink } from "react-router-dom";

const FixedBottomNav = () => {
	return (
		<div className="text-xs bg-[#dedede] dark:bg-[#121212] dark:text-white z-[1000] flex justify-around gap-2 items-center w-full h-16 fixed bottom-0 logo left-0 lg:hidden">
			<NavLink
				to="/"
				end
				className={({ isActive }) => (isActive ? "active" : "")}
			>
				<IoHome className="flex m-auto text-sm" />
				<div>Home</div>
			</NavLink>
			<NavLink
				to="/about"
				className={({ isActive }) => (isActive ? "active" : "")}
			>
				<BsPersonFill className="flex m-auto text-sm" />
				<div>About</div>
			</NavLink>
			<NavLink
				to="/portfolio"
				className={({ isActive }) => (isActive ? "active" : "")}
			>
				<GoBriefcase className="flex m-auto text-sm" />
				<div>Portfolio</div>
			</NavLink>
			<NavLink
				to="/news"
				className={({ isActive }) => (isActive ? "active" : "")}
			>
				<IoNewspaperSharp className="flex m-auto text-sm" />
				<div>News</div>
			</NavLink>
			<NavLink
				to="/contact"
				className={({ isActive }) => (isActive ? "active" : "")}
			>
				<HiMailOpen className="flex m-auto text-sm" />
				<div>Contact</div>
			</NavLink>
		</div>
	);
};

export default FixedBottomNav;
