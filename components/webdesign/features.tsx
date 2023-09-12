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
							De website voor je bedrijf mag er zeker mooi uitzien
							maar hij moet vooral praktisch zijn. Bij het design
							ervan denken we dan ook goed na over de kleuren,
							contrasten en animaties. Het mag leuk en trendy zijn
							zolang het gebruiksgemak er niet onder lijdt. En dat
							zal bij ons niet gebeuren.
						</P>
					</Card>

					<Card>
						<H3 className="w-full text-left">
							Teksten op maat van je klanten
						</H3>
						<P align="text-justify">
							Als ondernemer wil je natuurlijk graag over jezelf
							praten op je website. “Wij hebben jaren ervaring”.
							“Wij zijn experts in…”. Maar voor een klant maakt
							dat allemaal niet zo veel uit. Nemen ze Bedrijf A
							omdat zij drie jaar meer ervaring hebben dan Bedrijf
							B? Natuurlijk niet. Klanten kiezen voor de partner
							die hen beste begrijpt. Daarom moeten de teksten op
							je website gericht zijn op je klanten. We gaan dus
							samen op zoek naar teksten die je klanten meteen
							aanspreken.
						</P>
					</Card>

					<Card>
						<H3 className="w-full text-left">
							Optimaal gebruiksgemak
						</H3>
						<P align="text-justify">
							Bij een goede website gaat het niet enkel om design
							en tekst maar ook om structuur. Welke informatie
							willen je klanten eerst zien? Welke pagina’s heb je
							nodig? Heb je wel meer dan één pagina nodig? Het
							lijkt simpel maar er wordt helaas niet veel over
							nagedacht. Dat doen wij net wel. Wij nemen het doel
							van jouw website als basis en bouwen daar een
							structuur rond die we daarna invullen met goede
							teksten en een passend design.
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
