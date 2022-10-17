import { useState } from "react";
import Navbar from "./component/nav/Navbar";
import Home from "./Pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FixedTopNav from "./component/nav/FixedTopNav";
import FixedBottomNav from "./component/nav/FixedBottomNav";
import About from "./Pages/about/About";
import Portfolio from "./Pages/portfolio/Portfolio";
import News from "./Pages/news/News";

function App() {
	return (
		<Router>
			<main className="lg:flex ">
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/news" element={<News />} />
				</Routes>
			</main>
		</Router>
	);
}

export default App;
