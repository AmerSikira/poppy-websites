import React from "react";
import Image from "next/image";
import Container from "../layout/container";
import Cta from "../ui/button/cta";
import H1 from "../ui/heading/h1";
import H2 from "../ui/heading/h2";
import FlexRow from "../layout/flex-row";
import SecondaryCta from "../ui/button/secondary-cta";
import FlexColumn from "../layout/flex-column";
import CustomLink from "../ui/link";
import HomepageSection from "../layout/homepage-section";
import Subheading from "../ui/text/subheading";
import Card from "../ui/card/card";
import H3 from "../ui/heading/h3";
import P from "../ui/text/p";

const Hero = () => {
	return (
		<>
			<HomepageSection className="relative">
				<Container className="flex flex-col justify-center items-center h-screen">
					<H1>Grootse websites voor kleine bedrijven</H1>
					<Subheading>
						Krijg een prachtige website op maat van jouw doelgroep.
						Geen gedoe. Snel klaar.
					</Subheading>
					<Cta>Start met deze website</Cta>
				</Container>
				<Image
					src="/pattern-2.png"
					height={200}
					width={200}
					className="absolute top-full left-0 -translate-y-2/4 -translate-x-2/4 invert"
					alt="Pattern from the logo"
				/>
			</HomepageSection>

			<HomepageSection>
				<Container>
					<FlexRow className="justify-center mb-10">
						<H2>Betere websites voor hetzelfde geld</H2>
					</FlexRow>

					<FlexRow className="gap-10">
						<Card>
							<H3>Functioneel design</H3>
							<P align="text-justify">
								Websites voor kleine bedrijven zien er snel oud
								uit. Onze website ontwerper zorgt altijd voor
								een mix tussen trendy en tijdloos design zodat
								je website er binnen vijf jaar nog altijd
								moderner uitziet dan die van je concurrentie.
							</P>
						</Card>

						<Card>
							<H3>Klantegerichte teksten</H3>
							<P align="text-justify">
								Websites voor kleine bedrijven zien er snel oud
								uit. Onze website ontwerper zorgt altijd voor
								een mix tussen trendy en tijdloos design zodat
								je website er binnen vijf jaar nog altijd
								moderner uitziet dan die van je concurrentie.
							</P>
						</Card>

						<Card>
							<H3>Gestructureerde website</H3>
							<P align="text-justify">
								Websites voor kleine bedrijven zien er snel oud
								uit. Onze website ontwerper zorgt altijd voor
								een mix tussen trendy en tijdloos design zodat
								je website er binnen vijf jaar nog altijd
								moderner uitziet dan die van je concurrentie.
							</P>
						</Card>
					</FlexRow>

					<FlexRow className="justify-center mt-10">
						<SecondaryCta>Meer over web design</SecondaryCta>
					</FlexRow>
				</Container>
			</HomepageSection>
			<HomepageSection background="bg-white">
				<Container>
					<FlexRow className="justify-center mb-10">
						<H2>Waarom kiezen voor Poppy Websites?</H2>
					</FlexRow>
				</Container>
				<Container className="flex gap-10 min-h-half my-20">
					<FlexColumn className="w-1/2 justify-center">
						<H3>Team van drie experts</H3>

						<P>
							De meeste webbureaus zijn ofwel heel technisch ofwel
							heel creatief. Hoe gek het ook klinkt, meestal
							hebben ze veel gelijkaardige profielen. Nochtans heb
							je maar drie profielen nodig: een developer, een
							designer en een copywriter. Laat dat nu net de
							profielen zijn die wij hebben. Dat betekent ook dat
							we nooit vele projecten tegelijk aannemen en dus
							altijd volledig gefocust zijn op jouw website.
						</P>
					</FlexColumn>

					<FlexRow className="w-1/2 justify-end">
						<Image
							alt=""
							width={500}
							height={500}
							src="/team.svg"
						/>
					</FlexRow>
				</Container>

				<Container className="flex gap-10 min-h-half my-20">
					<FlexRow className="w-1/2 justify-end">
						<Image
							alt=""
							width={500}
							height={500}
							src="/savings.svg"
						/>
					</FlexRow>

					<FlexColumn className="w-1/2 justify-center">
						<H3>Geen verborgen kosten</H3>

						<P>
							Aan een website hangen twee kosten vast: de kosten
							voor het ontwerp en een lage onderhoudskost. Andere
							kosten, zoals hosting, betaal je zelf. We nemen er
							dus geen ridicule marges op. Bij ons betaal je enkel
							voor wat echt nodig is.
						</P>
					</FlexColumn>
				</Container>
				<Container className="flex gap-10 min-h-half my-20">
					<FlexColumn className="w-1/2 justify-center">
						<H3>Gebruiksvriendelijke websites</H3>

						<P>
							De belangrijkste taak van jouw website is niet om te
							tonen hoe goed wij kunnen designen of hoe cool
							jullie bedrijf is. Nope. Echt niet. De belangrijkste
							taak is ervoor zorgen dat de bezoekers van jouw
							website snel en gemakkelijk de gewenste informatie
							vinden. Daar zorgen wij voor.
						</P>
					</FlexColumn>

					<FlexRow className="w-1/2 justify-end">
						<Image
							alt=""
							width={500}
							height={500}
							src="/satisfaction.svg"
						/>
					</FlexRow>
				</Container>
			</HomepageSection>

			<HomepageSection>
				<Container>
					<FlexRow className="justify-center mb-10">
						<H2>
							Deze lokale bedrijven kozen al voor Poppy Websites
						</H2>
					</FlexRow>
				</Container>
				<Container className="flex gap-10">
					<Card>
						<FlexRow className="w-full items-center content-center relative">
							<div className="rounded-full overflow-hidden border-2 border-black shadow-3xl">
								<img
									className="rounded-full w-12 object-cover h-12"
									src="/image.avif"
								/>
							</div>
							<H3 className="ml-5">Jurgen Gaalen</H3>
						</FlexRow>
						<P className="mt-10" align="text-justify">
							Websites voor kleine bedrijven zien er snel oud uit.
							Onze website ontwerper zorgt altijd voor een mix
							tussen trendy en tijdloos design zodat je website er
							binnen vijf jaar nog altijd moderner uitziet dan die
							van je concurrentie.
						</P>
						<P className="w-full mt-3" align="text-left">
							<CustomLink href="#">Inspect RGH GmbH</CustomLink>
						</P>
					</Card>

					<Card>
						<FlexRow className="w-full items-center content-center relative">
							<div className="rounded-full overflow-hidden border-2 border-black shadow-3xl">
								<img
									className="rounded-full w-12 object-cover h-12"
									src="/image.avif"
								/>
							</div>
							<H3 className="ml-5">Alex de Bruyne</H3>
						</FlexRow>
						<P className="mt-10" align="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Omnis ipsa aliquid quas sed id eligendi nulla
							alias nisi reiciendis maxime quidem, aliquam libero
							dolorum expedita corrupti voluptas. Qui, est odit.
						</P>
						<P className="w-full mt-3" align="text-left">
							<CustomLink href="#">Mini Onion</CustomLink>
						</P>
					</Card>

					<Card>
						<FlexRow className="w-full items-center content-center relative">
							<div className="rounded-full overflow-hidden border-2 border-black shadow-3xl">
								<img
									className="rounded-full w-12 object-cover h-12"
									src="/image.avif"
								/>
							</div>
							<H3 className="ml-5">Maya Schmitt</H3>
						</FlexRow>
						<P className="mt-10" align="text-justify">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Omnis ipsa aliquid quas sed id eligendi nulla
							alias nisi reiciendis maxime quidem, aliquam libero
							dolorum expedita corrupti voluptas. Qui, est odit.
						</P>
						<P className="w-full mt-3" align="text-left">
							<CustomLink href="#">Gluck ist richt</CustomLink>
						</P>
					</Card>
				</Container>
			</HomepageSection>
			<HomepageSection>
				<Container>
					<FlexRow className="justify-center mb-10">
						<H2>Hoe gaan we samen aan de slag?</H2>
					</FlexRow>
				</Container>

				<Container>
					<FlexRow>
						<FlexColumn className="w-1/2 justify-center">
							<FlexRow>
								<div className="rounded-full bg-red-700 text-white w-[50px] h-[50px] shrink-0 flex items-center justify-center text-2xl">
									1
								</div>
								<FlexColumn className="ml-10">
									<H3>Wensen bespreken</H3>
									<P>
										We komen samen om jou te leren kennen,
										de noden van jouw klanten te bespreken
										en jouw wensen voor de website op papier
										te zetten.
									</P>
								</FlexColumn>
							</FlexRow>

							<FlexRow>
								<div className="rounded-full bg-red-700 text-white w-[50px] h-[50px] shrink-0 flex items-center justify-center text-2xl">
									2
								</div>
								<FlexColumn className="ml-10">
									<H3>Voorstel overleggen</H3>
									<P>
										Zodra we van jouw de nodige informatie
										ontvangen hebben, gaan we aan de slag.
										Binnen de twee weken ontvang je een
										voorstel voor de structuur, het ontwerp
										en de tekst.
									</P>
								</FlexColumn>
							</FlexRow>

							<FlexRow>
								<div className="rounded-full bg-red-700 text-white w-[50px] h-[50px] shrink-0 flex items-center justify-center text-2xl">
									3
								</div>
								<FlexColumn className="ml-10">
									<H3>Website afwerken</H3>
									<P>
										Als we vlot feedback van jou ontvangen,
										kunnen we de website snel afwerken en
										lanceren. Als er een goede communicatie
										is, duurt het volledige proces maximaal
										4 weken.
									</P>
								</FlexColumn>
							</FlexRow>
						</FlexColumn>
						<FlexColumn className="w-1/2 justify-center">
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
					<FlexRow className="justify-center mb-10">
						<Cta>Bespreek de mogelijkheden</Cta>
					</FlexRow>
				</Container>
			</HomepageSection>

			<HomepageSection>
				<Container>
					<FlexRow className="justify-center mb-10">
						<H2>Hulp nodig met andere online diensten?</H2>
					</FlexRow>
				</Container>

				<Container className="flex gap-10">
					<Card className="justify-between">
						<FlexRow className="w-full items-center content-center relative">
							<H3>Online reputatie optimaliseren</H3>
						</FlexRow>
						<P className="mt-10" align="text-justify">
							Online zijn als bedrijf is meer dan een goede
							website hebben. Hoe zit het met je Google
							Bedrijfsprofiel? Heb je een pagina op Trip Advisor
							of Trustpilot? Wij zorgen ervoor dat al je profielen
							compleet zijn en helpen je omgaan met (onterecht)
							slechte reviews.
						</P>
						<P className="w-full mt-3">
							<CustomLink href="#">Meer info</CustomLink>
						</P>
					</Card>

					<Card className="justify-between">
						<FlexRow className="w-full items-center content-center relative">
							<H3>Design en templates</H3>
						</FlexRow>
						<P className="mt-10" align="text-justify">
							Wil je een nieuw logo en templates die passen bij je
							nieuwe website? We kunnen je helpen met sjablonen
							voor presentaties, sociale media en allerlei andere
							online communicatie. Zo zorg je voor een prachtig
							geheel op alle online kanalen.
						</P>
						<P className="w-full mt-3">
							<CustomLink href="#">Meer info</CustomLink>
						</P>
					</Card>

					<Card className="justify-between">
						<FlexRow className="w-full items-center content-center relative">
							<h3 className="text-2xl font-bold text-black">
								Content marketing strategie
							</h3>
						</FlexRow>
						<P className="mt-10" align="text-justify">
							Wil je meer spreken over je bedrijf via blogs of
							sociale media? Een goede freelancer is helaas
							onbetaalbaar voor kleine bedrijven. Wij helpen je
							graag op weg met SEO, ideëen en structuur zodat je
							het zelf kan aanpakken.
						</P>
						<P className="w-full mt-3">
							<CustomLink href="#">Meer info</CustomLink>
						</P>
					</Card>
				</Container>
			</HomepageSection>

			<HomepageSection>
				<Container>
					<FlexRow className="justify-center mb-10">
						<H2>Wie zijn de experts?</H2>
					</FlexRow>
				</Container>

				<Container>
					<FlexColumn>
						<FlexRow className="items-center shadow-3xl rounded-md border-2 border-black bg-white w-full">
							<FlexColumn className="w-2/3 content-center relative px-10 py-8">
								<H3>Kjell Vandevyvere</H3>
								<P className="mt-10" align="text-justify">
									Wil je meer spreken over je bedrijf via
									blogs of sociale media? Een goede freelancer
									is helaas onbetaalbaar voor kleine
									bedrijven. Wij helpen je graag op weg met
									SEO, ideëen en structuur zodat je het zelf
									kan aanpakken.
								</P>
							</FlexColumn>

							<FlexColumn className="w-1/3 bg-gradient-radial from-red-200 to-transparent relative overflow-hidden">
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
							<FlexColumn className="w-1/3 bg-gradient-radial from-red-200 to-transparent relative overflow-hidden">
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
							<FlexColumn className="w-2/3 content-center relative px-10 py-8">
								<H3>Amer Sikira</H3>
								<P className="mt-10" align="text-justify">
									Amer bouwt al jaren software en websites
									voor bedrijven uit verschillende Europese
									landen. In Bosnië maakte hij één van de
									grootste nieuwswebsites en hij ontwierp
									software voor belangrijke banken. Je mag er
									dus zeker van zijn dat jouw website in goede
									handen is. Amer’s zus woont trouwens al lang
									in België en ook hij komt graag onze
									chocolade, wafels en Franse frietjes
									proeven.
								</P>
							</FlexColumn>
						</FlexRow>

						<FlexRow className="items-center shadow-3xl rounded-md border-2 border-black bg-white w-full mt-10">
							<FlexColumn className="w-2/3 content-center relative px-10 py-8">
								<H3>Edin Bjelopoljak</H3>
								<P className="mt-10" align="text-justify">
									Edin werkt al jaren samen met Amer als
									creatieve partner. Naast ervaring als
									marketing/ economisch consultant voor
									startups heeft hij een fijn oog voor design.
									Dankzij zijn creatieve mix van marketing en
									strategisch design bouwen we keer op keer
									websites die positief opvallen omwille van
									hun perfectie.
								</P>
							</FlexColumn>

							<FlexColumn className="w-1/3 bg-gradient-radial from-red-200 to-transparent relative overflow-hidden">
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
					</FlexColumn>
				</Container>
			</HomepageSection>
			<HomepageSection background="bg-red-900">
				<Container>
					<FlexColumn className="content-center justify-center mb-10">
						<H2 className="text-white">
							Ook jij verdient een grootse website
						</H2>
						<P className="text-xl  text-white" align="text-center">
							Poppy websites maakt voor jou een website waar
							concurrenten en leveranciers jaloers op zullen zijn
						</P>
					</FlexColumn>

					<FlexRow className="text-white gap-20">
						<ul className="list-disc flex gap-20">
							<li>
								Gebruiksvriendelijke websites met tijdloze
								designs
							</li>
							<li>
								Leuke teksten waarbij de klant centraal staat
							</li>
							<li>Duidelijke communicatie van start tot einde</li>
						</ul>
					</FlexRow>

					<FlexRow className="justify-center mt-10">
						<Cta>Bespreek de mogelijkheden</Cta>
					</FlexRow>
				</Container>
			</HomepageSection>
		</>
	);
};

export default Hero;
