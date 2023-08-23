import React from "react";

const Container = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	const classNames = `sm:container md:container lg:container xl:container  mx-auto ${className}`;
	return <div className={classNames}>{children}</div>;
};

export default Container;
