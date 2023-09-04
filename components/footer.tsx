import React from "react";
import Container from "./layout/container";
import FlexRow from "./layout/flex-row";
import P from "./ui/text/p";

const Footer = () => {
	return (
		<footer className="py-5 bg-gray-900">
			<Container>
				<FlexRow className="justify-center items-center content-center">
					<P className="text-white">
						All Right Reserved | Poppy Websites 2023
					</P>
				</FlexRow>
			</Container>
		</footer>
	);
};

export default Footer;
