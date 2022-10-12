import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import portfolioItems from "./Pages/portfolio/portfolio-items";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [items, setItems] = React.useState(portfolioItems);

	return (
		<AppContext.Provider
			value={{
				isModalOpen,
				setIsModalOpen,
				items,
				setItems,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, AppContext };
