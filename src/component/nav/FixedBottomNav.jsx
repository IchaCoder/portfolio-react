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
		<div
			style={{ backgroundColor: "#DEDEDE" }}
			className="text-xs flex justify-around z-50 gap-2 items-center w-full h-16 fixed bottom-0 logo left-0 lg:hidden"
		>
			<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
				<IoHome className="flex m-auto text-sm" />
				<div>Home</div>
			</NavLink>
			<NavLink to="/about">
				<BsPersonFill className="flex m-auto text-sm" />
				<div>About</div>
			</NavLink>
			<NavLink to="/porfolio">
				<GoBriefcase className="flex m-auto text-sm" />
				<div>Portfolio</div>
			</NavLink>
			<NavLink to="/news">
				<IoNewspaperSharp className="flex m-auto text-sm" />
				<div>News</div>
			</NavLink>
			<NavLink to="/contact">
				<HiMailOpen className="flex m-auto text-sm" />
				<div>Contact</div>
			</NavLink>
		</div>
	);
};

export default FixedBottomNav;