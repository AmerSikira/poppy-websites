import React from "react";
import Menu from "@/components/menu/menu";
import MenuItem from "@/components/menu/menu-item";
const Navigation = () => {
	return (
		<Menu>
			<MenuItem text="Home" href="/" />
			<MenuItem text="Why us?" href="/" />
			<MenuItem text="Projects" href="/" />
			<MenuItem text="Testimonials" href="/" />
			<MenuItem text="Blog" href="/" />
		</Menu>
	);
};

export default Navigation;
