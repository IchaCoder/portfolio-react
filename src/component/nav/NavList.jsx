import React from "react";
import { NavLink } from "react-router-dom";
import {
	IoHome,
	GoBriefcase,
	BsPersonFill,
	IoNewspaperSharp,
	HiMailOpen,
} from "react-icons/all";

const NavList = () => {
	return (
		<ul>
			<div className="flex p-2">
				<IoHome className="text-xl" />
				<NavLink
					end
					to="/"
					className={`({ isActive }) => (isActive ? "active" : "") ml-3 pr-4 capitalize`}
				>
					home
				</NavLink>
			</div>
			<div className="flex p-2">
				<BsPersonFill className="text-xl" />
				<NavLink
					to="/about"
					className={`({ isActive }) => (isActive ? "active" : "") ml-3 pr-4 capitalize`}
				>
					about
				</NavLink>
			</div>
			<div className="flex p-2">
				<GoBriefcase className="text-xl" />
				<NavLink
					to="/portfolio"
					className={`({ isActive }) => (isActive ? "active" : "") ml-3 pr-4 capitalize`}
				>
					portfolio
				</NavLink>
			</div>

			<div className="flex p-2">
				<IoNewspaperSharp className="text-xl" />
				<NavLink
					to="/news"
					className={`({ isActive }) => (isActive ? "active" : "") ml-3 pr-4 capitalize`}
				>
					News
				</NavLink>
			</div>
			<div className="flex p-2">
				<HiMailOpen className="text-xl" />
				<NavLink
					to="/contact"
					className={`({ isActive }) => (isActive ? "active" : "") ml-3 pr-4 capitalize`}
				>
					Contact
				</NavLink>
			</div>
		</ul>
	);
};

export default NavList;
