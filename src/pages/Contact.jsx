import Navbar from "../component/Navbar";
import SectionHeading from "../component/SectionHeading";
import Footer from "../sections/Footer";
import SubHero from "../sections/SubHero";
import {Helmet} from "react-helmet-async";

function Contact() {
  return (
    <>
       <Helmet>
      <title>Contact Idris Abayomi – 3D Designer, Drone Pilot & Graphic Designer</title>
      <meta
        name="description"
        content="Get in touch with Idris Abayomi, available for freelance 3D design, drone videography, and graphic design projects worldwide."
      />
      <meta name="keywords" content="contact Idris Abayomi, hire Idris Abayomi, 3D designer, drone pilot, graphic designer, freelance" />
      <meta name="author" content="Idris Abayomi" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content="Contact Idris Abayomi – 3D Designer, Drone Pilot & Graphic Designer" />
      <meta property="og:description" content="Get in touch with Idris Abayomi, available for freelance 3D design, drone videography, and graphic design projects worldwide." />
      <meta property="og:image" content="https://res.cloudinary.com/dbn6k7pg6/image/upload/v1764094720/BOYIDRIS_1_xgkmda.jpg" />
      <meta property="og:url" content="https://boyidris.vercel.app/contact" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Contact Idris Abayomi – 3D Designer, Drone Pilot & Graphic Designer" />
      <meta name="twitter:description" content="Get in touch with Idris Abayomi, available for freelance 3D design, drone videography, and graphic design projects worldwide." />
      <meta name="twitter:image" content="https://res.cloudinary.com/dbn6k7pg6/image/upload/v1764094720/BOYIDRIS_1_xgkmda.jpg" />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact Idris Abayomi",
          "description": "Get in touch with Idris Abayomi, available for freelance 3D design, drone videography, and graphic design projects worldwide.",
          "url": "https://boyidris.vercel.app/contact"
        })}
      </script>
    </Helmet>

      <div className="contact-me">
      <Navbar />
      <SubHero>
        Reach out and <br /> <span>say hi</span>
      </SubHero>

      <div className="contact_message">
        <div className="container-mg">
          <h2>
            I love to chat with like-minded people. Have a project you think I’d
            be a good fit for or just want to say hi? Reach out below.
          </h2>
        </div>
      </div>

      <div className="contact">
        <div className="container-mg">
          <div className="contact_contact">
            <div className="grid col-1-of-2 column-gap-md">
              <SectionHeading>Contact</SectionHeading>
              <ul>
                <li>
                  <a href="mailto:Idrisabayomi10@gmail.com">Idrisabayomi10@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+2349016413912">+234(0) 901 641 3912</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact_socials">
            <div className="grid col-1-of-2 column-gap-md">
            <SectionHeading>Connect</SectionHeading>
            <ul>
              <li>
                <a href="https://www.instagram.com/boyy_idriss/" target="_blank">Instagram</a>
              </li>
              <li>
                <a href="https://www.instagram.com/boyy_idriss/" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.instagram.com/boyy_idriss/" target="_blank">Facebook</a>
              </li>
             
            </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
    </>
  );
}

export default Contact;
