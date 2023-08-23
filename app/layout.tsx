import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Logo from "@/components/header/logo";
import Menu from "@/components/menu/menu";
import MenuItem from "@/components/menu/menu-item";

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
					<Menu>
						<MenuItem text="Home" href="/" />
						<MenuItem text="Why us?" href="/" />
						<MenuItem text="Projects" href="/" />
						<MenuItem text="Testimonials" href="/" />
						<MenuItem text="Blog" href="/" />
					</Menu>
				</Header>
				{children}
			</body>
		</html>
	);
}
