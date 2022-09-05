import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<AppContext.Provider value={{ isModalOpen, setIsModalOpen }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, AppContext };
