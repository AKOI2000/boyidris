import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import SectionHeading from "../component/SectionHeading";
import Footer from "../sections/Footer";
import SubHero from "../sections/SubHero";

function About() {
  const [clients, setClients] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [clientLoading, setClientLoading] = useState(false);
  const [clientError, setClientError] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  
  function formatDate(dateString) {
    const date = new Date(dateString);
  
    const options = {
      // day: '2-digit',
      month: 'long', 
      year: 'numeric',
      timeZone: 'UTC'
    };
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(date);
  
    return formattedDate
    }


  useEffect(()=>{
    async function getExperiences() {
      try {
        setLoading(true);
        const res = await fetch("https://boyidrisbe.onrender.com/experiences", {
          headers: {"Content-Type": "application/json"},
          method: "GET"
        })
        if (!res.ok) throw new Error ("Error fetching the experiences, reload");
        const data = await res.json();
        setExperiences(data)

      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getExperiences();
  }, [])


  useEffect(()=> {
    async function getClients () {
      	try {
          setClientLoading(true);
          setClientError("")
          const result = await fetch("https://boyidrisbe.onrender.com/clients", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          });
          if (!result.ok) throw new Error("Can't fetch clients")
          const data = await result.json();
          
          setClients(data);
        } catch (err) {
          setClientError(err.message)
        } finally {
          setClientLoading(false)
        }
    }
    getClients();
  }, []);

  return (
    <>
    <Navbar />
    <div className="about-me">
      <SubHero>
        Get to know <br /> <span>Boy idris</span>
      </SubHero>
      <div className="biography">
        <div className="container">
          <div className="grid col-1-of-2 column-gap-md">
            <SectionHeading>Biography</SectionHeading>
            <div className="about-text_box">
              <p>
                <span>
                  As a multidisciplinary designer, I bring ideas to life through
                  3D design, visual storytelling, and aerial imagery. With a
                  strong eye for detail and a passion for crafting immersive
                  visuals, I transform concepts into experiences that captivate
                  and inspire. My expertise spans Blender, Photoshop,
                  Illustrator, CorelDRAW, and DJI Fly, allowing me to blend
                  technical precision with artistic direction across every
                  project.
                </span>

                <span>
                  Whether I’m building complex 3D environments, creating bold
                  graphic compositions, or capturing unique aerial perspectives,
                  my focus remains on clarity, cohesion, and impact. I believe
                  great design isn’t just about how it looks — it’s about how it
                  feels, and the story it tells.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-short">
        <div className="img-box">
          <img src="/Images/BOYIDRIS.jpg" loading="lazy" alt="" />
        </div>
      </div>

      <div className="experience">
        <div className="container">
          <div className="grid col-1-of-2 column-gap-md">
            <SectionHeading>Experience</SectionHeading>
            <ul>
              {/* <li>
                <h4>Mediacrush</h4>
                <h5>3D designer</h5>
                <p>2020-2023</p>
              </li>
              <li>
                <h4>Mediacrush</h4>
                <h5>3D designer</h5>
                <p>2020-2023</p>
              </li>
              <li>
                <h4>Mediacrush</h4>
                <h5>3D designer</h5>
                <p>2020-2023</p>
              </li>
              <li>
                <h4>Mediacrush</h4>
                <h5>3D designer</h5>
                <p>2020-2023</p>
              </li>
              <li>
                <h4>Mediacrush</h4>
                <h5>3D designer</h5>
                <p>2020-2023</p>
              </li>
              <li>
                <h4>Mediacrush</h4>
                <h5>3D designer</h5>
                <p>2020-2023</p>
              </li> */}

              {experiences?.map(experience => (
                <li>
                  <h4>{experience.companyname}</h4>
                  <h5>{experience.role}</h5>
                  <p>{experience.datestart && formatDate(experience.datestart)} - {experience.dateend ? formatDate(experience.dateend) : "Present"}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="clients">
        <div className="container">
          <div className="grid col-1-of-2 column-gap-md">
            <SectionHeading>Clients</SectionHeading>
            {!clientError && !clientLoading && (
              <ul>
              {clients.map(client => <li key={client.id}>{client.client}</li>)}
            </ul>
            )}


            {clientError && <p>{clientError}</p>}
            {clientLoading && <p>Loading...</p>}
          </div>
        </div>
      </div>

      <Footer />
    </div>
    </>
  );
}

export default About;
