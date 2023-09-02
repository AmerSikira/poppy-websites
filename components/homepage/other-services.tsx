import HomepageSection from "../layout/homepage-section";
import FlexRow from "../layout/flex-row";
import Container from "../layout/container";
import H2 from "../ui/heading/h2";
import Card from "../ui/card/card";
import H3 from "../ui/heading/h3";
import P from "../ui/text/p";
import CustomLink from "../ui/link";

const OtherServices = () => {
	return (
		<HomepageSection>
			<Container>
				<FlexRow className="justify-center mb-10">
					<H2>Hulp nodig met andere online diensten?</H2>
				</FlexRow>
			</Container>

			<Container className="flex gap-10 flex-col md:flex-row">
				<Card className="justify-between">
					<FlexRow className="w-full items-center content-center relative">
						<H3>Online reputatie optimaliseren</H3>
					</FlexRow>
					<P className="mt-10" align="text-justify">
						Je online reputatie stopt niet bij je website. Hoe zit
						het met je Google Bedrijfsprofiel? Heb je een pagina op
						Trip Advisor of Trustpilot? Wij zorgen voor complete
						profielen en helpen je omgaan met (onterecht) slechte
						reviews.
					</P>
					<P className="w-full mt-3">
						<CustomLink href="#">Meer info</CustomLink>
					</P>
				</Card>

				<Card className="justify-between">
					<FlexRow className="w-full items-center content-center relative">
						<H3>Design en templates</H3>
					</FlexRow>
					<P className="mt-10" align="text-justify">
						Nieuw logo nodig? Of wil je templates die passen bij je
						nieuwe website? We helpen je met sjablonen voor
						presentaties, sociale media en allerlei andere online
						communicatie. Zo zorg je voor een prachtig geheel op
						alle kanalen.
					</P>
					<P className="w-full mt-3">
						<CustomLink href="#">Meer info</CustomLink>
					</P>
				</Card>

				<Card className="justify-between">
					<FlexRow className="w-full items-center content-center relative">
						<h3 className="text-2xl font-bold text-black">
							Content marketing strategie
						</h3>
					</FlexRow>
					<P className="mt-10" align="text-justify">
						Wil je meer spreken over je bedrijf via blogs of sociale
						media? Een goede freelancer is helaas onbetaalbaar voor
						kleine bedrijven. Wij helpen je op weg met SEO, ideëen
						en structuur zodat je het zelf kan aanpakken.
					</P>
					<P className="w-full mt-3">
						<CustomLink href="#">Meer info</CustomLink>
					</P>
				</Card>
			</Container>
		</HomepageSection>
	);
};

export default OtherServices;
