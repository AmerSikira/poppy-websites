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
							Volledige online profielen en pagina’s
						</H3>
						<P align="text-justify">
							Wanneer je jouw bedrijfsnaam intikt in Google komen
							er verschillende pagina’s tevoorschijn: jouw
							website, Facebook, Instagram, bedrijvengidsen,
							TripAdvisor … Heel wat werk om ervoor te zorgen dat
							je informatie overal klopt. Wij helpen jou om deze
							pagina’s op te frissen en te onderhouden.
						</P>
					</Card>

					<Card>
						<H3 className="w-full text-left">
							Teksten die je klanten aanspreken
						</H3>
						<P align="text-justify">
							Klanten kunnen je op allerlei manieren ontdekken.
							Waar dat ook is, moet je proberen om een goede
							eerste indruk na te laten. We werken samen aan
							aantrekkelijke teksten die tonen hoe jij jouw
							klanten kan helpen. We zorgen er ook voor dat alle
							teksten overal in lijn liggen met de inhoud van je
							website.
						</P>
					</Card>

					<Card>
						<H3 className="w-full text-left">
							Omgaan met ontevreden klanten
						</H3>
						<P align="text-justify">
							Soms kan het eens gebeuren dat iemand een slechte
							ervaring heeft en zich daarover uitspreekt in Google
							reviews of op reviewwebsites zoals Trustpilot. In
							zo’n geval staan we je bij met advies om correct te
							antwoorden op deze slechte reviews en eruit te
							leren.
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
