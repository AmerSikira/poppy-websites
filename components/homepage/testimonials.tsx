import HomepageSection from "../layout/homepage-section";
import Container from "../layout/container";
import FlexRow from "../layout/flex-row";
import H2 from "../ui/heading/h2";
import Card from "../ui/card/card";
import H3 from "../ui/heading/h3";
import P from "../ui/text/p";
import CustomLink from "../ui/link";

const Testimonials = () => {
	return (
		<HomepageSection>
			<Container>
				<FlexRow className="justify-center mb-10">
					<H2>Deze lokale bedrijven kozen al voor Poppy Websites</H2>
				</FlexRow>
			</Container>
			<Container className="flex gap-10 flex-col md:flex-row">
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
						Onze website ontwerper zorgt altijd voor een mix tussen
						trendy en tijdloos design zodat je website er binnen
						vijf jaar nog altijd moderner uitziet dan die van je
						concurrentie.
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Omnis ipsa aliquid quas sed id eligendi nulla alias nisi
						reiciendis maxime quidem, aliquam libero dolorum
						expedita corrupti voluptas. Qui, est odit.
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
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Omnis ipsa aliquid quas sed id eligendi nulla alias nisi
						reiciendis maxime quidem, aliquam libero dolorum
						expedita corrupti voluptas. Qui, est odit.
					</P>
					<P className="w-full mt-3" align="text-left">
						<CustomLink href="#">Gluck ist richt</CustomLink>
					</P>
				</Card>
			</Container>
		</HomepageSection>
	);
};

export default Testimonials;
