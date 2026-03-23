import React from "react";
import { projects } from "../lib/data";
import Card from "../card";

export default function Projects() {
    return (
        <section>
            {projects.map((project, index) =>
                <Card key={project.id} project={project} index={index}/>
            )}
        </section>
    )
}