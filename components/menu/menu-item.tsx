import React from "react";
import CustomLink from "../ui/link";

const MenuItem = ({ text, href }: { text: string; href: string }) => {
	return (
		<CustomLink
			className="text-2xl md:text-base font-bold md:font-normal"
			href={href}
		>
			{text}
		</CustomLink>
	);
};

export default MenuItem;
