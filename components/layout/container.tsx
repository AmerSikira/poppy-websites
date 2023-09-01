import React from "react";

const Container = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	const classNames = `px-4 lg:px-0 container  mx-auto ${className}`;
	return <div className={classNames}>{children}</div>;
};

export default Container;
