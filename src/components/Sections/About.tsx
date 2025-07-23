import * as React from "react";


interface AboutSectionProps {
    ref?: React.RefObject<HTMLDivElement | null>
}

export default function AboutSection({ref}: AboutSectionProps) {


    return (
        <>
            <section
                ref={ref}
                className="flex flex-col items-center justify-center text-center py-20 px-4 md:px-32 bg-gray-800"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
                <p className="max-w-2xl text-gray-300">
                    Passionate about software development with knowledge in Java Spring Boot, Angular, React, Python,
                    Firebase, PostgreSQL, Docker, and microservices architectures. Motivated to continuously learn and
                    grow in the tech industry.
                </p>
            </section>
        </>
    )
}

