import AboutMeBio from "@/components/about/AboutMeBio";
import AboutMeSkills from "@/components/about/AboutMeSkills";
import PagesMetaHead from "@/components/shared/PagesMetaHead"
import { motion } from "framer-motion"
AboutMeSkills

const About = () => {
    return (
        <div>
            <PagesMetaHead title="About Me" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutMeBio />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutMeSkills />
            </motion.div>
        </div>
    )
}

export default About;