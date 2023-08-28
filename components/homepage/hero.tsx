import React from "react";
import Image from "next/image";
import Container from "../layout/container";
import Cta from "../ui/cta";
import H1 from "../ui/h1";
import FlexRow from "../layout/flex-row";
import SecondaryCta from "../ui/secondary-cta";
import FlexColumn from "../layout/flex-column";
import CustomLink from "../ui/link";

const Hero = () => {
	return (
		<>
			<section className="bg-red-100 relative">
				<Container className="flex flex-col justify-center items-center h-screen">
					<H1>Grootse websites voor kleine bedrijven</H1>
					<p className="text-center text-2xl font-light text-black my-10">
						Krijg een prachtige website op maat van jouw doelgroep.
						Geen gedoe. Snel klaar.
					</p>
					<Cta>Start met deze website</Cta>
				</Container>
				<Image
					src="/pattern-2.png"
					height={200}
					width={200}
					className="absolute top-full left-0 -translate-y-2/4 -translate-x-2/4 invert"
					alt="Pattern from the logo"
				/>
			</section>

			<section className="bg-red-100 py-20">
				<Container>
					<FlexRow className="justify-center mb-10">
						<h2 className="text-center text-4xl font-bold text-black">
							Betere websites voor hetzelfde geld
						</h2>
					</FlexRow>

					<FlexRow className="gap-10">
						<div className="flex flex-col items-center shadow-3xl rounded-md border-2 border-black bg-white py-8 px-10 w-1/3">
							<h3 className="text-2xl font-bold text-red-700 mb-10">
								Functioneel design
							</h3>
							<p className="text-black text-justify">
								Websites voor kleine bedrijven zien er snel oud
								uit. Onze website ontwerper zorgt altijd voor
								een mix tussen trendy en tijdloos design zodat
								je website er binnen vijf jaar nog altijd
								moderner uitziet dan die van je concurrentie.
							</p>
						</div>

						<div className="flex flex-col items-center shadow-3xl rounded-md border-2 border-black bg-white py-8 px-10 w-1/3">
							<h3 className="text-2xl font-bold  text-red-700 mb-10">
								Klantegerichte teksten
							</h3>
							<p className="text-black text-justify">
								Websites voor kleine bedrijven zien er snel oud
								uit. Onze website ontwerper zorgt altijd voor
								een mix tussen trendy en tijdloos design zodat
								je website er binnen vijf jaar nog altijd
								moderner uitziet dan die van je concurrentie.
							</p>
						</div>

						<div className="flex flex-col items-center rounded-md border-2 border-black bg-white shadow-3xl py-8 px-10 w-1/3">
							<h3 className="text-2xl font-bold text-red-700 mb-10">
								Gestructureerde website
							</h3>
							<p className="text-black text-justify">
								Websites voor kleine bedrijven zien er snel oud
								uit. Onze website ontwerper zorgt altijd voor
								een mix tussen trendy en tijdloos design zodat
								je website er binnen vijf jaar nog altijd
								moderner uitziet dan die van je concurrentie.
							</p>
						</div>
					</FlexRow>

					<FlexRow className="justify-center mt-10">
						<SecondaryCta>Meer over web design</SecondaryCta>
					</FlexRow>
				</Container>
			</section>
			<section className="bg-red-100">
				<Container>
					<FlexRow className="justify-center mb-10">
						<h2 className="text-center text-4xl font-bold text-black">
							Waarom kiezen voor Poppy Websites?
						</h2>
					</FlexRow>
				</Container>
				<Container className="flex gap-10">
					<FlexColumn className="w-1/2">
						<h3 className="text-2xl font-bold text-black mb-10">
							Team van drie experts
						</h3>

						<p className="text-black">
							De meeste webbureaus zijn ofwel heel technisch ofwel
							heel creatief. Hoe gek het ook klinkt, meestal
							hebben ze veel gelijkaardige profielen. Nochtans heb
							je maar drie profielen nodig: een developer, een
							designer en een copywriter. Laat dat nu net de
							profielen zijn die wij hebben. Dat betekent ook dat
							we nooit vele projecten tegelijk aannemen en dus
							altijd volledig gefocust zijn op jouw website.
						</p>
					</FlexColumn>

					<FlexRow className="w-1/2 justify-end">
						<Image
							alt=""
							width={500}
							height={500}
							src="/figure-1.svg"
						/>
					</FlexRow>
				</Container>

				<Container className="flex gap-10">
					<FlexRow className="w-1/2 justify-end">
						<Image
							alt=""
							width={500}
							height={500}
							src="/figure-1.svg"
						/>
					</FlexRow>

					<FlexColumn className="w-1/2">
						<h3 className="text-2xl font-bold text-black mb-10">
							Geen verborgen kosten
						</h3>

						<p className="text-black">
							Aan een website hangen twee kosten vast: de kosten
							voor het ontwerp en een lage onderhoudskost. Andere
							kosten, zoals hosting, betaal je zelf. We nemen er
							dus geen ridicule marges op. Bij ons betaal je enkel
							voor wat echt nodig is.
						</p>
					</FlexColumn>
				</Container>
				<Container className="flex gap-10">
					<FlexColumn className="w-1/2">
						<h3 className="text-2xl font-bold text-black mb-10">
							Gebruiksvriendelijke websites
						</h3>

						<p className="text-black">
							De belangrijkste taak van jouw website is niet om te
							tonen hoe goed wij kunnen designen of hoe cool
							jullie bedrijf is. Nope. Echt niet. De belangrijkste
							taak is ervoor zorgen dat de bezoekers van jouw
							website snel en gemakkelijk de gewenste informatie
							vinden. Daar zorgen wij voor.
						</p>
					</FlexColumn>

					<FlexRow className="w-1/2 justify-end">
						<Image
							alt=""
							width={500}
							height={500}
							src="/figure-1.svg"
						/>
					</FlexRow>
				</Container>
			</section>

			<section className="bg-red-100 py-20">
				<Container>
					<FlexRow className="justify-center mb-10">
						<h2 className="text-center text-4xl font-bold text-black">
							Deze lokale bedrijven kozen al voor Poppy Websites
						</h2>
					</FlexRow>
				</Container>
				<Container className="flex gap-10">
					<div className="flex flex-col items-center shadow-3xl rounded-md border-2 border-black bg-white py-8 px-10 w-1/3">
						<FlexRow className="w-full items-center content-center relative">
							<div className="rounded-full overflow-hidden border-2 border-black shadow-3xl">
								<img
									className="rounded-full w-12 object-cover h-12"
									src="/image.avif"
								/>
							</div>
							<h3 className="text-2xl font-bold text-black ml-5">
								Jurgen Gaalen
							</h3>
						</FlexRow>
						<p className="text-black text-justify mt-10">
							Websites voor kleine bedrijven zien er snel oud uit.
							Onze website ontwerper zorgt altijd voor een mix
							tussen trendy en tijdloos design zodat je website er
							binnen vijf jaar nog altijd moderner uitziet dan die
							van je concurrentie.
						</p>
						<p className="text-left w-full mt-3">
							<CustomLink href="#">Inspect RGH GmbH</CustomLink>
						</p>
					</div>

					<div className="flex flex-col items-center shadow-3xl rounded-md border-2 border-black bg-white py-8 px-10 w-1/3">
						<FlexRow className="w-full items-center content-center relative">
							<div className="rounded-full overflow-hidden border-2 border-black shadow-3xl">
								<img
									className="rounded-full w-12 object-cover h-12"
									src="/image.avif"
								/>
							</div>
							<h3 className="text-2xl font-bold text-black ml-5">
								Alex de Bruyne
							</h3>
						</FlexRow>
						<p className="text-black text-justify mt-10">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Omnis ipsa aliquid quas sed id eligendi nulla
							alias nisi reiciendis maxime quidem, aliquam libero
							dolorum expedita corrupti voluptas. Qui, est odit.
						</p>
						<p className="text-left w-full mt-3">
							<CustomLink href="#">Mini Onion</CustomLink>
						</p>
					</div>

					<div className="flex flex-col items-center shadow-3xl rounded-md border-2 border-black bg-white py-8 px-10 w-1/3">
						<FlexRow className="w-full items-center content-center relative">
							<div className="rounded-full overflow-hidden border-2 border-black shadow-3xl">
								<img
									className="rounded-full w-12 object-cover h-12"
									src="/image.avif"
								/>
							</div>
							<h3 className="text-2xl font-bold text-black ml-5">
								Maya Schmitt
							</h3>
						</FlexRow>
						<p className="text-black text-justify mt-10">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Omnis ipsa aliquid quas sed id eligendi nulla
							alias nisi reiciendis maxime quidem, aliquam libero
							dolorum expedita corrupti voluptas. Qui, est odit.
						</p>
						<p className="text-left w-full mt-3">
							<CustomLink href="#">Gluck ist richt</CustomLink>
						</p>
					</div>
				</Container>
			</section>
			<section className="bg-red-100 py-20">
				<Container>
					<FlexRow className="justify-center mb-10">
						<h2 className="text-center text-4xl font-bold text-black">
							Hoe gaan we samen aan de slag?
						</h2>
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
									<h3 className="text-2xl font-bold text-black">
										Wensen bespreken
									</h3>
									<p>
										We komen samen om jou te leren kennen,
										de noden van jouw klanten te bespreken
										en jouw wensen voor de website op papier
										te zetten.
									</p>
								</FlexColumn>
							</FlexRow>

							<FlexRow>
								<div className="rounded-full bg-red-700 text-white w-[50px] h-[50px] shrink-0 flex items-center justify-center text-2xl">
									2
								</div>
								<FlexColumn className="ml-10">
									<h3 className="text-2xl font-bold text-black">
										Voorstel overleggen
									</h3>
									<p>
										Zodra we van jouw de nodige informatie
										ontvangen hebben, gaan we aan de slag.
										Binnen de twee weken ontvang je een
										voorstel voor de structuur, het ontwerp
										en de tekst.
									</p>
								</FlexColumn>
							</FlexRow>

							<FlexRow>
								<div className="rounded-full bg-red-700 text-white w-[50px] h-[50px] shrink-0 flex items-center justify-center text-2xl">
									3
								</div>
								<FlexColumn className="ml-10">
									<h3 className="text-2xl font-bold text-black">
										Website afwerken
									</h3>
									<p>
										Als we vlot feedback van jou ontvangen,
										kunnen we de website snel afwerken en
										lanceren. Als er een goede communicatie
										is, duurt het volledige proces maximaal
										4 weken.
									</p>
								</FlexColumn>
							</FlexRow>
						</FlexColumn>
						<FlexColumn className="w-1/2 justify-center">
							<Image
								alt=""
								width={500}
								height={500}
								src="/figure-4.svg"
							/>
						</FlexColumn>
					</FlexRow>
				</Container>
				<Container>
					<FlexRow className="justify-center mb-10">
						<Cta>Bespreek de mogelijkheden</Cta>
					</FlexRow>
				</Container>
			</section>

			<section className="py-20">
				<Container>
					<FlexRow className="justify-center mb-10">
						<h2 className="text-center text-4xl font-bold text-black">
							Hulp nodig met andere online diensten?
						</h2>
					</FlexRow>
				</Container>

				<Container className="flex gap-10">
					<div className="flex flex-col items-center shadow-3xl rounded-md border-2 border-black bg-white py-8 px-10 w-1/3">
						<FlexRow className="w-full items-center content-center relative">
							<h3 className="text-2xl font-bold text-black">
								Online reputatie optimaliseren
							</h3>
						</FlexRow>
						<p className="text-black text-justify mt-10">
							Online zijn als bedrijf is meer dan een goede
							website hebben. Hoe zit het met je Google
							Bedrijfsprofiel? Heb je een pagina op Trip Advisor
							of Trustpilot? Wij zorgen ervoor dat al je profielen
							compleet zijn en helpen je omgaan met (onterecht)
							slechte reviews.
						</p>
						<p className="text-left w-full mt-3">
							<CustomLink href="#">Meer info</CustomLink>
						</p>
					</div>

					<div className="flex flex-col items-center shadow-3xl rounded-md border-2 border-black bg-white py-8 px-10 w-1/3">
						<FlexRow className="w-full items-center content-center relative">
							<h3 className="text-2xl font-bold text-black">
								Design en templates
							</h3>
						</FlexRow>
						<p className="text-black text-justify mt-10">
							Wil je een nieuw logo en templates die passen bij je
							nieuwe website? We kunnen je helpen met sjablonen
							voor presentaties, sociale media en allerlei andere
							online communicatie. Zo zorg je voor een prachtig
							geheel op alle online kanalen.
						</p>
						<p className="text-left w-full mt-3">
							<CustomLink href="#">Meer info</CustomLink>
						</p>
					</div>

					<div className="flex flex-col items-center shadow-3xl rounded-md border-2 border-black bg-white py-8 px-10 w-1/3">
						<FlexRow className="w-full items-center content-center relative">
							<h3 className="text-2xl font-bold text-black">
								Content marketing strategie
							</h3>
						</FlexRow>
						<p className="text-black text-justify mt-10">
							Wil je meer spreken over je bedrijf via blogs of
							sociale media? Een goede freelancer is helaas
							onbetaalbaar voor kleine bedrijven. Wij helpen je
							graag op weg met SEO, ideëen en structuur zodat je
							het zelf kan aanpakken.
						</p>
						<p className="text-left w-full mt-3">
							<CustomLink href="#">Meer info</CustomLink>
						</p>
					</div>
				</Container>
			</section>

			<section className="bg-red-100 py-20">
				<Container>
					<FlexRow className="justify-center mb-10">
						<h2 className="text-center text-4xl font-bold text-black">
							Wie zijn de experts?
						</h2>
					</FlexRow>
				</Container>

				<Container>
					<FlexColumn>
						<FlexRow className="items-center shadow-3xl rounded-md border-2 border-black bg-white w-full">
							<FlexColumn className="w-2/3 content-center relative px-10 py-8">
								<h3 className="text-2xl font-bold text-black">
									Kjell Vandevyvere
								</h3>
								<p className="text-black text-justify mt-10">
									Wil je meer spreken over je bedrijf via
									blogs of sociale media? Een goede freelancer
									is helaas onbetaalbaar voor kleine
									bedrijven. Wij helpen je graag op weg met
									SEO, ideëen en structuur zodat je het zelf
									kan aanpakken.
								</p>
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
								<h3 className="text-2xl font-bold text-black">
									Amer Sikira
								</h3>
								<p className="text-black text-justify mt-10">
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
								</p>
							</FlexColumn>
						</FlexRow>

						<FlexRow className="items-center shadow-3xl rounded-md border-2 border-black bg-white w-full mt-10">
							<FlexColumn className="w-2/3 content-center relative px-10 py-8">
								<h3 className="text-2xl font-bold text-black">
									Edin Bjelopoljak
								</h3>
								<p className="text-black text-justify mt-10">
									Edin werkt al jaren samen met Amer als
									creatieve partner. Naast ervaring als
									marketing/ economisch consultant voor
									startups heeft hij een fijn oog voor design.
									Dankzij zijn creatieve mix van marketing en
									strategisch design bouwen we keer op keer
									websites die positief opvallen omwille van
									hun perfectie.
								</p>
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
			</section>
			<section className="bg-red-900 py-20">
				<Container>
					<FlexColumn className="content-center justify-center mb-10">
						<h2 className="text-center text-4xl font-bold text-white">
							Ook jij verdient een grootse website
						</h2>
						<p className="text-center text-xl  text-white">
							Poppy websites maakt voor jou een website waar
							concurrenten en leveranciers jaloers op zullen zijn
						</p>
					</FlexColumn>

					<FlexRow className="text-white gap-20">
						<div>
							Gebruiksvriendelijke websites met tijdloze designs
						</div>
						<div>Leuke teksten waarbij de klant centraal staat</div>

						<div>Duidelijke communicatie van start tot einde</div>
					</FlexRow>

					<FlexRow className="justify-center mt-10">
						<Cta>Bespreek de mogelijkheden</Cta>
					</FlexRow>
				</Container>
			</section>
		</>
	);
};

export default Hero;
