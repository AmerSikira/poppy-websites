import React from "react";
import Container from "./layout/container";
import FlexRow from "./layout/flex-row";
import P from "./ui/text/p";
import Link from "next/link";
import CustomLink from "./ui/link";

const Footer = () => {
	return (
		<footer>
			<div className="w-full bg-red-100 border-b border-gray-600">
				<Container className="py-5">
					<FlexRow className="justify-center items-center content-center space-x-5">
						<CustomLink href="https://blog.poppywebsites.be">
							Blog
						</CustomLink>
						<CustomLink href="/privacy-policy">
							Privacy Policy
						</CustomLink>
					</FlexRow>
				</Container>
			</div>
			<div className="w-full bg-gray-900">
				<Container className="py-5">
					<FlexRow className="justify-center items-center content-center">
						<P className="text-white">
							All Right Reserved | Poppy Websites 2023
						</P>
					</FlexRow>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
