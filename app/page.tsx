import Hero from "@/components/homepage/hero";
import OtherServices from "@/components/homepage/other-services";
import Services from "@/components/homepage/services";
import Testimonials from "@/components/homepage/testimonials";
import WhyUs from "@/components/homepage/why-us";
import Steps from "@/components/homepage/steps";
import Experts from "@/components/homepage/experts";
import LastCTA from "@/components/homepage/last-cta";

export default function Home() {
	return (
		<>
			<Hero />
			<Services />
			<WhyUs />
			<Testimonials />
			<Steps />
			<OtherServices />
			<Experts />
			<LastCTA />
		</>
	);
}
