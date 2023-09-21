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
							Website designs die kloppen
						</H3>
						<P align="text-justify">
							{`De website voor je bedrijf mag er zeker mooi uitzien
							maar hij moet vooral praktisch zijn. Bij het design
							ervan denken we dan ook goed na over de kleuren,
							contrasten en animaties. Het mag leuk en trendy zijn
							zolang het gebruiksgemak er niet onder lijdt. En dat
							zal bij ons niet gebeuren.`}
						</P>
					</Card>

					<Card>
						<H3 className="w-full text-left">
							Teksten op maat van je klanten
						</H3>
						<P align="text-justify">
							{`Als ondernemer wil je natuurlijk graag vertellen waar je de beste in bent. Maar eigenlijk willen klanten niet weten hoeveel ervaring je hebt of wat je van jezelf denkt. Klanten willen horen wat anderen over je denken, hoe je hun problemen kan oplossen of welke leuke ervaring je hen kan aanbieden. Dus denken we samen over de wensen van jouw klanten en hoe we jouw oplossingen duidelijk kunnen communiceren.`}
						</P>
					</Card>

					<Card>
						<H3 className="w-full text-left">
							Optimaal gebruiksgemak
						</H3>
						<P align="text-justify">
							{`Voor een professionele website is structuur net zo
							belangrijk als tekst en design. Welke informatie
							willen je klanten eerst lezen? En hoe breng je die
							informatie duidelijk over? Een goede structuur
							maken, lijkt simpel maar het wordt vaak onderschat.
							Daarom stellen wij eerst een structuur op waarbij we
							focussen op de gebruikerservaring van je klanten.
							Dan vullen we aan met tekst en design.`}
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
