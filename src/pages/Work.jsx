import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import SectionHeading from "../component/SectionHeading";
import Footer from "../sections/Footer";
import SubHero from "../sections/SubHero";
import { useParams } from "react-router-dom";

function Work() {
  const [work, setWork] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { slug } = useParams();

  function formatDate(dateString) {
    const date = new Date(dateString);
  
    const options = {
      day: '2-digit',
      month: 'long', 
      year: 'numeric',
      timeZone: 'UTC'
    };
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
  
    return formattedDate
    }

  useEffect(() => {
    async function getWork() {
      try {
        setLoading(false);
        setError("");

        const res = await fetch(`https://boyidrisbe.onrender.com/work/${slug}`);
        if (!res.ok) throw new Error("Error fetching work, reload please");
        const data = await res.json();
        setWork(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getWork();
  }, [slug]);

  return (
    <div className="single-work">
      <Navbar />
      <SubHero>
        Idris for <br />
        <span>{work.title}</span>
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
                 {work.created_at ? <h5>{formatDate(work.created_at)}</h5> : <h5></h5>}
                </div>
              </div>

              <hr />
              <div className="project-block">
                <div className="project-block-header">
                  <h4>Client:</h4>
                </div>
                <div className="project-block-body">
                  <h5>{work.title}</h5>
                </div>
              </div>

              <hr />

              <div className="project-block">
                <div className="project-block-header">
                  <h4>Service</h4>
                </div>
                <div className="project-block-body">
                  <h5>{work.tags}</h5>
                </div>
              </div>

              <hr />
            </div>

            <div className="project-description">
              <SectionHeading>Project Description</SectionHeading>
              <div className="project-description_text">
                <p>{work.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="single-work-imgs">
          {work?.images?.map((image) => (
            <div className="single-work-img-box">
              <img src={image} alt="" loading="lazy"/>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Work;
