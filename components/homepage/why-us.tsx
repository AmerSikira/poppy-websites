import HomepageSection from "../layout/homepage-section";
import Container from "../layout/container";
import FlexRow from "../layout/flex-row";
import H2 from "../ui/heading/h2";
import FlexColumn from "../layout/flex-column";
import H3 from "../ui/heading/h3";
import P from "../ui/text/p";
import Image from "next/image";

const WhyUs = () => {
	return (
		<HomepageSection
			background="bg-[url('/bg.png')]"
			className="bg-overlay bg-no-repeat"
		>
			<Container>
				<FlexRow className="justify-center mb-10">
					<H2>Waarom kiezen voor Poppy Websites?</H2>
				</FlexRow>
			</Container>
			<Container className="flex gap-10 my-15 relative flex-col-reverse md:flex-row">
				<FlexColumn className="w-full md:w-1/2 justify-center">
					<H3 className="mb-10">Team van drie experts</H3>

					<P>
						De meeste webbureaus zijn ofwel heel technisch ofwel
						heel creatief. Hoe gek het ook klinkt, meestal hebben ze
						veel gelijkaardige profielen. Nochtans heb je maar drie
						profielen nodig: een developer, een designer en een
						copywriter. Laat dat nu net de profielen zijn die wij
						hebben. Dat betekent ook dat we nooit vele projecten
						tegelijk aannemen en dus altijd volledig gefocust zijn
						op jouw website.
					</P>
				</FlexColumn>

				<FlexRow className="w-full md:w-1/2 mt-5 md:mt-0 justify-end">
					<Image alt="" width={500} height={500} src="/team.svg" />
				</FlexRow>
			</Container>

			<Container className="flex gap-10 my-15 relative md:flex-row flex-col">
				<FlexRow className="w-full md:w-1/2 justify-start">
					<Image alt="" width={500} height={500} src="/savings.svg" />
				</FlexRow>

				<FlexColumn className="w-full md:w-1/2 justify-center">
					<H3 className="mb-10">Geen verborgen kosten</H3>

					<P>
						Aan een website hangen twee kosten vast: de kosten voor
						het ontwerp en een lage onderhoudskost. Andere kosten,
						zoals hosting, betaal je zelf. We nemen er dus geen
						ridicule marges op. Bij ons betaal je enkel voor wat
						echt nodig is.
					</P>
				</FlexColumn>
			</Container>
			<Container className="flex gap-10 my-15 flex-col-reverse md:flex-row">
				<FlexColumn className="w-full md:w-1/2 justify-center">
					<H3 className="mb-10">Gebruiksvriendelijke websites</H3>

					<P>
						De belangrijkste taak van jouw website is niet om te
						tonen hoe goed wij kunnen designen of hoe cool jullie
						bedrijf is. Nope. Echt niet. De belangrijkste taak is
						ervoor zorgen dat de bezoekers van jouw website snel en
						gemakkelijk de gewenste informatie vinden. Daar zorgen
						wij voor.
					</P>
				</FlexColumn>

				<FlexRow className="w-full md:w-1/2 justify-end">
					<Image
						alt=""
						width={500}
						height={500}
						src="/satisfaction.svg"
					/>
				</FlexRow>
			</Container>
		</HomepageSection>
	);
};

export default WhyUs;
