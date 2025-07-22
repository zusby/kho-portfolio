import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import * as React from "react";

import profileImg from "./assets/profile.jpg";
import ProjectCard from "@/components/ProjectCard/ProjectCard.tsx";

const projects = [
    {
        title: "JReversiPA",
        description: "Simple generic java chessboard library with Reversi implementend on top of it, developed as assignment for Advanced Programming exam",
        link: "https://github.com/zusby/JReversiPA"
    },
    {
        title: "Project Group - Web Assembly Program Generator",
        description: "WebAssembly Text (WAT) Generator\n" +
            "This project is a JavaScript application that generates random functions in WebAssembly Text (WAT) format. It also generates a .dot file with the graph of the calls.",
        link: "https://github.com/HamzaBrahmi99/ProjectGroup"
    },
    {
        title: "Loyality Platform",
        description: "A Java Spring Boot backend to create and manage multiple e-commerce stores with focus on retainability and gain of customers, and income increase ",
        link: "https://github.com/zusby/LoyalityPlatform"
    }
];

export default function Portfolio() {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);

    const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="font-sans text-white bg-gray-900 min-h-screen">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-8 py-4 bg-gray-800 shadow-md sticky top-0 z-50">
                <h1 className="text-xl font-bold">My Portfolio</h1>
                <div className="space-x-4">
                    <Button variant="ghost" onClick={() => scrollTo(aboutRef)}>
                        About
                    </Button>
                    <Button variant="ghost" onClick={() => scrollTo(projectsRef)}>
                        Projects
                    </Button>
                </div>
            </nav>

            {/* Hero Section */}
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
            </section>

            {/* About Section */}
            <section
                ref={aboutRef}
                className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-32 bg-gray-900"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
                <p className="max-w-2xl text-gray-300">
                    Passionate about software development with knowledge in Java Spring Boot, Angular, React, Python, Firebase, PostgreSQL, Docker, and microservices architectures. Motivated to continuously learn and grow in the tech industry.
                </p>
            </section>

            {/* Projects Section */}
            <section
                ref={projectsRef}
                className="bg-gray-950 py-20 px-4 md:px-32 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-12">Academic Projects</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
}