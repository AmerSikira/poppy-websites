import LastCTA from "@/components/homepage/last-cta";
import Steps from "@/components/homepage/steps";
import Testimonials from "@/components/homepage/testimonials";
import Features from "@/components/online-reputatie/features";
import Hero from "@/components/online-reputatie/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Poppy Websites - Online reputatie optimaliseren",
	description: "Verzorg je andere online kanalen",
	openGraph: {
		title: "Poppy Websites - Online reputatie optimaliseren",
		description: "Verzorg je andere online kanalen",
	},
};

export default function OnlineReputatie() {
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
