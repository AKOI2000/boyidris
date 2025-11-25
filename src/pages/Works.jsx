import { Link, useSearchParams } from "react-router-dom";
import SectionHeading from "../component/SectionHeading";
import Pagination from "../component/Pagination";
import Footer from "../sections/Footer";
import Navbar from "../component/Navbar";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

function Works() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const [works, setWorks] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function onPageChange(action) {
    setSearchParams({ page: action });
  }
  let totalPages;

  useEffect(() => {
    async function getWorks() {
      try {
        setError("");
        setLoading(true);
        const res = await fetch("https://boyidrisbe.onrender.com/works", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) throw new Error("unable to fetch, reload the page");
        const data = await res.json();
        console.log(data.data);
        totalPages = data.pagination.total;
        setWorks(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getWorks();
  }, []);

  return (
    <>
      <Helmet>
        <title>Idris – Idris Abayomi Portfolio</title>
        <meta
          name="description"
          content="Explore Idris Abayomi’s portfolio featuring 3D design, drone videography, and graphic design projects. Available for freelance work worldwide."
        />
        <meta
          name="keywords"
          content="portfolio, 3D design, graphic design, drone videography, freelance projects, visual design"
        />
        <meta name="author" content="Idris Abayomi" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Works – Idris Abayomi Portfolio" />
        <meta
          property="og:description"
          content="Explore Idris Abayomi’s portfolio featuring 3D design, drone videography, and graphic design projects. Available for freelance work worldwide."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dbn6k7pg6/image/upload/v1764094720/BOYIDRIS_1_xgkmda.jpg"
        />
        <meta property="og:url" content="https://boyidris.vercel.app/works" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Works – Idris Abayomi Portfolio" />
        <meta
          name="twitter:description"
          content="Explore Idris Abayomi’s portfolio featuring 3D design, drone videography, and graphic design projects. Available for freelance work worldwide."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dbn6k7pg6/image/upload/v1764094720/BOYIDRIS_1_xgkmda.jpg"
        />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Works – Idris Abayomi Portfolio",
            description:
              "Explore Idris Abayomi’s portfolio featuring 3D design, drone videography, and graphic design projects. Available for freelance work worldwide.",
            url: "https://boyidris.vercel.app/works",
          })}
        </script>
      </Helmet>

      <div className="portfolio">
        <Navbar />
        <div className="container">
          <div className="portfolio-header">
            <SectionHeading>Projects</SectionHeading>
            <h5>
              Every project delivered is a reflection of commitment to quality,
              designed to inspire and drive success
            </h5>
          </div>

          <div className="portfolio-works">
            {works?.map((work) => (
              <Link
                to={`/work/${work.slug}`}
                key={work.id}
                className="portfolio-work"
              >
                <div className="img-box">
                  <img src={work.images[0]} alt={`Idris for ${work.alt}`} />
                </div>
                <div className="text-box">
                  <h3>{work.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pages-box">
              <Pagination
                currentPage={Number(page)}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
            </div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Works;
