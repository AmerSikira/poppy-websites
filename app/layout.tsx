import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Logo from "@/components/header/logo";
import Navigation from "@/components/header/navigation";
import Script from "next/script";
import Footer from "@/components/footer";

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
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-LZJZSFL7PD" />
			<Script id="google-analytics">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-LZJZSFL7PD');
        `}
			</Script>
			<body className={rubik.className}>
				<Header>
					<Logo />
					<Navigation />
				</Header>
				{children}
				<Footer />
			</body>
		</html>
	);
}
