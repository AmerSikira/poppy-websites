import Link from "next/link";
import React from "react";

const Cta = ({ children }: { children: React.ReactNode }) => {
	return (
		<Link href="/" className="rounded-md bg-black">
			<span
				className="block -translate-x-2 -translate-y-2 rounded-md border-2 border-black bg-red-500 p-4 text-2xl  hover:-translate-y-3 
    active:translate-x-0 active:translate-y-0
    transition-all"
			>
				{children}
			</span>
		</Link>
	);
};

export default Cta;
