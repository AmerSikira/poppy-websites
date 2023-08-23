import React from "react";
import Image from "next/image";
import Container from "../layout/container";
import Cta from "../ui/cta";
import H1 from "../ui/h1";
import FlexRow from "../layout/flex-row";
import SecondaryCta from "../ui/secondary-cta";
import FlexColumn from "../layout/flex-column";

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
							<h3 className="text-2xl font-bold text-black mb-10">
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
							<h3 className="text-2xl font-bold  text-black mb-10">
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
							<h3 className="text-2xl font-bold text-black mb-10">
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

			<section className="bg-red-100">
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
					</div>
				</Container>
			</section>
		</>
	);
};

export default Hero;
