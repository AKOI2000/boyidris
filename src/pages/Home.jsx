import { Helmet } from "react-helmet-async";
import Button from "../component/Button";
import Navbar from "../component/Navbar";
import AboutSection from "../sections/AboutSection";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import SkillsSection from "../sections/SkillsSection";
import WorksSection from "../sections/WorksSection";
import Accordion from "../component/Accordion";

function Home() {
  return (
    <>
      <Helmet>
        <title>Adeshina Idris – 3D Designer, Drone Pilot & Graphic Designer</title>
        <meta
          name="description"
          content="Portfolio of Adeshina Idris Abayomi: 3D designer, drone pilot, and graphic designer available for freelance work worldwide. Explore projects, visuals, and services."
        />
        <meta
          name="keywords"
          content="3D design, graphic design, drone videography, 3D modeling, freelance designer, portfolio, visual design"
        />
        <meta name="author" content="Adeshina Idris Abayomi" />
        <meta name="robots" content="index, follow" />

        {/* <!-- Open Graph --> */}
        <meta
          property="og:title"
          content="Adeshina Idris – 3D Designer, Drone Pilot & Graphic Designer"
        />
        <meta
          property="og:description"
          content="Portfolio of Adeshina Idris: 3D designer, drone pilot, and graphic designer available for freelance work worldwide."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dbn6k7pg6/image/upload/v1764094720/BOYIDRIS_1_xgkmda.jpg"
        />
        <meta property="og:url" content="https://boyidris.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Idris Adeshina – 3D Designer, Drone Pilot & Graphic Designer"
        />
        <meta
          name="twitter:description"
          content="Portfolio of Idris Adeshina: 3D designer, drone pilot, and graphic designer available for freelance work worldwide."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dbn6k7pg6/image/upload/v1764094720/BOYIDRIS_1_xgkmda.jpg"
        />

        {/* <!-- JSON-LD --> */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Idris Abayomi",
            url: "https://boyidris.vercel.app/",
            jobTitle: "3D Designer, Drone Pilot, Graphic Designer",
            description:
              "Portfolio of Idris Abayomi: 3D designer, drone pilot, and graphic designer available for freelance work worldwide.",
            sameAs: [
              "https://www.instagram.com/boyy_idriss",
              "https://www.linkedin.com/in/idris-adeshina-a1307717a/",
              "https://www.facebook.com/share/1BsMTTtiwj/",
            ],
          })}
        </script>
      </Helmet>

      <Navbar />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <WorksSection />
      <Footer />
    </>
  );
}

export default Home;
