import { useState } from "react";
import Navbar from "./component/nav/Navbar";
import Home from "./Pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FixedTopNav from "./component/nav/FixedTopNav";
import FixedBottomNav from "./component/nav/FixedBottomNav";
import About from "./Pages/about/About";

function App() {
	return (
		<Router>
			<FixedTopNav />
			<FixedBottomNav />
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
