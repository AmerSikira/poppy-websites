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
							Strategisch omgaan met blog posts
						</H3>
						<P align="text-justify">Needs copy</P>
					</Card>

					<Card>
						<H3 className="w-full text-left">
							Content op maat van je klant
						</H3>
						<P align="text-justify">Needs copy</P>
					</Card>

					<Card>
						<H3 className="w-full text-left">
							Alles in eigen handen
						</H3>
						<P align="text-justify">Needs copy</P>
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
