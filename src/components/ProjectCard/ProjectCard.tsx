// ProjectCard.tsx
import {Card, CardContent, CardFooter} from "@/components/ui/card";
import {motion} from "framer-motion";
import type {JSX} from "react";
import {Separator} from "@/components/ui/Separator.tsx";

type Project = {
    title: string;
    description: string;
    link: string;
    icons: JSX.Element[];
};

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({project}: ProjectCardProps) {
    return (
        <motion.div whileHover={{scale: 1.05}} className="transition-transform duration-200">
            <Card className="bg-gray-800 text-left cursor-pointer">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                        <p className="text-gray-300">{project.description}</p>
                    </CardContent>
                </a>
                <Separator/>
                <CardFooter >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <div className="flex gap-2">
                            {project.icons.map((icon, index) => (
                                <div className="bg-white p-3  rounded-3xl opacity-90 " key={index}>{icon}</div>
                            ))}
                        </div>
                    </a>
                </CardFooter>
            </Card>
        </motion.div>
    );
}
