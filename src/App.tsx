import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import * as React from "react";

import profileImg from "./assets/profile.jpg";
import {
    SiAngular, SiDocker,
    SiDotnet,
    SiFirebase, SiGithub,
    SiJavascript, SiLinkedin, SiLinux,
    SiPostgresql,
    SiPython,
    SiReact,SiSpring,
    SiTypescript
} from "react-icons/si";
import {FaJava} from "react-icons/fa";
import SkillsSection, {type Skill} from "@/components/Sections/Skills.tsx";
import AboutSection from "@/components/Sections/About.tsx";
import {ImProfile} from "react-icons/im";
import ExperiencesSection from "@/components/Sections/Experiences.tsx";
import ProjectsSection from "@/components/Sections/ProjectsSection.tsx";




const skills:Skill[] = [
    { name: "Java", icon: <FaJava/> },
    { name: "Spring Framework", icon: <SiSpring/> },
    { name: "Angular", icon: <SiAngular /> },

    { name: "React", icon: <SiReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },

    { name: "Python", icon: <SiPython /> },
    { name: "C#", icon: <SiDotnet /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Linux", icon: <SiLinux /> },
    { name: "Docker", icon: <SiDocker /> },

];

export function Portfolio() {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);

    const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({behavior: "smooth"});
    };

    return (
        <div className="font-sans text-white bg-gray-900 min-h-screen">            {/* Navbar */}
            <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md sticky top-0 z-50">
                <h2 className="text-xl font-bold">My Portfolio</h2>
                <div className="space-x-4">
                    <Button variant="ghost" onClick={() => scrollTo(aboutRef)}>
                        About
                    </Button>
                    <Button variant="ghost" onClick={() => scrollTo(projectsRef)}>
                        Projects
                    </Button>
                </div>
            </nav>


            <section className="flex flex-col items-center justify-center text-center py-32 px-4 bg-gray-900">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="relative w-48 h-48 md:w-64 md:h-64 mb-6"
                >
                    <img
                        src={profileImg}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover object-[70%_0%] border-4 border-white shadow-lg"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-4xl md:text-6xl font-bold"
                >
                    Kacper Henryk Osicki
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="pt-5"
                >
                    <div className="flex flex-row items-center justify-center space-x-6 text-6xl">
                        <a href="https://github.com/zusby" aria-label="GitHub Profile">
                            <SiGithub />
                        </a>
                        <a href="https://www.linkedin.com/in/kacper-henryk-osicki-b6194619a/" aria-label="LinkedIn Profile">
                            <SiLinkedin />
                        </a>
                        <a href="https://drive.google.com/file/d/1ka_QFkm9BV3KkEqN5aKlAJVb7ReTELGz/view?usp=sharing" aria-label="Download Resume">
                            <ImProfile />
                        </a>
                    </div>
                </motion.div>
            </section>

            <AboutSection ref={aboutRef}/>
            <SkillsSection skills={skills}/>
            <div className="w-full">
                <ExperiencesSection />
            </div>
            <ProjectsSection  projectsRef={projectsRef} />



        </div>
    );
}