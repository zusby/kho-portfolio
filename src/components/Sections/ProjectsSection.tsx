import * as React from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard.tsx";
import type {Project} from "@/lib/Project.tsx";
import {FaJava} from "react-icons/fa";
import {
    SiC,
    SiFirebase,
    SiJavascript,
    SiReact,
    SiShadcnui,
    SiSpring,
    SiStripe,
    SiTailwindcss,
    SiTypescript,
    SiVite, SiWebassembly
} from "react-icons/si";


const projects:Project[] = [

    {
        title: "Loyality Platform",
        description: "A Java Spring Boot backend to create and manage multiple e-commerce stores with focus on retainability and gain of customers, and income increase ",
        link: "https://github.com/zusby/LoyalityPlatform",
        icons: [<FaJava/>,<SiSpring/>,<SiFirebase/>, <SiReact/>]
    },{
        title: "Fidelity Platform Front End Client",
        description: "Fidelity Platform client side webpage, it uses FidelityPlatform as backend retrieve data using Firebase.\n" +
            "\n" +
            "A Store required to work and has to be created using the Admin Dashboard",
        link: "https://github.com/zusby/FidelityPlatformFEClient",
        icons: [ <SiReact/>,<SiTypescript/>,<SiFirebase/>,<SiStripe/>,<SiVite/>]
    },{
        title: "Fidelity Platform Front End Admin Dashboard",
        description: "Fidelity Platform client used to Manage store/stores (e-commerce) with FidelityPlatform as backend to manage data.",
        link: "https://github.com/zusby/LoyalityPlatform",
        icons: [<SiReact/>,<SiTypescript/>,<SiFirebase/>,<SiShadcnui/>,<SiTailwindcss/>,<SiVite/>]
    },
    {
        title: "JReversiPA",
        description: "Simple generic java chessboard library with Reversi implementend on top of it, developed as assignment for Advanced Programming exam",
        link: "https://github.com/zusby/JReversiPA",
        icons: [<FaJava/>]
    },
    {
        title: "Web Assembly Program Generator",
        description: "WebAssembly Text (WAT) Generator\n" +
            "This project is a JavaScript application that generates random functions in WebAssembly Text (WAT) format. It also generates a .dot file with the graph of the calls.",
        link: "https://github.com/HamzaBrahmi99/ProjectGroup",
        icons: [<SiJavascript/>,<SiWebassembly/>]
    },
    {
        title: "Caesar Shift",
        description: "A simple Caesar Shift encryption implementation in C that given a File it will generate a key and an encrypted file. Built as an assignment for the Operative Systems exam",
        link: "https://github.com/zusby/LoyalityPlatform",
        icons: [<SiC/>]
    },
];

interface SkillsSectionProps {
    projectsRef?: React.RefObject<HTMLDivElement | null>
}

const ProjectsSection: React.FC<SkillsSectionProps> = ({
    projectsRef,
})=>{


    return (
        <>
            <section
                ref={projectsRef}
                className="bg-gray-950 py-20 px-4 md:px-32 text-center w-3/4"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-12">Academic Projects</h2>
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