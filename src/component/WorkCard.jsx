import { Link } from "react-router-dom";

export default function WorkCard({ id, bg, title, desc, active, innerRef, direction }) {
  return (
    <Link
      to={direction}
      data-id={id}
      ref={innerRef}
      className={`slide-card ${active === id ? "active" : ""}`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="card-overlay">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </Link>
  );
}
