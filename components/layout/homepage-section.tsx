import React from "react";

const HomepageSection = ({
	children,
	className = "py-20",
	background = `bg-red-100`,
}: {
	children: React.ReactNode;
	className?: string;
	background?: string;
}) => {
	className = `${className} ${background}`;
	return <section className={className}>{children}</section>;
};

export default HomepageSection;
