import React from "react";

const FlexRow = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	const classNames = `flex flex-row ${className}`;
	return <div className={classNames}>{children}</div>;
};

export default FlexRow;
