'use client';
import React from 'react';
import Container from './layout/container';
import CustomButton from './general/custom-button';
import Typography from './general/Typography';
import { ExternalLink, Github } from 'lucide-react';
import { typeProject } from './lib/types';



export default function CardClient({ project, index }: typeProject) {
    const isEven = index % 2 === 0;

    return (
        <Container className="my-2">
            <div className={`grid md:grid-cols-2 grid-cols-1 items-stretch`}>
                {/* Image */}
                <div
                    className={`${isEven ? 'md:order-1' : 'md:order-2'
                        } flex items-center justify-center h-[250px] sm:h-[400px] overflow-hidden bg-[var(--app-gray-100)] w-full ${isEven?`rounded-l-md md:rounded-l-md md:rounded-r-none`:`rounded-r-md md:rounded-r-md md:rounded-l-none`}`}
                >
                    <img
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        className="object-top object-cover h-full w-full"
                        loading="lazy"
                    />
                </div>

                {/* Content */}
                <div
                    className={`${isEven ? 'md:order-2' : 'md:order-1'
                        } flex flex-col p-5 pt-10 h-full bg-[var(--app-gray-100)] w-full ${isEven?`rounded-r-md md:rounded-r-md md:rounded-l-none`:`rounded-l-md md:rounded-l-md md:rounded-r-none`}`}
                >
                    <Typography variant="h3" className="text-center">
                        {project.title}
                    </Typography>
                    <Typography variant="body2" className="leading-snug my-5">
                        {project.description}
                    </Typography>

                    {/* Tech Stack */}
                    <div className="flex gap-3 flex-wrap">
                        {project.techStack.map((tech, idx) => (
                            <CustomButton key={`${tech}-${idx}`} btnType="link">
                                {tech}
                            </CustomButton>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="w-full my-8 flex gap-5">
                        <CustomButton
                            className="relative group cursor-not-allowed"
                            onClick={(e) => {
                                if (!project.liveLink) e.preventDefault(); // prevent click if not deployed
                            }}
                            aria-label="Currently not deployed"
                        >
                            <ExternalLink
                                color="var(--app-gray-800)"
                                className="hover:scale-110 duration-200 ease-in-out"
                            />

                            {/* Tooltip for projects not deployed yet*/}
                            {!project.liveLink && (
                                <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2
                     bg-gray-800 text-white text-xs rounded px-2 py-1
                     opacity-0 group-hover:opacity-100
                     pointer-events-none transition-opacity duration-200 whitespace-nowrap">
                                    Currently not deployed
                                </span>
                            )}
                        </CustomButton>

                        <CustomButton
                            onClick={() =>
                                window.open(project.githubLink, '_blank', 'noopener,noreferrer')
                            }
                            aria-label="Open GitHub repository"
                        >
                            <Github
                                color="var(--app-gray-800)"
                                className="hover:scale-110 duration-200 ease-in-out"
                            />
                        </CustomButton>
                    </div>
                </div>
            </div>
        </Container>
    );
}