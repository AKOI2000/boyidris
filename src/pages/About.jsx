import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import SectionHeading from "../component/SectionHeading";
import Footer from "../sections/Footer";
import SubHero from "../sections/SubHero";
import { Helmet } from "react-helmet-async";

function About() {
  const [clients, setClients] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [clientLoading, setClientLoading] = useState(false);
  const [clientError, setClientError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function formatDate(dateString) {
    const date = new Date(dateString);

    const options = {
      // day: '2-digit',
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    };
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      date
    );

    return formattedDate;
  }

  useEffect(() => {
    async function getExperiences() {
      try {
        setLoading(true);
        const res = await fetch("https://boyidrisbe.onrender.com/experiences", {
          headers: { "Content-Type": "application/json" },
          method: "GET",
        });
        if (!res.ok) throw new Error("Error fetching the experiences, reload");
        const data = await res.json();
        setExperiences(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getExperiences();
  }, []);

  useEffect(() => {
    async function getClients() {
      try {
        setClientLoading(true);
        setClientError("");
        const result = await fetch("https://boyidrisbe.onrender.com/clients", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!result.ok) throw new Error("Can't fetch clients");
        const data = await result.json();

        setClients(data);
      } catch (err) {
        setClientError(err.message);
      } finally {
        setClientLoading(false);
      }
    }
    getClients();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          About Idris Abayomi – 3D Designer, Drone Pilot & Graphic Designer
        </title>
        <meta
          name="description"
          content="Learn more about Idris Abayomi, a 3D designer, drone pilot, and graphic designer available for freelance projects worldwide."
        />
        <meta
          name="keywords"
          content="About Idris Abayomi, 3D designer, drone pilot, graphic designer, portfolio, freelance"
        />
        <meta name="author" content="Idris Abayomi" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="About Idris Abayomi – 3D Designer, Drone Pilot & Graphic Designer"
        />
        <meta
          property="og:description"
          content="Learn more about Idris Abayomi, a 3D designer, drone pilot, and graphic designer available for freelance projects worldwide."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dbn6k7pg6/image/upload/v1764094720/BOYIDRIS_1_xgkmda.jpg"
        />
        <meta property="og:url" content="https://boyidris.vercel.app/about" />
        <meta property="og:type" content="profile" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Idris Abayomi – 3D Designer, Drone Pilot & Graphic Designer"
        />
        <meta
          name="twitter:description"
          content="Learn more about Idris Abayomi, a 3D designer, drone pilot, and graphic designer available for freelance projects worldwide."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dbn6k7pg6/image/upload/v1764094720/BOYIDRIS_1_xgkmda.jpg"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Idris Abayomi",
            url: "https://chat.com/about",
            jobTitle: "3D Designer, Drone Pilot, Graphic Designer",
            description:
              "Learn more about Idris Abayomi, a 3D designer, drone pilot, and graphic designer available for freelance projects worldwide.",
            sameAs: [
              "https://www.instagram.com/boyy_idriss",
              "https://www.linkedin.com/in/idris-adeshina-a1307717a/",
              "https://www.facebook.com/share/1BsMTTtiwj/",
            ],
          })}
        </script>
      </Helmet>
      <Navbar />
      <div className="about-me">
        <SubHero>
          Get to know <br /> <span>Boy idris</span>
        </SubHero>
        <div className="biography">
          <div className="container">
            <div className="grid col-1-of-2 column-gap-md">
              <SectionHeading>Biography</SectionHeading>
              <div className="about-text_box">
                <p>
                  <span>
                    As a multidisciplinary designer, I bring ideas to life
                    through 3D design, visual storytelling, and aerial imagery.
                    With a strong eye for detail and a passion for crafting
                    immersive visuals, I transform concepts into experiences
                    that captivate and inspire. My expertise spans Blender,
                    Photoshop, Illustrator, CorelDRAW, and DJI Fly, allowing me
                    to blend technical precision with artistic direction across
                    every project.
                  </span>

                  <span>
                    Whether I’m building complex 3D environments, creating bold
                    graphic compositions, or capturing unique aerial
                    perspectives, my focus remains on clarity, cohesion, and
                    impact. I believe great design isn’t just about how it looks
                    — it’s about how it feels, and the story it tells.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-short">
          <div className="img-box">
            <img src="/Images/BOYIDRIS.jpg" loading="lazy" alt="" />
          </div>
        </div>

        <div className="experience">
          <div className="container">
            <div className="grid col-1-of-2 column-gap-md">
              <SectionHeading>Experience</SectionHeading>
              <ul>
                {experiences?.map((experience) => (
                  <li>
                    <h4>{experience.companyname}</h4>
                    <h5>{experience.role}</h5>
                    <p>
                      {experience.datestart && formatDate(experience.datestart)}{" "}
                      -{" "}
                      {experience.dateend
                        ? formatDate(experience.dateend)
                        : "Present"}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="clients">
          <div className="container">
            <div className="grid col-1-of-2 column-gap-md">
              <SectionHeading>Clients</SectionHeading>
              {!clientError && !clientLoading && (
                <ul>
                  {clients.map((client) => (
                    <li key={client.id}>{client.client}</li>
                  ))}
                </ul>
              )}

              {clientError && <p>{clientError}</p>}
              {clientLoading && <p>Loading...</p>}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default About;
