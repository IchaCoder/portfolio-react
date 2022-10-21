import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import portfolioItems from "./Pages/portfolio/portfolio-items";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [items, setItems] = React.useState(portfolioItems);
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	const [singleNews, setSingleNews] = useState({});
	const [openSingleNews, setOpenSingleNews] = useState(false);
	const baseURL = "https://inshorts.deta.dev/news?category=technology";

	const fetchData = async () => {
		setLoading(true);
		try {
			const { data } = await axios.get(baseURL);
			setNews(data.data);
			// setLoading(false);
		} catch (error) {
			console.log(error);
			// setLoading(false);
		}
	};

	const getSingleNews = (id) => {
		const single_news = news.find((newsItem) => newsItem.id === id);
		setOpenSingleNews(true);
		setSingleNews(single_news);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<AppContext.Provider
			value={{
				isModalOpen,
				setIsModalOpen,
				items,
				setItems,
				news,
				loading,
				setLoading,
				getSingleNews,
				singleNews,
				openSingleNews,
				setOpenSingleNews,
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
