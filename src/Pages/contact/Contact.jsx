import React, { useRef } from "react";
import MapBoxl from "./MapBox";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const [sender, setSender] = React.useState({ name: "", email: "" });
	const [textArea, setTextArea] = React.useState();
	const form = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await emailjs.sendForm(
				"service_bcw2ixh",
				"template_g7w8bdm",
				form.current,
				"SXkgYTdOU5pJISFOA"
			);
			form.current.reset();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="main pt-40 portfolio_main news_main lg:pl-8 bg-[rgb(243,244,246)] dark:text-white dark:bg-[#282828] pb-4">
			<div className="p-3 w-max portfolio_heading uppercase dark:bg-gray-300 dark:text-black px-4 font-semibold text-xs ml-4">
				contact
			</div>
			<div className="portfolio_header lg:flex">
				<h1 className="font-bold text-3xl ml-4 mt-4">Get in Touch</h1>
			</div>
			<MapBoxl />
			<form ref={form} className="mb-24 px-4 mt-10" onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Name"
					name="name"
					className="w-full p-2 placeholder:pl-1 placeholder:font-semibold placeholder:italic my-4"
					required
					onChange={(e) => setSender({ ...sender, name: e.target.value })}
				/>
				<input
					type="email"
					placeholder="Email"
					name="email"
					className="w-full p-2 placeholder:pl-1 placeholder:font-semibold placeholder:italic my-4"
					required
					onChange={(e) => setSender({ ...sender, email: e.target.value })}
				/>
				<textarea
					name="message"
					id=""
					cols="30"
					rows="5"
					placeholder="Message"
					required
					className="w-full p-2 placeholder:pl-1 placeholder:font-semibold placeholder:italic my-4"
					onChange={(e) => setTextArea(e.target.value)}
				/>
				<button className="bg-black dark:bg-white dark:text-black text-white p-3 mt-4 px-8 hover:tracking-widest">
					Send Message
				</button>
			</form>
		</div>
	);
};

export default Contact;
