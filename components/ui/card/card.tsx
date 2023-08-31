import React from "react";

const Card = ({
	children,
	className,
	width = "w-1/3",
}: {
	children: React.ReactNode;
	className?: string;
	width?: string;
}) => {
	className = `flex flex-col items-center shadow-3xl rounded-md border-2 border-black bg-white py-8 px-10 ${className} ${width}`;
	return <div className={className}>{children}</div>;
};

export default Card;
