import Link from "next/link";
import React from "react";

const SecondaryCta = ({ children }: { children: React.ReactNode }) => {
	return (
		<Link
			href="/"
			className="rounded-md bg-gray-300 hover:bg-gray-400 shadow-3xl text-center block-translate-y-2 border-2 border-black p-4 text-2xl  hover:translate-y-3 
     active:translate-y-0
    transition-all"
		>
			{children}
		</Link>
	);
};

export default SecondaryCta;
