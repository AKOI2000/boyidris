import { useEffect, useRef, useState } from "react";
import WorkCard from "../component/WorkCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../component/Button";
import Loading from "../component/Loading";

export default function WorksSection() {
  const [active, setActive] = useState(null);
  const [featured, setFeatured] = useState([]);
  const refs = useRef([]);
  const carouselRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getFeaturedWorks() {
      try {
        setLoading(true);
        const res = await fetch("https://boyidrisserverless.vercel.app/api/works", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
  
        const data = await res.json();
        console.log(data);
  
        setFeatured(data.slice(0, 3));
      } catch (error) {
        console.error("error fetching", error);
      } finally {
        setLoading(false);
      }
    }
  
    getFeaturedWorks();
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.dataset.id);
          }
        });
      },
      { threshold: 0.5 } // lower threshold for testing
    );
  
    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [loading, featured]);
  

  const scroll = (dir) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const amount = dir === "next" ? 400 : -400; // adjust scroll distance
    carousel.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="carousel-wrapper">
      {loading && <Loading />}
      {!loading && (
        <>
          <div className="carousel" ref={carouselRef}>
            <WorkCard
              direction={`/work/${featured[0]?.slug}`}
              id="1"
              bg={featured[0]?.images[0]}
              title={featured[0]?.title}
              desc={featured[0]?.description.substring(0, 120) + "..."}
              active={active}
              innerRef={(el) => (refs.current[0] = el)}
            />
            <WorkCard
              direction={`/work/${featured[1]?.slug}`}
              id="2"
              bg={featured[1]?.images[0]}
              title={featured[1]?.title}
              desc={featured[1]?.description.substring(0, 120) + "..."}
              active={active}
              innerRef={(el) => (refs.current[1] = el)}
            />
            <WorkCard
              direction={`/work/${featured[2]?.slug}`}
              id="3"
              bg={featured[2]?.images[0]}
              title={featured[2]?.title}
              desc={featured[2]?.description.substring(0, 120) + "..."}
              active={active}
              innerRef={(el) => (refs.current[2] = el)}
            />
          </div>

          <div className="ctrl-box">
            <button className="scroll-btn left" onClick={() => scroll("prev")}>
              <img src="/Images/Button_right_arrow_label.png" alt="" />
            </button>
            <button className="scroll-btn right" onClick={() => scroll("next")}>
              <img src="/Images/Button_right_arrow_label.png" alt="" />
            </button>
          </div>
          <br />

          <center>
            <Button direction={"/works"}>See all Works</Button>
          </center>
        </>
      )}
    </div>
  );
}
