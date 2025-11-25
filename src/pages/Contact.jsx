import Navbar from "../component/Navbar";
import SectionHeading from "../component/SectionHeading";
import Footer from "../sections/Footer";
import SubHero from "../sections/SubHero";

function Contact() {
  return (
    <div className="contact-me">
      <Navbar />
      <SubHero>
        Reach out and <br /> <span>say hi</span>
      </SubHero>

      <div className="contact_message">
        <div className="container-mg">
          <h2>
            I love to chat with like-minded people. Have a project you think I’d
            be a good fit for or just want to say hi? Reach out below.
          </h2>
        </div>
      </div>

      <div className="contact">
        <div className="container-mg">
          <div className="contact_contact">
            <div className="grid col-1-of-2 column-gap-md">
              <SectionHeading>Contact</SectionHeading>
              <ul>
                <li>
                  <a href="mailto:Idrisabayomi10@gmail.com">Idrisabayomi10@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+2349016413912">+234(0) 901 641 3912</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact_socials">
            <div className="grid col-1-of-2 column-gap-md">
            <SectionHeading>Connect</SectionHeading>
            <ul>
              <li>
                <a href="https://www.instagram.com/boyy_idriss/" target="_blank">Instagram</a>
              </li>
              <li>
                <a href="https://www.instagram.com/boyy_idriss/" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.instagram.com/boyy_idriss/" target="_blank">Facebook</a>
              </li>
             
            </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Contact;
