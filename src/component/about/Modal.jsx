import React from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/all";
import { useGlobalContext } from "../../context";
import ModalContent from "./ModalContent";

const variants = {
	visible: {
		opacity: 1,
		x: 0,
	},
	hidden: { opacity: 0, x: 200 },
};

const navVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 0,
		transition: {
			duration: 1,
			type: "spring",
		},
	},
};

const Modal = () => {
	const { isModalOpen, setIsModalOpen } = useGlobalContext();
	const handleCloseModal = (e) => {
		const targetClass = e.target.classList;
		if (targetClass.contains("fixed")) {
			setIsModalOpen(false);
		}
	};

	return (
		<>
			{isModalOpen && (
				<motion.section
					initial="hidden"
					animate="visible"
					variants={variants}
					className={`fixed w-full h-full z-50 top-0 modal bg-[#000000b3] dark:bg-[rgba(255,255,255,.2)] left-0 grid place-items-center `}
					onClick={handleCloseModal}
				>
					<div
						className="md:w-2/5 bg-white dark:bg-[#121212] h-[70%] w-11/12 rounded-lg relative overflow-y-scroll text-black p-8"
						initial="hidden"
						animate="visible"
						variants={navVariants}
					>
						<div className="flex">
							<IoMdClose
								className="text-3xl cursor-pointer dark:text-white -top-8 text-black border-2 border-solid border-black dark:border-white rounded-full"
								onClick={() => setIsModalOpen(false)}
							/>
						</div>
						<ModalContent />
					</div>
				</motion.section>
			)}
		</>
	);
};

export default Modal;
