import LastCTA from "@/components/homepage/last-cta";
import Steps from "@/components/content-marketing/steps";
import Testimonials from "@/components/homepage/testimonials";
import Features from "@/components/content-marketing/features";
import Hero from "@/components/content-marketing/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Poppy Websites - Online reputatie optimaliseren",
	description: "Verzorg je andere online kanalen",
	openGraph: {
		title: "Poppy Websites - Online reputatie optimaliseren",
		description: "Verzorg je andere online kanalen",
		images: ["./content-marketing.png"],
	},
};

export default function ContentMarketing() {
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
