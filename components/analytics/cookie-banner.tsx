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
			className={`my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        ${
							cookieConsent != null ? "hidden" : "flex"
						}  px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-gray-900 rounded-lg shadow`}
		>
			<div className="text-center">
				<P className="text-white text-bold">
					We use{" "}
					<CustomLink href="/privacy-policy">cookies</CustomLink> on
					our site.
				</P>
			</div>

			<div className="flex gap-2">
				<button
					className="px-5 py-2 text-gray-300 rounded-md border-gray-900"
					onClick={() => setCookieConsent(false)}
				>
					Decline
				</button>
				<button
					className="bg-red-100 px-5 py-2 text-black rounded-lg"
					onClick={() => setCookieConsent(true)}
				>
					Allow Cookies
				</button>
			</div>
		</div>
	);
}
