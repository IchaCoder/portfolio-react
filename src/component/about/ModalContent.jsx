import React from "react";
import {
	AiFillHtml5,
	DiCss3,
	FaReact,
	FaNode,
	SiMongodb,
	FaGitAlt,
} from "react-icons/all";
import { IoLogoJavascript } from "react-icons/io";

const ModalContent = () => {
	return (
		<div>
			<h2 className="font-bold text-xl mt-10">Skills</h2>
			<div className="mt-6">
				<div className="flex mb-4">
					<AiFillHtml5 className="text-5xl" />
					<div className="p-4 ">HTML</div>
				</div>
				<div className="flex mb-4">
					<DiCss3 className="text-5xl" />
					<div className="p-4 ">CSS</div>
				</div>
				<div className="flex mb-4">
					<IoLogoJavascript className="text-5xl" />
					<div className="p-4 ">JavaScript</div>
				</div>
				<div className="flex mb-4">
					<FaReact className="text-5xl" />
					<div className="p-4 ">React</div>
				</div>
				<div className="flex mb-4">
					<FaNode className="text-5xl" />
					<div className="p-4 ">NodeJS</div>
				</div>
				<div className="flex mb-4">
					<SiMongodb className="text-5xl" />
					<div className="p-4 ">MongoDB</div>
				</div>
				<div className="flex mb-4">
					<FaGitAlt className="text-5xl" />
					<div className="p-4 ">Git</div>
				</div>
			</div>
		</div>
	);
};

export default ModalContent;
