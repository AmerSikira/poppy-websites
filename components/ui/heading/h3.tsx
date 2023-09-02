const H3 = ({
	className = "",
	color = "text-black",
	children,
}: {
	className?: string;
	color?: string;
	children: React.ReactNode;
}) => {
	const classNames = `text-2xl md:text-4xl font-bold mb-3 md:mb-5 ${className} ${color}`;
	return <h3 className={classNames}>{children}</h3>;
};

export default H3;
