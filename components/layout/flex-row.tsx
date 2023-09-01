import React from "react";

const FlexRow = ({
	children,
	className = "",
	remainRow = false,
}: {
	children: React.ReactNode;
	className?: string;
	remainRow?: boolean;
}) => {
	const direction = remainRow ? "row" : "col";
	const classNames = `flex flex-${direction} md:flex-row ${className}`;
	return <div className={classNames}>{children}</div>;
};

export default FlexRow;
