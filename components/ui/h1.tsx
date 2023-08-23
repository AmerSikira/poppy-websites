const H1 = ({
	className = "text-6xl font-bold  text-center text-black",
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	const classNames = `${className}`;
	return <h1 className={classNames}>{children}</h1>;
};

export default H1;
