import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import SectionHeading from "../component/SectionHeading";
import Footer from "../sections/Footer";
import SubHero from "../sections/SubHero";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Loading from "../component/Loading";
import { useGetWebsiteWork } from "../Services/useWorks";

function Work() {
  // const [work, setWork] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");
  // const { slug } = useParams();
  const { work = {}, isPending } = useGetWebsiteWork();

  const { description, tags, created_at, title, images, slug, service } = work;

  console.log(work);

  function formatDate(dateString) {
    const date = new Date(dateString);

    const options = {
      day: "2-digit",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    };
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      date
    );

    return formattedDate;
  }

  // useEffect(() => {
  //   async function getWork() {
  //     try {
  //       setLoading(false);
  //       setError("");

  //       const res = await fetch(
  //         `https://boyidrisserverless.vercel.app/api/work?slug=${slug}`
  //       );
  //       if (!res.ok) throw new Error("Error fetching work, reload please");
  //       const data = await res.json();
  //       setWork(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   getWork();
  // }, [slug]);

  if (isPending) return <Loading />;

  return (
    <>
      <Helmet>
        <title>{title} – Idris Abayomi Portfolio</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content={`${service}, 3D Design, Graphic Design, Drone Videography, Portfolio`}
        />
        <meta name="author" content="Idris Abayomi" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content={`${title} – Idris Abayomi Portfolio`}
        />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={images[0]} />
        <meta
          property="og:url"
          content={`https://boyidris.vercel.app/work/${slug}`}
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${title} – Idris Abayomi Portfolio`}
        />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={images[0]} />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: title,
            creator: {
              "@type": "Person",
              name: "Idris Abayomi",
              url: "https://boyidris.vercel.app/about",
            },
            image: images[0],
            description: description,
            url: `https://boyidris.vercel.app/work/${slug}`,
          })}
        </script>
      </Helmet>

      <div className="single-work">
        <Navbar />
        <SubHero>
          Idris for <br />
          <span>{title}</span>
        </SubHero>

        <div className="container">
          <div className="single-work_text">
            <div className="grid col-1-of-2 column-gap-md">
              <div className="project-details">
                <SectionHeading>Project Details</SectionHeading>
                <div className="project-block">
                  <div className="project-block-header">
                    <h4>Date:</h4>
                  </div>
                  <div className="project-block-body">
                    {created_at ? <h5>{formatDate(created_at)}</h5> : <h5></h5>}
                  </div>
                </div>

                <hr />
                <div className="project-block">
                  <div className="project-block-header">
                    <h4>Client:</h4>
                  </div>
                  <div className="project-block-body">
                    <h5>{title}</h5>
                  </div>
                </div>

                <hr />

                <div className="project-block">
                  <div className="project-block-header">
                    <h4>Service</h4>
                  </div>
                  <div className="project-block-body">
                    <h5>{tags}</h5>
                  </div>
                </div>

                <hr />
              </div>

              <div className="project-description">
                <SectionHeading>Project Description</SectionHeading>
                <div className="project-description_text">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="single-work-imgs">
            {images.map((image) => (
              <div className="single-work-img-box" key={image}>
                <img src={image} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Work;
