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
		<HomepageSection>
			<Container>
				<FlexRow className="justify-center mb-10">
					<H2>Betere websites voor hetzelfde geld</H2>
				</FlexRow>

				<FlexRow className="gap-10">
					<Card>
						<H3>Functioneel design</H3>
						<P align="text-justify">
							Websites voor kleine bedrijven zien er snel oud uit.
							Onze website ontwerper zorgt altijd voor een mix
							tussen trendy en tijdloos design zodat je website er
							binnen vijf jaar nog altijd moderner uitziet dan die
							van je concurrentie.
						</P>
					</Card>

					<Card>
						<H3>Klantegerichte teksten</H3>
						<P align="text-justify">
							Websites voor kleine bedrijven zien er snel oud uit.
							Onze website ontwerper zorgt altijd voor een mix
							tussen trendy en tijdloos design zodat je website er
							binnen vijf jaar nog altijd moderner uitziet dan die
							van je concurrentie.
						</P>
					</Card>

					<Card>
						<H3>Gestructureerde website</H3>
						<P align="text-justify">
							Websites voor kleine bedrijven zien er snel oud uit.
							Onze website ontwerper zorgt altijd voor een mix
							tussen trendy en tijdloos design zodat je website er
							binnen vijf jaar nog altijd moderner uitziet dan die
							van je concurrentie.
						</P>
					</Card>
				</FlexRow>

				<FlexRow className="justify-center mt-10">
					<SecondaryCta>Meer over web design</SecondaryCta>
				</FlexRow>
			</Container>
		</HomepageSection>
	);
};

export default Services;
