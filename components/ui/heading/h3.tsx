const H3 = ({
	className,
	color = "text-black",
	children,
}: {
	className?: string;
	color?: string;
	children: React.ReactNode;
}) => {
	const classNames = `text-2xl font-bold ${className} ${color}`;
	return <h3 className={classNames}>{children}</h3>;
};

export default H3;
