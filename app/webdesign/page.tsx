import LastCTA from "@/components/homepage/last-cta";
import Steps from "@/components/homepage/steps";
import Testimonials from "@/components/homepage/testimonials";
import Features from "@/components/webdesign/features";
import Hero from "@/components/webdesign/hero";

export default function WebDesign() {
	return (
		<>
			<Hero />
			<Features />
			<Testimonials />
			<Steps />
			<LastCTA />
		</>
	);
}
