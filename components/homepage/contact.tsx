import React from "react";
import HomepageSection from "../layout/homepage-section";
import FlexRow from "../layout/flex-row";
import Container from "../layout/container";
import H2 from "../ui/heading/h2";
import Image from "next/image";
import P from "../ui/text/p";
import CustomLink from "../ui/link";
import Link from "next/link";

const Contact = () => {
	return (
		<HomepageSection
			id="contact"
			background="bg-gradient-radial from-red-200 to-transparent"
		>
			<Container>
				<FlexRow className="justify-center mb-10">
					<H2>Hoe kunnen we jou helpen?</H2>
				</FlexRow>
			</Container>

			<Container>
				<FlexRow className="justify-left md:justify-center">
					<Link
						href="https://www.google.com/maps?sca_esv=562567314&output=search&q=Ligywijk+123,+8900+Ieper,+Belgium&source=lnms&entry=mc&sa=X&ved=2ahUKEwiw7-KRspGBAxVTzQIHHW8FD1sQ0pQJegQIChAB"
						className="flex flex-row items-center content-center hover:text-red-900 hover:underline transition-all"
					>
						<Image
							alt="Map"
							width={25}
							height={25}
							src="/pin-map.svg"
						/>
						<P className="ml-0 md:ml-2">
							Ligywijk 123, 8900 Ieper, België
						</P>
					</Link>

					<Link
						href="tel:+32456181764"
						className="flex flex-row items-center content-center hover:text-red-900 hover:underline transition-all ml-0 md:ml-5  mt-5 md:mt-0"
					>
						<Image
							alt="Phone"
							width={25}
							height={25}
							src="/telephone.svg"
						/>
						<P className="ml-0 md:ml-2">+32 456 18 17 64</P>
					</Link>

					<Link
						href="mailto:hallo@poppywebsites.be"
						className="flex flex-row items-center content-center hover:text-red-900 hover:underline transition-all ml-0 md:ml-5 mt-5 md:mt-0"
					>
						<Image
							alt="Email"
							width={25}
							height={25}
							src="/envelope-at.svg"
						/>
						<P className="ml-2 ">hallo@poppywebsites.be</P>
					</Link>
				</FlexRow>

				<FlexRow
					className="justify-left md:justify-center mt-5"
					remainRow={true}
				>
					<Link
						href="https://linkedin.com/company/poppywebsitesbe/"
						className="flex flex-row items-center content-center hover:text-red-900 hover:underline transition-all"
						target="_blank"
					>
						<Image
							alt="Facebook"
							width={25}
							height={25}
							src="/linkedin.svg"
							className="hover:drop-shadow-3xl-red transition-all"
						/>
					</Link>

					<Link
						href="https://facebook.com/poppywebsites.be"
						className="flex flex-row items-center content-center hover:text-red-900 hover:underline transition-all ml-5"
						target="_blank"
					>
						<Image
							alt="Facebook"
							width={25}
							height={25}
							src="/facebook.svg"
							className="hover:drop-shadow-3xl-red transition-all"
						/>
					</Link>

					<Link
						href="https://instagram.com/poppywebsites.be"
						className="flex flex-row items-center content-center hover:text-red-900 hover:underline transition-all ml-5"
						target="_blank"
					>
						<Image
							alt="Instagram"
							width={25}
							height={25}
							src="/instagram.svg"
							className="hover:drop-shadow-3xl-red transition-all"
						/>
					</Link>
				</FlexRow>
			</Container>
		</HomepageSection>
	);
};

export default Contact;
