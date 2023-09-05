import React from "react";
import HomepageSection from "../layout/homepage-section";
import Container from "../layout/container";
import FlexColumn from "../layout/flex-column";
import H2 from "../ui/heading/h2";
import P from "../ui/text/p";
import FlexRow from "../layout/flex-row";
import Cta from "../ui/button/cta";
import Image from "next/image";

const LastCTA = () => {
	return (
		<HomepageSection background="bg-red-900">
			<Container>
				<FlexColumn className="content-center justify-center mb-10">
					<H2 className="text-white mb-5">
						Ook jij verdient een grootse website
					</H2>
					<P className="text-xl  text-white" align="text-center">
						Poppy websites maakt voor jou een website waar
						concurrenten en leveranciers jaloers op zullen zijn
					</P>
				</FlexColumn>

				<FlexRow className="justify-center mt-10">
					<Cta>Bespreek jouw wensen</Cta>
				</FlexRow>

				<FlexRow className="items-center content-center mt-10">
					<FlexRow className="items-center content-center">
						<Image
							alt="checkmark"
							src="/check.svg"
							height={20}
							width={20}
							className="invert"
						/>
						<P className="ml-2 uppercase text-sm font-bold text-white">
							Gebruiksvriendelijke websites met tijdloze designs
						</P>
					</FlexRow>

					<FlexRow className=" items-center content-center mt-5 sm:mt-0 sm:ml-5">
						<Image
							alt="checkmark"
							src="/check.svg"
							height={17}
							width={17}
							className="invert"
						/>
						<P className="ml-2 uppercase text-sm font-bold text-white">
							Leuke teksten waarbij de klant centraal staat
						</P>
					</FlexRow>

					<FlexRow className="items-center content-center mt-5 sm:mt-0 sm:ml-5">
						<Image
							alt="checkmark"
							src="/check.svg"
							height={17}
							width={17}
							className="invert"
						/>
						<P className="ml-2 uppercase text-sm font-bold text-white">
							Duidelijke communicatie van start tot einde
						</P>
					</FlexRow>
				</FlexRow>
			</Container>
		</HomepageSection>
	);
};

export default LastCTA;
