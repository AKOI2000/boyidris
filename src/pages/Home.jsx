
import Button from '../component/Button'
import Navbar from '../component/Navbar'
import AboutSection from '../sections/AboutSection'
import Footer from '../sections/Footer'
import Hero from '../sections/Hero'
import SkillsSection from '../sections/SkillsSection'
import WorksSection from '../sections/WorksSection'
import Accordion from '../component/Accordion'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutSection />
            <SkillsSection />
            <WorksSection />
            <Footer />
        </>
    )
}



export default Home
