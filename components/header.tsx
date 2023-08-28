import React from "react";
import Container from "./layout/container";

const Header = ({ children }: { children: React.ReactNode }) => {
	return (
		<header className="fixed w-screen left-0 top-0 z-50 bg-red-100">
			<Container className="flex flex-row justify-between items-center h-16">
				{children}
			</Container>
		</header>
	);
};

export default Header;
