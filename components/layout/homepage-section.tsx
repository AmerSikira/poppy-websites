import React from "react";

const HomepageSection = ({
	children,
	className,
	background = `bg-red-100`,
	id = "",
}: {
	children: React.ReactNode;
	className?: string;
	background?: string;
	id?: string;
}) => {
	className = `py-20 ${className} ${background}`;
	return (
		<section className={className} id={id}>
			{children}
		</section>
	);
};

export default HomepageSection;
