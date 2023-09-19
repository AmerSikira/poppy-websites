import Container from "@/components/layout/container";
import HomepageSection from "@/components/layout/homepage-section";
import H2 from "@/components/ui/heading/h2";
import H3 from "@/components/ui/heading/h3";
import CustomLink from "@/components/ui/link";
import P from "@/components/ui/text/p";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
	return (
		<>
			<HomepageSection background="bg-white">
				<Container>
					<H2>Privacybeleid</H2>
					<P>
						{`Dit privacybeleid geldt voor de websites
						"poppywebsites.be" en "blog.poppywebsites.be," beheerd
						door:`}
					</P>
					<P className="mt-5">
						<strong>Volledige juridische naam:</strong> Vandevyvere,
						Kjell <br />
						<strong>Adres:</strong> Ligywijk 123, 8900 Ieper,{" "}
						{`België`} <br />
						<strong>E-mail:</strong> hallo@poppywebsites.be <br />
						<strong>Telefoon:</strong> +32456181764
					</P>
					<H3 className="mt-10">
						Gegevensverzameling en -verwerking
					</H3>

					<P className="mt-5">
						Wij verzamelen of verwerken geen persoonlijke gegevens
						van bezoekers op onze websites, behalve voor het
						volgende:
					</P>

					<P className="mt-5">
						<strong>Google Analytics:</strong> We gebruiken Google
						Analytics om anonieme gegevens te verzamelen voor
						website-analyse. Deze dienst valt onder het
						privacybeleid van Google.
					</P>

					<P className="mt-5">
						<strong>E-mailcontact:</strong> Als je ons wenst te
						contacteren via e-mail door te klikken op deze link:{" "}
						<CustomLink href="mailto:hallo@poppywebsites.be">
							hallo@poppywebsites.be
						</CustomLink>{" "}
						of gelijk welke andere link die een e-mail opent, houden
						we alle gegevens uit die e-mail bij voor
						communicatiedoeleinden. Dit gebeurt met jouw
						toestemming.{" "}
					</P>
					<H3 className="mt-10">Gegevensbewaring</H3>
					<P>
						Wij bewaren e-mails die naar ons zijn verzonden via{" "}
						<CustomLink href="mailto:hallo@poppywebsites.be">
							hallo@poppywebsites.be
						</CustomLink>{" "}
						gedurende minimaal 6 maanden.
					</P>

					<H3 className="mt-10">Gegevensdeling</H3>

					<P className="mt-5">
						Wij delen geen gegevens met derden, behalve Google
						Analytics, dat anonieme gegevens verzamelt voor
						website-analyse.
					</P>

					<H3 className="mt-10">Gebruikersrechten</H3>
					<P>
						Je hebt het recht om:
						<ul className="list-disc pl-10 mt-3">
							<li>
								Toegang te krijgen tot de persoonlijke gegevens
								die we mogelijk over jou hebben via
								e-mailcommunicatie.
							</li>
							<li>
								Verzoek tot rectificatie of verwijdering van
								jouw persoonlijke gegevens die in ons bezit zijn
							</li>
						</ul>
					</P>

					<H3 className="mt-10">Opt-out van Google Analytics</H3>
					<P className="mt-5">
						{`Je kan ervoor kiezen om niet te worden gevolgd door
						Google Analytics door op "Alles weigeren" te klikken op
						de GDPR-banner die op onze websites wordt weergegeven.`}
					</P>

					<H3 className="mt-10">Beveiligingsmaatregelen</H3>
					<P className="mt-5">
						Wij slaan geen persoonlijke gegevens op onze websites
						op; daarom hebben we geen specifieke
						beveiligingsmaatregelen nodig, behalve de standaard
						beveiligingspraktijken voor websites.
					</P>

					<H3 className="mt-10">Contactgegevens</H3>
					<P className="mt-5">
						Voor privacygerelateerde vragen kan je contact met ons
						opnemen via{" "}
						<Link href="mailto:hallo@poppywebsites.be">
							hallo@poppywebsites.be
						</Link>
						.
					</P>
					<H3 className="mt-10">Beleidsaanpassingen</H3>
					<P className="mt-5">
						Wij behouden het recht om dit privacybeleid op elk
						moment zonder voorafgaande kennisgeving te wijzigen.
						Eventuele wijzigingen worden onmiddellijk van kracht bij
						publicatie op onze websites.
					</P>
				</Container>
			</HomepageSection>
		</>
	);
};

export default PrivacyPolicy;
