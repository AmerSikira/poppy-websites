"use client";
import { useState } from "react";
import Hamburger from "./hamburger";

const Menu = ({ children }: { children: React.ReactNode }) => {
	const [open, setOpen] = useState(false);

	const visible = open
		? "flex flex-col gap-5 fixed left-0 w-full bg-red-100 justify-center items-center"
		: "hidden";
	const provisionalStyle = open
		? { height: "calc(100vh - 64px)", top: "64px" }
		: {};
	const handleOpen = () => {
		setOpen((curr) => !curr);
	};
	return (
		<>
			<span className="sr-only md:hidden" onClick={handleOpen}>
				Open main menu
			</span>
			<Hamburger onClick={handleOpen} />
			<nav
				className={`${visible} sm:relative md:flex md:flex-row md:justify-between md:items-center md:gap-4`}
				style={provisionalStyle}
			>
				{children}
			</nav>
		</>
	);
};

export default Menu;
