import React from "react";

const Menu = ({ children }: { children: React.ReactNode }) => {
	return (
		<nav className="flex flex-row justify-between items-center gap-4">
			{children}
		</nav>
	);
};

export default Menu;
