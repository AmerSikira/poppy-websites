const H6 = ({
	className = "",
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	const classNames = `text-base font-bold text-black ${className}`;
	return <h6 className={classNames}>{children}</h6>;
};

export default H6;
