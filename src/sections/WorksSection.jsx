import { useEffect, useRef, useState } from "react";
import WorkCard from "../component/WorkCard";
import Button from "../component/Button";
import Loading from "../component/Loading";

export default function WorksSection() {
  const [featured, setFeatured] = useState([]);
  const carouselRef = useRef(null);
  const [loading, setLoading] = useState(false);

  // Fetch featured works
  useEffect(() => {
    async function getFeaturedWorks() {
      try {
        setLoading(true);
        const res = await fetch("https://boyidrisserverless.vercel.app/api/works");
        const data = await res.json();
        setFeatured(data.items.slice(0, 3));
      } catch (error) {
        console.error("error fetching", error);
      } finally {
        setLoading(false);
      }
    }
    getFeaturedWorks();
  }, []);
  

  // Horizontal scroll
  const scroll = (dir) => {
    if (!carouselRef.current) return;
    const amount = dir === "next" ? 400 : -400;
    carouselRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="carousel-wrapper">
      {loading && <Loading />}
      {!loading && (
        <>
          <div className="carousel" ref={carouselRef}>
            {featured.map((work) => (
              <WorkCard
                key={work.slug}
                bg={work.images[0]}
                title={work.title}
                desc={work.description.substring(0, 120) + "..."}
                direction={`/work/${work.slug}`}
              />
            ))}
          </div>

          <div className="ctrl-box">
            <button className="scroll-btn left" onClick={() => scroll("prev")}>
              <img src="/Images/Button_right_arrow_label.png" alt="" />
            </button>
            <button className="scroll-btn right" onClick={() => scroll("next")}>
              <img src="/Images/Button_right_arrow_label.png" alt="" />
            </button>
          </div>

          <center>
            <Button direction={"/works"}>See all Works</Button>
          </center>
        </>
      )}
    </div>
  );
}
