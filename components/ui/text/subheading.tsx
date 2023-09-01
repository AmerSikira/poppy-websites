import React from "react";

const Subheading = ({
	children,
	className = "text-center text-xl md:text-2xl font-light text-black my-10",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <p className={className}>{children}</p>;
};

export default Subheading;
