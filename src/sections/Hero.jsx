import { Link } from "react-router-dom"
import Button from "../component/Button"
import AnimateOnScroll from "../component/AnimateOnScroll"
function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                <span className="hero-text_main">Designer. Creator. Pilot.</span>
                <span className="hero-text_sub"> Visuals beyond boundaries.</span>
            </h1>
            <Button direction={"/works"}>Explore my works</Button>
        </div>
    )
}

export default Hero
