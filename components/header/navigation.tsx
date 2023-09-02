import React from "react";
import Menu from "@/components/menu/menu";
import MenuItem from "@/components/menu/menu-item";
const Navigation = () => {
	return (
		<Menu>
			<MenuItem text="Over ons" href="/#over-ons" />
			<MenuItem text="Diensten" href="/#diensten" />
			<MenuItem text="Contact" href="/#contact" />
		</Menu>
	);
};

export default Navigation;
