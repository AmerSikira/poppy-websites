import Link from "next/link";
import React from "react";

const Cta = ({
	children,
	href = "mailto:hallo@poppywebsites.be",
}: {
	children: React.ReactNode;
	href?: string;
}) => {
	return (
		<Link
			href={href}
			className="rounded-md bg-red-500 hover:bg-red-600 shadow-3xl text-center block-translate-y-2 border-2 border-black p-4 text-2xl  hover:translate-y-3 
     active:translate-y-0
    transition-all"
		>
			{children}
		</Link>
	);
};

export default Cta;
