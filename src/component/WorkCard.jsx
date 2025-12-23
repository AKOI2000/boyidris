import { Link } from "react-router-dom";

export default function WorkCard({ id, bg, title, desc, direction }) {
  return (
    <Link
      to={direction}
      className={`slide-card active`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="card-overlay">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </Link>
  );
}
