import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const experiences = [
    {
        title: "Curricular internship",
        company: "ICCS Informatica",
        period: "2024",
        description: "300 hours internship as Full Stack Developer",
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
        description: "Software development in a SOA architecture with PLC Integration ",
        technologies: ["C#"],
    },
];

const ITEM_WIDTH = 240;
const GAP = 32;
const LINE_ANIMATION_DURATION = 2; // seconds

export default function ExperiencesSection() {
    const [activeIndex, setActiveIndex] = useState(experiences.length - 1);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const totalWidth = experiences.length * (ITEM_WIDTH + GAP);

        const scrollLeft = totalWidth - container.offsetWidth / 2 - ITEM_WIDTH / 2;

        container.scrollTo({
            left: scrollLeft > 0 ? scrollLeft : 0,
            behavior: "smooth",
        });
    }, []);

    useEffect(() => {
        if (hasAnimated) return; // prevent re-trigger

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({ scaleX: 0.8, transition: { duration: LINE_ANIMATION_DURATION, ease: "easeOut" } });
                    setHasAnimated(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.2, // trigger when 20% visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [controls, hasAnimated]);

    return (
        <div
            ref={sectionRef}
            className="overflow-x-auto py-12 md:py-20 px-6 bg-gray-900 text-white"
        >
            <div ref={scrollContainerRef} className="w-full overflow-x-auto relative">
                <div className="relative flex items-start gap-8 w-max mx-auto z-10">
                    {/* Timeline line container */}
                    <motion.div
                        className="absolute top-[20px] left-0 h-1 flex"
                        style={{ width: experiences.length * (ITEM_WIDTH + GAP), transformOrigin: "left" }}
                        initial={{ scaleX: 0 }}

                        animate={controls}
                    >
                        <div
                            className="max-w-[2.5rem] flex-shrink-0"
                            style={{
                                backgroundImage:
                                    "repeating-linear-gradient(to right, rgba(255,255,255,0.5) 0 4px, transparent 4px 8px)",
                                height: "4px",
                                width: "40px",
                            }}
                        />
                        <div className="flex-grow bg-white/30" />
                    </motion.div>

                    {/* Timeline items - no animation here */}
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative w-60 text-center flex-shrink-0">
                            <button
                                className={`mx-auto mb-3 w-6 h-6 rounded-full border-2 border-white bg-gray-800 transition-all ${
                                    activeIndex === index ? "bg-white" : ""
                                }`}
                                onClick={() => setActiveIndex(index)}
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
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="rounded-full bg-white/10 text-white"
                                            >
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
        </div>
    );
}
