import React from "react";
import HomepageSection from "../layout/homepage-section";
import Container from "../layout/container";
import FlexColumn from "../layout/flex-column";
import H2 from "../ui/heading/h2";
import P from "../ui/text/p";
import FlexRow from "../layout/flex-row";
import Cta from "../ui/button/cta";

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
					<Cta>Bespreek de mogelijkheden</Cta>
				</FlexRow>

				<FlexRow className="text-white gap-20 mt-10">
					<ul className="md:list-disc flex gap-5 md:gap-20 text-center md:text-left flex-col md:flex-row">
						<li>
							Gebruiksvriendelijke websites met tijdloze designs
						</li>
						<li>Leuke teksten waarbij de klant centraal staat</li>
						<li>Duidelijke communicatie van start tot einde</li>
					</ul>
				</FlexRow>
			</Container>
		</HomepageSection>
	);
};

export default LastCTA;
