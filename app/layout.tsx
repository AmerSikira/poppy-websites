import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Logo from "@/components/header/logo";
import Navigation from "@/components/header/navigation";
import GoogleAnalytics from "@/components/analytics/google-analytics";
import Footer from "@/components/footer";
import CookieBanner from "@/components/analytics/cookie-banner";
const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Poppy Websites",
	description: "Webdesign en webteksten",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<GoogleAnalytics GA_MEASUREMENT_ID="G-LZJZSFL7PD" />
			<body className={rubik.className}>
				<Header>
					<Logo />
					<Navigation />
				</Header>
				{children}
				<Footer />
				<CookieBanner />
			</body>
		</html>
	);
}
