import { Link, useSearchParams } from "react-router-dom";
import SectionHeading from "../component/SectionHeading";
import Pagination from "../component/Pagination";
import Footer from "../sections/Footer";
import Navbar from "../component/Navbar";
import { useEffect, useState } from "react";

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
        setError(error.message)
      } finally {
        setLoading(false);
      }
    }

    getWorks();
  }, []);

  return (
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
            <Link to={`/work/${work.slug}`} key={work.id} className="portfolio-work">
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
  );
}

export default Works;
