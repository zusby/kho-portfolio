import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import {useEffect, useRef, useState} from "react";

const experiences = [

    {
        title: "Curricular internship",
        company: "ICCS Informatica",
        period: "2024",
        description:
            "300 hours internship as Full Stack Developer",
        technologies: ["Angular", "Java", "Spring Framework"],
    },
    {
        title: "Bachelor's Degree",
        company: "University of Camerino",
        period: "Apr 2025",
        description:
            "Thesis title: Study of microservices architecture and implementation of Hexagonal architecture in the project SiLaw",
        technologies: [],
    },
    {
        title: "Software Developer",
        company: "Loccioni Group",
        period: "July 2025 - Now",
        description:
            "Software development in a SOA architecture with PLC Integration ",
        technologies: ["C#"],
    },
];

export default function ExperiencesSection() {
    const [activeIndex, setActiveIndex] = useState<number>(experiences.length - 1);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const childWidth = 240 + 32;
            const visibleCount = Math.floor(container.offsetWidth / childWidth);
            const hiddenCount = Math.max(0, activeIndex - (visibleCount - 1));
            const scrollLeft = hiddenCount * childWidth;
            container.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }
    }, [activeIndex]);

    const handleSetActiveIndex = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="w-full overflow-x-auto py-12 md:py-20 px-6 bg-gray-900 text-white">
            <div ref={containerRef} className="flex items-start gap-8 relative min-w-[800px]">
                <div className="absolute top-5 left-0 right-0 h-1 bg-white/30 z-0" />

                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`relative z-10 text-center flex-shrink-0 w-60 ${
                            index <= activeIndex - 2 ? "hidden md:block" : ""
                        }`}
                    >
                        <button
                            className={`mx-auto mb-3 w-6 h-6 rounded-full border-2 border-white bg-gray-800 transition-all ${
                                activeIndex === index ? "bg-white" : ""
                            }`}
                            onClick={() => handleSetActiveIndex(index)}
                        />
                        <div className="text-sm font-semibold mb-2 text-gray-300">{exp.period}</div>

                        {activeIndex === index && (
                            <div className="bg-gray-800 shadow-md rounded-lg p-4 text-left space-y-3">
                                <div className="flex items-center gap-2">
                                    <div className="h-9 w-9 bg-white/10 rounded-full flex items-center justify-center">
                                        <Building2 className="h-5 w-5 text-white/70" />
                                    </div>
                                    <span className="text-base font-semibold text-white">{exp.company}</span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-white">{exp.title}</h3>
                                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                                        <Calendar className="h-4 w-4" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-300">{exp.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <Badge key={tech} variant="secondary" className="rounded-full bg-white/10 text-white">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}