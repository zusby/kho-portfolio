// ProjectCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

type Project = {
    title: string;
    description: string;
    link: string;
};

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div whileHover={{ scale: 1.05 }} className="transition-transform duration-200">
            <Card className="bg-gray-800 text-left cursor-pointer">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                        <p className="text-gray-300">{project.description}</p>
                    </CardContent>
                </a>
            </Card>
        </motion.div>
    );
}
