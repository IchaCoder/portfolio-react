import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useState, useEffect } from "react";

const DarkMode = () => {
	const [darkMode, setDarkMode] = useState(localStorage.theme);

	const toggleDarkMode = () => {
		if (document.documentElement.classList.contains("dark")) {
			document.documentElement.classList.remove("dark");
			localStorage.theme = "light";
			setDarkMode(localStorage.theme);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.theme = "dark";
			setDarkMode(localStorage.theme);
		}
	};

	return (
		<div
			onClick={toggleDarkMode}
			className="fixed lg:absolute right-4 text-3xl top-2 lg:p-4 lg:top-8 lg:right-8 cursor-pointer bg-gray-200 z-[10000] p-2 rounded-full"
		>
			{localStorage.theme === "dark" ? <MdOutlineLightMode /> : <MdDarkMode />}
		</div>
	);
};

export default DarkMode;
