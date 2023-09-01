import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Logo from "@/components/header/logo";
import Navigation from "@/components/header/navigation";

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
			<body className={rubik.className}>
				<Header>
					<Logo />
					<Navigation />
				</Header>
				{children}
			</body>
		</html>
	);
}
