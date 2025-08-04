import {useRef, useState, useEffect, type JSX} from "react";
import * as React from "react";


export interface Skill{
    name: string;
    icon: JSX.Element;
}


interface SkillsSectionProps {
    skills: Skill[]
}

const SkillsSection: React.FC<SkillsSectionProps> = ({
    skills
}
) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(skills.length / itemsPerPage);

    const scrollToPage = (index: number) => {
        if (containerRef.current) {
            const container = containerRef.current;
            const pageWidth = container.offsetWidth;
            container.scrollTo({
                left: index * pageWidth,
                behavior: "smooth",
            });
        }
        setActiveIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => {
                const next = (prev + 1) % totalPages;
                scrollToPage(next);
                return next;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [totalPages]);

    return (
        <section className="bg-gray-900 py-20 px-4 md:px-32 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Skills</h2>
            <div className="relative overflow-hidden">
                <div
                    ref={containerRef}
                    className="flex flex-nowrap snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar"
                >
                    {Array.from({ length: totalPages }).map((_, pageIdx) => (
                        <div
                            key={pageIdx}
                            className="snap-start shrink-0 w-full flex flex-wrap content-start items-start justify-center gap-4 py-4 min-h-[180px]"
                        >
                            {skills.slice(
                                pageIdx * itemsPerPage,
                                (pageIdx + 1) * itemsPerPage
                            ).map(({ name, icon }, idx) => (
                                <span
                                    key={idx}
                                    className="bg-gray-700 text-gray-100 px-4 py-2 rounded-full shadow-sm hover:bg-gray-600 transition flex items-center gap-2 text-base"
                                >
                                    <span className="text-xl">{icon}</span>
                                    {name}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6 gap-2">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToPage(idx)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                activeIndex === idx ? "bg-white" : "bg-gray-500"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;
