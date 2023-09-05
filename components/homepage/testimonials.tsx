import HomepageSection from "../layout/homepage-section";
import Container from "../layout/container";
import FlexRow from "../layout/flex-row";
import H2 from "../ui/heading/h2";
import Testimonial from "../ui/card/testimonial";
import SecondaryCta from "../ui/button/secondary-cta";

const Testimonials = () => {
	return (
		<HomepageSection>
			<Container>
				<FlexRow className="justify-center mb-10">
					<H2>Deze lokale bedrijven kozen al voor Poppy Websites</H2>
				</FlexRow>
			</Container>
			<Container className="flex gap-10 flex-col md:flex-row">
				<Testimonial
					image="/yochen.jpeg"
					name="Yochen Dewancker"
					title="Eigenaar MY Own Products"
					text="Supertevreden met de website. Amer en Kjell hebben al
						mijn verwachtigen overtroffen. De tafels komen veel
						beter tot hun recht op de nieuwe website"
					link="https://myownproducts.be"
					linkText="My OWN Products"
				/>

				<Testimonial
					image="/ajdin.jpeg"
					name="Ajdin Lokvancic"
					title="Oprichter CloudNovi"
					text="In een competitieve markt is het belangrijk om een
						gebruiksvriendelijke website te hebben. Daarom koos ik
						voor Poppy Websites."
					link="https://cloudnovi.com/"
					linkText="CloudNovi"
				/>

				<Testimonial
					image="/kjell.png"
					name="Kjell Vandevyvere"
					title="Mede-oprichter Poppy Websites"
					text="Naast mede-oprichter van Poppy Websites ben ik freelance digital marketeer voor fintech bedrijven. Dus goten we mijn website ook in een nieuw jasje."
					link="https://kjellvandevyvere.be"
					linkText="kjellvandevyvere.be"
				/>
			</Container>
			<Container>
				<FlexRow className="justify-center mt-10">
					<SecondaryCta>Bespreek jouw wensen</SecondaryCta>
				</FlexRow>
			</Container>
		</HomepageSection>
	);
};

export default Testimonials;
