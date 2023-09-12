import LastCTA from "@/components/homepage/last-cta";
import Steps from "@/components/homepage/steps";
import Testimonials from "@/components/homepage/testimonials";
import Features from "@/components/webdesign/features";
import Hero from "@/components/webdesign/hero";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Poppy Websites - Webdesign",
	description: "Wondermooie websites voor contente klanten",
	openGraph: {
		title: "Poppy Websites - Webdesign",
		description: "Wondermooie websites voor contente klanten",
		images: ["./webdesign.png"],
	},
};

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
