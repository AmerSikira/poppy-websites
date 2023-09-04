import HomepageSection from "../layout/homepage-section";
import Container from "../layout/container";
import FlexRow from "../layout/flex-row";
import H2 from "../ui/heading/h2";
import Card from "../ui/card/card";
import H3 from "../ui/heading/h3";
import P from "../ui/text/p";
import SecondaryCta from "../ui/button/secondary-cta";

const Services = () => {
	return (
		<HomepageSection id="diensten">
			<Container>
				<FlexRow className="justify-center mb-10">
					<H2>Betere websites voor hetzelfde geld</H2>
				</FlexRow>

				<FlexRow className="gap-10">
					<Card>
						<H3 className="w-full text-left">Functioneel design</H3>
						<P align="text-justify">
							Onze website ontwerper zorgt voor een mix tussen
							<strong> trendy en tijdloos design</strong>. Zo ziet
							je website er binnen vijf jaar nog steeds moderner
							uit dan die van je concurrentie.
						</P>
					</Card>

					<Card>
						<H3 className="w-full text-left">
							Klantegerichte teksten
						</H3>
						<P align="text-justify">
							De meeste webbureaus geven geen of slecht advies
							over webteksten. Poppy Websites heeft een ervaren
							copywriter. Zo krijgt
							<strong>
								{" "}
								tekst evenveel aandacht als design.
							</strong>
						</P>
					</Card>

					<Card>
						<H3 className="w-full text-left">
							Gestructureerde website
						</H3>
						<P align="text-justify">
							Wij helpen je niet alleen met het design maar ook
							met de structuur en de inhoud van jouw website zodat
							klanten kunnen genieten van een{" "}
							<strong>vlotte gebruikerservaring</strong>.
						</P>
					</Card>
				</FlexRow>

				<FlexRow className="justify-center mt-10">
					<SecondaryCta>Bespreek de mogelijkheden</SecondaryCta>
				</FlexRow>
			</Container>
		</HomepageSection>
	);
};

export default Services;
