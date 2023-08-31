const P = ({
	className,
	children,
	align = "text-left",
}: {
	className?: string;
	children: React.ReactNode;
	align?: string;
}) => {
	const classNames = `text-black ${className} ${align}`;
	return <p className={classNames}>{children}</p>;
};

export default P;
