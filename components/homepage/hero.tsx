import Image from "next/image";
import Container from "../layout/container";
import Cta from "../ui/button/cta";
import H1 from "../ui/heading/h1";
import HomepageSection from "../layout/homepage-section";
import Subheading from "../ui/text/subheading";
const Hero = () => {
	return (
		<>
			<HomepageSection className="relative">
				<Container className="flex flex-col justify-center items-center py-[10rem] md:py-20 md:h-screen">
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
		</>
	);
};

export default Hero;
