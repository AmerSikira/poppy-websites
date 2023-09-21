import HomepageSection from "../layout/homepage-section";
import Container from "../layout/container";
import FlexRow from "../layout/flex-row";
import H2 from "../ui/heading/h2";
import Card from "../ui/card/card";
import H3 from "../ui/heading/h3";
import P from "../ui/text/p";
import Cta from "../ui/button/cta";

const Features = () => {
	return (
		<HomepageSection id="diensten">
			<Container>
				{/* <FlexRow className="justify-center mb-10">
					<H2>Betere websites voor hetzelfde geld</H2>
				</FlexRow> */}

				<FlexRow className="gap-10">
					<Card>
						<H3 className="w-full text-left">
							Een passend logo voor je website
						</H3>
						<P align="text-justify">
							Als website designer kunnen we perfect vertrekken
							van je huidige logo en stijl. Maar dat beperkt de
							mogelijkheden. Wanneer we vertrekken van een nieuw
							logo kunnen we de stijl ervan meteen doortrekken in
							het design van je website en andere kanalen.
						</P>
					</Card>

					<Card>
						<H3 className="w-full text-left">
							Templates voor alle kanalen
						</H3>
						<P align="text-justify">
							Op basis van je logo en website ontwikkelen we
							logo's en sjablonen voor je communicatiekanalen.
							Denk aan je Facebook logo, Instagram posts en
							foldertjes. Door makkelijk te bewerken sjablonen te
							gebruiken, heb je veel minder werk en ziet je
							communicatie er altijd stralend uit.
						</P>
					</Card>

					<Card>
						<H3 className="w-full text-left">
							Consistentie met kleuren & vormen
						</H3>
						<P align="text-justify">
							Bij de oplevering van je website krijg je een
							branding gids. Daarin staan de gekozen kleuren,
							vormen en lettertypes. Dankzij deze gids en de
							sjablonen kan je zelf makkelijk aan de slag met je
							visuele communicatie zonder dat het een kakofonie
							van kleuren en vormen wordt.
						</P>
					</Card>
				</FlexRow>

				<FlexRow className="justify-center mt-10">
					<Cta>Bespreek jouw wensen</Cta>
				</FlexRow>
			</Container>
		</HomepageSection>
	);
};

export default Features;
