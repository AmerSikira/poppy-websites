import React from "react";

const FlexColumn = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	const classNames = `flex flex-col ${className}`;
	return <div className={classNames}>{children}</div>;
};

export default FlexColumn;
