import LastCTA from "@/components/homepage/last-cta";
import Steps from "@/components/homepage/steps";
import Testimonials from "@/components/homepage/testimonials";
import Features from "@/components/design/features";
import Hero from "@/components/design/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Poppy Websites - Design",
	description: "Laat je bedrijf stralen op alle online kanalen",
	openGraph: {
		title: "Poppy Websites - Design",
		description: "Laat je bedrijf stralen op alle online kanalen",
	},
};

export default function Deesign() {
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
