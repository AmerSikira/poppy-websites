import React from "react";
import Card from "./card";
import FlexRow from "@/components/layout/flex-row";
import FlexColumn from "@/components/layout/flex-column";
import P from "../text/p";
import CustomLink from "../link";
import H6 from "../heading/h6";
import Image from "next/image";

const Testimonial = ({
	image,
	name,
	title,
	text,
	link,
	linkText,
}: {
	image: string;
	name: string;
	title: string;
	text: string;
	link: string;
	linkText: string;
}) => {
	return (
		<Card>
			<FlexRow className="w-full items-center content-center relative">
				<Image
					alt="Profile image"
					width={50}
					height={50}
					className="rounded-full h-12 w-12 flex object-cover border-2 border-black shadow-3xl"
					src={image}
				/>
				<FlexColumn className="ml-5">
					<H6>{name}</H6>
					<P className="text-sm">{title}</P>
				</FlexColumn>
			</FlexRow>
			<P className="mt-10">{text}</P>
			<P className="w-full mt-3" align="text-left">
				<CustomLink href={link}>{linkText}</CustomLink>
			</P>
		</Card>
	);
};

export default Testimonial;
