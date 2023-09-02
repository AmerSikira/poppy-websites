const H1 = ({
	className = "",
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	const classNames = `text-4xl md:text-8xl font-bold  text-center text-black ${className}`;
	return <h1 className={classNames}>{children}</h1>;
};

export default H1;
