import Accordion from "../component/Accordion";
import SectionHeading from "../component/SectionHeading";

function SkillsSection() {
  return (
    <div className="container">
         <div className="skills-section grid col-1-of-2 column-gap-md">
      <SectionHeading>Skills</SectionHeading>
      <Accordion data={faqs} />
    </div>
    </div>
  );
}

const faqs = [
  {
    title: "3D Modelling",
    text: "I create detailed 3D models, textures, lighting setups, and animations using Blender, bringing concepts to life with depth and realism. My work ranges from product visualizations and architectural renders to creative motion scenes that tell visual stories in three dimensions.",
    stack: []
  },
  {
    title: "Graphics design",
    text: "With expertise in Photoshop, Illustrator, and CorelDRAW, I design professional visuals that strengthen brand identity and communication. From logos, posters, and album covers to marketing materials, my focus is always on balance, impact, and clarity.",
    stack: [ ]
  },
  {
    title: "Drone",
    text: "As a certified drone pilot, I capture aerial photography and videography that reveal new perspectives. My drone work blends cinematic storytelling with precision, from sweeping landscapes to creative overhead compositions that elevate every visual project.",
    stack: [ ]
  },
  {
    title: "Tools & Stack",
    text: "My workflow runs on Blender for 3D design and animation, Photoshop, Illustrator, and CorelDRAW for graphics, and DJI Fly for aerial captures — the essentials behind every visual I create.",
    stack: [
        "/Images/blender-2.svg",
        "/Images/adobe-illustrator-cc-3.svg",
        "/Images/adobe-photoshop-2.svg",
        "/Images/Coreldraw.png",
        "/Images/dji-3.svg"
    ]
  },
];
export default SkillsSection;
