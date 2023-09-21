import HomepageSection from "../layout/homepage-section";
import Container from "../layout/container";
import FlexRow from "../layout/flex-row";
import H2 from "../ui/heading/h2";
import FlexColumn from "../layout/flex-column";
import H3 from "../ui/heading/h3";
import P from "../ui/text/p";
import Image from "next/image";
import Cta from "../ui/button/cta";

const Steps = () => {
	return (
		<HomepageSection>
			<Container>
				<FlexRow className="justify-center mb-10">
					<H2>Hoe gaan we samen aan de slag?</H2>
				</FlexRow>
			</Container>

			<Container>
				<FlexRow>
					<FlexColumn className="w-full md:w-1/2 justify-center">
						<FlexRow remainRow={true} className="mb-10 stepper">
							<div className="rounded-full bg-red-700 text-white w-[50px] h-[50px] shrink-0 flex items-center justify-center text-2xl">
								1
							</div>
							<FlexColumn className="ml-10">
								<H3 className="mb-2">Wensen bespreken</H3>
								<P>
									{`We komen samen om jou te leren kennen zodat we kunnen inschatten hoe klanten online omgaan met jouw bedrijf.`}
								</P>
							</FlexColumn>
						</FlexRow>

						<FlexRow remainRow={true} className="mb-10 stepper">
							<div className="rounded-full bg-red-700 text-white w-[50px] h-[50px] shrink-0 flex items-center justify-center text-2xl">
								2
							</div>
							<FlexColumn className="ml-10">
								<H3 className="mb-2">Voorstel overleggen</H3>
								<P>
									{`We stellen een plan op met de belangrijkste kanalen, de informatie die je wil delen, en passende teksten die in lijn liggen met jouw schrijfstijl.`}
								</P>
							</FlexColumn>
						</FlexRow>

						<FlexRow remainRow={true}>
							<div className="rounded-full bg-red-700 text-white w-[50px] h-[50px] shrink-0 flex items-center justify-center text-2xl">
								3
							</div>
							<FlexColumn className="ml-10">
								<H3 className="mb-2">Reputatie hoog houden</H3>
								<P>
									Na feedback vullen we jouw profielen aan en
									zorgen we er ook voor dat de informatie up
									to date blijft. We kijken ook regelmatig of
									er nieuwe mogelijkheden of kanalen zijn om
									je bedrijf in de kijker te zetten.
								</P>
							</FlexColumn>
						</FlexRow>
					</FlexColumn>
					<FlexColumn className="hidden md:flex md:w-1/2 justify-center">
						<Image
							alt=""
							width={500}
							height={500}
							src="/steps.svg"
						/>
					</FlexColumn>
				</FlexRow>
			</Container>
			<Container>
				<FlexRow className="justify-center mb-10 mt-10">
					<Cta>Bespreek jouw wensen</Cta>
				</FlexRow>
			</Container>
		</HomepageSection>
	);
};

export default Steps;
