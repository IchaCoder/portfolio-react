import React from "react";
import { Link } from "react-router-dom";
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
	);
};

export default NavList;
