import React from "react";
import Image from "next/image";
import Container from "../layout/container";
import Cta from "../ui/cta";
import H1 from "../ui/h1";
import FlexRow from "../layout/flex-row";

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
						<div className="flex flex-col items-center shadow-3xl rounded-md border-2 border-black bg-white p-5 w-1/3">
							<Image
								width={100}
								height={100}
								src="/web-design.png"
								alt="Logo"
							/>
							<h3 className="text-2xl font-bold text-black mb-5">
								Functioneel design
							</h3>
							<p>
								Websites voor kleine bedrijven zien er snel oud
								uit. Onze website ontwerper zorgt altijd voor
								een mix tussen trendy en tijdloos design zodat
								je website er binnen vijf jaar nog altijd
								moderner uitziet dan die van je concurrentie.
							</p>
						</div>

						<div className="flex flex-col items-center shadow-3xl rounded-md border-2 border-black bg-white p-5 w-1/3">
							<Image
								width={100}
								height={100}
								src="/ab-testing.png"
								alt="Logo"
							/>
							<h3 className="text-2xl font-bold  text-black mb-5">
								Klantegerichte teksten
							</h3>
							<p>
								Websites voor kleine bedrijven zien er snel oud
								uit. Onze website ontwerper zorgt altijd voor
								een mix tussen trendy en tijdloos design zodat
								je website er binnen vijf jaar nog altijd
								moderner uitziet dan die van je concurrentie.
							</p>
						</div>

						<div className="flex flex-col items-center rounded-md border-2 border-black bg-white shadow-3xl p-5 w-1/3">
							<Image
								width={100}
								height={100}
								src="/structure.png"
								alt="Logo"
							/>
							<h3 className="text-2xl font-bold text-black mb-5">
								Gestructureerde website
							</h3>
							<p>
								Websites voor kleine bedrijven zien er snel oud
								uit. Onze website ontwerper zorgt altijd voor
								een mix tussen trendy en tijdloos design zodat
								je website er binnen vijf jaar nog altijd
								moderner uitziet dan die van je concurrentie.
							</p>
						</div>
					</FlexRow>
				</Container>
			</section>
		</>
	);
};

export default Hero;
