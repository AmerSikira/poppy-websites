const H2 = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	const classNames = `text-center text-4xl font-bold text-black ${className}`;
	return <h2 className={classNames}>{children}</h2>;
};

export default H2;
