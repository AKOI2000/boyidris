import { useEffect, useRef, useState } from "react";
import WorkCard from "../component/WorkCard";
import Button from "../component/Button";
import Loading from "../component/Loading";
import { serverless_url } from "../helpers/constants";
import { useGetPaginatedWorks } from "../Services/useWorks";

export default function WorksSection() {
  const carouselRef = useRef(null);
  const { paginatedWorks = [], isFetching } = useGetPaginatedWorks();
  const featured = paginatedWorks?.data?.slice(0, 3);

  // Horizontal scroll

  const scroll = (dir) => {
    if (!carouselRef.current) return;
    const amount = dir === "next" ? 400 : -400;
    carouselRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  if (isFetching) return <Loading />;
  return (
    <div className="carousel-wrapper">
      <>
        <div className="carousel" ref={carouselRef}>
          {featured?.map((work) => (
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
    </div>
  );
}
