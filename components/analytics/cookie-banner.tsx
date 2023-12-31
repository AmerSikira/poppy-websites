"use client";

import Link from "next/link";
import {
	getLocalStorage,
	setLocalStorage,
} from "@/lib/analytics/storage-helper";
import { useState, useEffect } from "react";
import P from "../ui/text/p";
import CustomLink from "../ui/link";
export default function CookieBanner() {
	const [cookieConsent, setCookieConsent] = useState(false);

	useEffect(() => {
		const storedCookieConsent = getLocalStorage("cookie_consent", null);

		setCookieConsent(storedCookieConsent);
	}, [setCookieConsent]);

	useEffect(() => {
		const newValue = cookieConsent ? "granted" : "denied";

		window.gtag("consent", "update", {
			analytics_storage: newValue,
			ad_storage: newValue,
		});

		setLocalStorage("cookie_consent", cookieConsent);

		//For Testing
		console.log("Cookie Consent: ", cookieConsent);
	}, [cookieConsent]);
	return (
		<div
			className={`my-10 mx-auto container
                        fixed bottom-0 left-0 right-0 
                        ${
							cookieConsent != null ? "hidden" : "flex"
						}  px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-gray-900 rounded-lg shadow z-[999]`}
		>
			<div className="text-center">
				<P className="text-white text-bold">
					Deze website maakt gebruik van{" "}
					<CustomLink href="/privacy-policy">cookies</CustomLink>.
					(Niet die van onze naamgenoten uit Beselare - wel digitale
					cookies om onze website-ervaring te verbeteren)
				</P>
			</div>

			<div className="flex gap-2">
				<button
					className="px-5 py-2 whitespace-nowrap text-gray-300 rounded-md border-gray-900"
					onClick={() => setCookieConsent(false)}
				>
					Alles weigeren
				</button>
				<button
					className="bg-red-100 whitespace-nowrap px-5 py-2 text-black rounded-lg"
					onClick={() => setCookieConsent(true)}
				>
					Cookies toestaan
				</button>
			</div>
		</div>
	);
}
