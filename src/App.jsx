import Navbar from "./component/nav/Navbar";
import Home from "./Pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/about/About";
import Portfolio from "./Pages/portfolio/Portfolio";
import News from "./Pages/news/News";
import Contact from "./Pages/contact/Contact";
import { MdDarkMode } from "react-icons/md";
import { useEffect } from "react";
import DarkMode from "./component/darkmode/DarkMode";

function App() {
	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []);

	return (
		<Router>
			<main className="lg:flex">
				<DarkMode />
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/news" element={<News />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
