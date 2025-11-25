import AnimateOnScroll from "../component/AnimateOnScroll";
import Button from "../component/Button";
import SectionHeading from "../component/SectionHeading";

function AboutSection() {
  return (
    <div>
      <div className="container">
      <div className="about-section grid col-1-of-2 column-gap-md">
        <SectionHeading>About</SectionHeading>
        <div className="about-text_box">
          
          <p>
            <span>
              Hi, I’m Idris — a 3D designer, graphic designer, and
              licensed drone pilot passionate about transforming imagination
              into reality.
            </span>

            <span>
              With years of experience using Blender, Photoshop, Illustrator,
              and CorelDRAW, I craft visuals that connect with people — whether
              it’s detailed 3D renders, bold branding, or aerial perspectives
              that redefine space.
            </span>
            
            <span>
              I believe great design isn’t just about visuals; it’s about how it
              makes people feel.
            </span>
          </p>

          <Button direction={`/about`}>More about Me</Button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AboutSection;
