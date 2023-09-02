import HomepageSection from "../layout/homepage-section";
import Container from "../layout/container";
import FlexRow from "../layout/flex-row";
import H2 from "../ui/heading/h2";
import FlexColumn from "../layout/flex-column";
import Image from "next/image";
import H3 from "../ui/heading/h3";
import P from "../ui/text/p";

const Experts = () => {
	return (
		<HomepageSection>
			<Container>
				<FlexRow className="justify-center mb-10">
					<H2>Wie zijn de experts?</H2>
				</FlexRow>
			</Container>

			<Container>
				<FlexColumn>
					<FlexRow className="items-center shadow-3xl rounded-md border-2 border-black bg-white w-full flex-col-reverse">
						<FlexColumn className="w-full md:w-2/3 content-center relative px-10 py-8">
							<H3>Kjell Vandevyvere</H3>
							<P className="mt-10" align="text-justify">
								Kjell verzorgt je teksten. Met meer dan vijf
								jaar ervaring als content marketeer en
								copywriter weet hij hoe je overtuigende teksten
								schrijft. Zijn passie ligt bij teksten voor
								websites. Hij schreef onder andere voor
								Accountable, Winwinner, Xenn en tientallen
								internationale bedrijven. Nu wil hij graag zijn
								kennis delen om lokale bedrijven uit zijn
								geliefde Ieper vooruit te helpen.
							</P>
						</FlexColumn>

						<FlexColumn className="w-full md:w-1/3 bg-gradient-radial from-red-200 to-transparent relative overflow-hidden">
							<Image
								src="/pattern-2.png"
								height={200}
								width={200}
								className="absolute top-0 right-0 z-0 invert translate-x-1/3 -translate-y-1/3"
								alt="Pattern from the logo"
							/>
							<Image
								src="/kjell.png"
								alt=""
								width={500}
								height={500}
								className="z-10 relative"
							/>
						</FlexColumn>
					</FlexRow>

					<FlexRow className="items-center shadow-3xl rounded-md border-2 border-black bg-white w-full mt-10">
						<FlexColumn className="w-full md:w-1/3 bg-gradient-radial from-red-200 to-transparent relative overflow-hidden">
							<Image
								src="/pattern-2.png"
								height={200}
								width={200}
								className="absolute top-0 left-0 z-0 invert -translate-x-1/3 -translate-y-1/3"
								alt="Pattern from the logo"
							/>
							<Image
								src="/amer.png"
								alt=""
								width={500}
								height={500}
								className="z-10 relative grayscale"
							/>
						</FlexColumn>
						<FlexColumn className="w-full md:w-2/3 content-center relative px-10 py-8">
							<H3>Amer Sikira</H3>
							<P className="mt-10" align="text-justify">
								Amer bouwt al jaren software en websites voor
								bedrijven uit verschillende Europese landen. In
								Bosnië maakte hij één van de grootste
								nieuwswebsites en hij ontwierp software voor
								belangrijke banken. Je mag er dus zeker van zijn
								dat jouw website in goede handen is. Amer’s zus
								woont trouwens al lang in België en ook hij komt
								graag onze chocolade, wafels en bier proeven.
							</P>
						</FlexColumn>
					</FlexRow>

					<FlexRow className="items-center shadow-3xl rounded-md border-2 border-black bg-white w-full mt-10 flex-col-reverse">
						<FlexColumn className="w-full md:w-2/3 content-center relative px-10 py-8">
							<H3>Edin Bjelopoljak</H3>
							<P className="mt-10" align="text-justify">
								Edin werkt al jaren samen met Amer als creatieve
								partner. Naast ervaring als marketing/
								economisch consultant voor startups heeft hij
								een fijn oog voor design. Dankzij zijn creatieve
								mix van marketing en strategisch design bouwen
								we keer op keer websites die positief opvallen
								omwille van hun perfectie.
							</P>
						</FlexColumn>

						<FlexColumn className="w-full md:w-1/3 bg-gradient-radial from-red-200 to-transparent relative overflow-hidden">
							<Image
								src="/pattern-2.png"
								height={200}
								width={200}
								className="absolute top-0 right-0 z-0 invert translate-x-1/3 -translate-y-1/3"
								alt="Pattern from the logo"
							/>
							<Image
								src="/edin.png"
								alt=""
								width={500}
								height={500}
								className="z-10 relative grayscale"
							/>
						</FlexColumn>
					</FlexRow>
				</FlexColumn>
			</Container>
		</HomepageSection>
	);
};

export default Experts;
