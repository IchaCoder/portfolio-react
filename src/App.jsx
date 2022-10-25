import { useState } from "react";
import Navbar from "./component/nav/Navbar";
import Home from "./Pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import About from "./Pages/about/About";
import Portfolio from "./Pages/portfolio/Portfolio";
import News from "./Pages/news/News";
import Contact from "./Pages/contact/Contact";

function App() {
	return (
		<SkeletonTheme baseColor="#5294e0" highlightColor="#96c7ff">
			<Router>
				<main className="lg:flex ">
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
		</SkeletonTheme>
	);
}

export default App;
