import * as React from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard.tsx";
import type {Project} from "@/lib/Project.tsx";
import {
    SiHibernate,
    SiPostgresql,
    SiReact, SiSpringboot, SiTailwindcss, SiTypescript,
} from "react-icons/si";
import {FaJava} from "react-icons/fa";


const projects: Project[] = [

    {
        title: "kho-portfolio",
        description: "The website you are browsing, it's a summary of my skills, working experiences and projects",
        link: "https://github.com/zusby/kho-portfolio",
        icons: [<SiReact/>, <SiTypescript/>, <SiTailwindcss/>]
    },
    {
        title: "ThinkQ *WIP*",
        description: "A full stack application that takes a pdf or context and generates multiple choice using a local LLM",
        link: "https://github.com/zusby/kho-portfolio",
        icons: [<SiSpringboot/>,<SiPostgresql/>, <SiHibernate/>,<FaJava/>]
    }
];

interface SkillsSectionProps {
    projectsRef?: React.RefObject<HTMLDivElement | null>
}

const ProjectsSection: React.FC<SkillsSectionProps> = ({
                                                           projectsRef,
                                                       }) => {


    return (
        <>
            <section
                ref={projectsRef}
                className="bg-gray-950 py-20 px-4 md:px-32 text-center "
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-12">Personal Projects</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project}/>
                    ))}
                </div>
            </section>
        </>
    )
}
export default ProjectsSection;