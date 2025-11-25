import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="footer">
           <div className="container">
           <div className="footer-cta">
                <h2>Let's Work</h2>
            </div>

            <div className="footer-links grid">
                <div className="footer-contact">
                    <h3>Contact</h3>
                    <a href="mailto:Idrisabayomi10@gmail.com" className="btn-secondary">Idrisabayomi10@gmail.com</a>
                </div>

                <div className="footer-nav">
                   <Link to="/">Home</Link>
                   <Link to="/about">About</Link>
                   <Link to="/works">Porfolio</Link>
                   <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-socials">
                    <a href="https://www.instagram.com/boyy_idriss" target="_blank">Instagram</a>
                    <a href="https://www.linkedin.com/in/idris-adeshina-a1307717a/" target="_blank">LinkedIn</a>
                    <a href="https://www.facebook.com/share/1BsMTTtiwj/" target="_blank">Facebook</a>
                    
                </div>
            </div>
           </div>
        </div>
    )
}

export default Footer
