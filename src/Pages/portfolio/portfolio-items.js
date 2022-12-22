import quotes from "../../assets/favs.png";
import menu from "../../assets/foodmenu.png";
import furniture from "../../assets/landing.png";
import shortner from "../../assets/link.png";
import tax from "../../assets/taxed.png";
import yaalika from "../../assets/yaalika.png";

const portfolioItems = [
	{
		name: "Donation App",
		categories: ["React", "Strapi", "Tailwind"],
		img: yaalika,
		link: "https://yaalika.netlify.app",
		github: "https://github.com/IchaCoder/donation-project",
	},
	{
		name: "Quotes App",
		categories: ["React", "Tailwind", "Fetch API"],
		img: quotes,
		link: "https://generate-quote-app.netlify.app/",
		github: "https://github.com/IchaCoder/quote-generator-app",
	},
	{
		name: "MealsDB",
		categories: ["Next", "Tailwind", "Fetch API"],
		img: menu,
		link: "https://choosemeal.netlify.app/",
		github: "https://github.com/IchaCoder/choose-your-meal",
	},
	{
		name: "Furniture Showroom Landing Page",
		categories: ["HTML", "CSS", "JavaScript"],
		img: furniture,
		link: "https://roomfurnish.netlify.app/",
		github: "https://github.com/IchaCoder/room-furnitures-page",
	},
	{
		name: "Link Shortner",
		categories: ["HTML", "CSS", "JavaScript"],
		img: shortner,
		link: "https://link-shortnr.netlify.app/",
		github: "https://github.com/IchaCoder/url-shortener",
	},
	{
		name: "Tax Payment System",
		categories: ["React", "Firebase", "Tailwind"],
		img: tax,
		link: "https://taxed.netlify.app",
		github: "https://github.com/IchaCoder/tax-payment-system",
	},
];

export default portfolioItems;
