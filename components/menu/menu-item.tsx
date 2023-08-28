import React from "react";
import CustomLink from "../ui/link";

const MenuItem = ({ text, href }: { text: string; href: string }) => {
	return <CustomLink href={href}>{text}</CustomLink>;
};

export default MenuItem;
