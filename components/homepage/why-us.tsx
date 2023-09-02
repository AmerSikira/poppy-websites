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
			id="over-ons"
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
						De meeste webbureaus hebben veel gelijkaardige
						profielen. Wij pakken het anders aan. We zijn een klein
						team met zeer aanvullende skillsets:{" "}
						<strong>
							een developer, een designer en een copywriter
						</strong>
						.
					</P>
				</FlexColumn>

				<FlexRow className="w-full md:w-1/2 mt-5 md:mt-0 justify-end">
					<Image alt="" width={500} height={500} src="/team.svg" />
				</FlexRow>
			</Container>

			<Container className="flex gap-10 my-15 relative md:flex-row flex-col">
				<FlexRow className="w-full md:w-1/2 justify-start">
					<Image alt="" width={500} height={500} src="/focus.svg" />
				</FlexRow>

				<FlexColumn className="w-full md:w-1/2 justify-center">
					<H3 className="mb-10">Jij staat centraal</H3>

					<P>
						Als klein team kiezen we ervoor om weinig projecten
						tegelijk aan te nemen. Zo blijven we altijd volledig
						gefocust op jouw website en kunnen we het{" "}
						<strong>resultaat in enkele weken</strong> in plaats van
						enkele maanden opleveren.
					</P>
				</FlexColumn>
			</Container>

			<Container className="flex gap-10 my-15 relative md:flex-row flex-col-reverse">
				<FlexColumn className="w-full md:w-1/2 justify-center">
					<H3 className="mb-10">Geen verborgen kosten</H3>

					<P>
						<strong>
							Je betaalt enkel voor wat echt nodig is:
						</strong>{" "}
						een website ontwerpen. Onderhoud en website analyse zijn
						optioneel met transparante kosten. Andere kosten, zoals
						hosting, betaal je zelf. We nemen er dus geen ridicule
						marges op.
					</P>
				</FlexColumn>

				<FlexRow className="w-full md:w-1/2 justify-end">
					<Image alt="" width={500} height={500} src="/savings.svg" />
				</FlexRow>
			</Container>
			<Container className="flex gap-10 my-15 flex-col md:flex-row">
				<FlexRow className="w-full md:w-1/2 justify-start">
					<Image
						alt=""
						width={500}
						height={500}
						src="/satisfaction.svg"
					/>
				</FlexRow>
				<FlexColumn className="w-full md:w-1/2 justify-center">
					<H3 className="mb-10">Gebruiksvriendelijke websites</H3>

					<P>
						De belangrijkste taak van jouw website is niet om te
						tonen hoe goed wij kunnen designen of hoe cool jullie
						bedrijf is. Echt niet. De belangrijkste taak is ervoor
						zorgen dat website bezoekers{" "}
						<strong>
							snel en gemakkelijk de gewenste informatie vinden.
						</strong>
					</P>
				</FlexColumn>
			</Container>
		</HomepageSection>
	);
};

export default WhyUs;
