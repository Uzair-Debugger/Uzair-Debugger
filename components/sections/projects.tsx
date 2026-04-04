import React from "react";
import { projects } from "../lib/data";
import Card from "../card";
import CustomButton from "../general/custom-button";
import Typography from "../general/Typography";
import Container from "../layout/container";

export default function Projects() {
    return (
        <section className="bg-[var(--app-gray-50)] py-20">
            <div className="flex justify-center flex-col items-center">
                <CustomButton btnType="link">Projects</CustomButton>
                <Container className="flex flex-col justify-center items-center gap-3 text-center">
                <Typography variant="h2">Projects</Typography>
                <Typography variant="h3">Some of my recent projets that I build:</Typography>
                </Container>
            </div>

            
            {projects.map((project, index) =>
                <Card key={project.id} project={project} index={index} />
            )}
        </section>
    )
}