import React from "react";
import Link from "next/link";

const CustomLink = ({
	href,
	children,
	className = "",
}: {
	href: string;
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<Link
			className={`text-red-700 hover:text-red-900 group transition duration-300 inline-block ${className}`}
			href={href}
		>
			{children}
			<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-red-900"></span>
		</Link>
	);
};

export default CustomLink;
