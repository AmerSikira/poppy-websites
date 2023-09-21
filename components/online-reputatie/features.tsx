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
							Volledige online profielen
						</H3>
						<P align="text-justify">
							{`Wanneer je jouw bedrijfsnaam intikt in Google komen er verschillende pagina’s tevoorschijn: jouw website, Facebook, Trustpilot, de Gouden Gids en nog een reeks andere websites. Heel wat werk om ervoor te zorgen dat je informatie overal ingevuld is en nog eens klopt ook. Wij helpen jou om deze pagina’s op te frissen en te onderhouden.`}
						</P>
					</Card>

					<Card>
						<H3 className="w-full text-left">
							Klantgerichte informatie
						</H3>
						<P align="text-justify">
							{`Klanten kunnen je ontdekken op sociale media, maar ook via Google of bedrijvengidsen. Waar je ook die eerste indruk maakt, moet je ervoor zorgen dat die goed is. Daarom werken we samen aan aantrekkelijke teksten die tonen hoe jij jouw klanten kan helpen. We zorgen er ook voor dat alle teksten overal in lijn liggen met de inhoud van je website.`}
						</P>
					</Card>

					<Card>
						<H3 className="w-full text-left">
							Reageren op slechte reviews
						</H3>
						<P align="text-justify">
							{`Hoe goed je ook je best doet, je zal altijd klanten
							hebben die niet zo tevreden zijn. Soms kan het eens
							gebeuren dat zo'n klant zijn mening deelt via Google
							reviews of een website zoals Trustpilot. In zo’n
							geval staan we je bij met advies om correct om te
							gaan met de situatie, gelijkaardige problemen te
							vermijden en beleefd te antwoorden.`}
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
