import { useState } from "react";
import Navbar from "./component/home/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
