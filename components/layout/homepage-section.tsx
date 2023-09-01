import React from "react";

const HomepageSection = ({
	children,
	className,
	background = `bg-red-100`,
}: {
	children: React.ReactNode;
	className?: string;
	background?: string;
}) => {
	className = `py-20 ${className} ${background}`;
	return <section className={className}>{children}</section>;
};

export default HomepageSection;
