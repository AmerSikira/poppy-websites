import Image from "next/image";
import Container from "../layout/container";
import Cta from "../ui/button/cta";
import H1 from "../ui/heading/h1";
import HomepageSection from "../layout/homepage-section";
import Subheading from "../ui/text/subheading";
import P from "../ui/text/p";
import FlexRow from "../layout/flex-row";
const Hero = () => {
	return (
		<>
			<HomepageSection className="relative">
				<Container className="flex flex-col justify-center items-center py-[10rem] md:py-20 md:h-screen">
					<P className="uppercase text-sm font-bold">
						Design & templates
					</P>
					<H1>Laat je bedrijf stralen op alle online kanalen</H1>
					<Subheading>
						Krijg een logo en sjablonen voor digitale commnuicatie
						die passen bij je nieuwe website
					</Subheading>
					<Cta>Bespreek jouw wensen</Cta>

					<FlexRow className="items-center content-center mt-10 ">
						<FlexRow className="items-center content-center">
							<Image
								alt="checkmark"
								src="/check.svg"
								height={20}
								width={20}
							/>
							<P className="ml-0 md:ml-2 uppercase text-sm font-bold">
								Geen verborgen kosten
							</P>
						</FlexRow>

						<FlexRow className=" items-center content-center mt-1 sm:mt-0 sm:ml-5">
							<Image
								alt="checkmark"
								src="/check.svg"
								height={17}
								width={17}
							/>
							<P className="ml-0 md:ml-2 uppercase text-sm font-bold">
								Gebruiksvriendelijk design
							</P>
						</FlexRow>

						<FlexRow className="items-center content-center mt-1 sm:mt-0 sm:ml-5">
							<Image
								alt="checkmark"
								src="/check.svg"
								height={17}
								width={17}
							/>
							<P className="ml-0 md:ml-2 uppercase text-sm font-bold">
								Gemaakt door drie experts
							</P>
						</FlexRow>
					</FlexRow>
				</Container>
				<Image
					src="/pattern-2.png"
					height={200}
					width={200}
					className="absolute top-full left-0 -translate-y-2/4 -translate-x-2/4 invert"
					alt="Pattern from the logo"
				/>
			</HomepageSection>
		</>
	);
};

export default Hero;
