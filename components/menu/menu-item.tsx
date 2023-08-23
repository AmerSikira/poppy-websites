import Link from "next/link";
import React from "react";

const MenuItem = ({ text, href }: { text: string; href: string }) => {
	return (
		<Link className="text-black group transition duration-300" href={href}>
			{text}

			<span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
		</Link>
	);
};

export default MenuItem;
