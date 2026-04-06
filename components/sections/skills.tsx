import React from "react";
import Container from "../layout/container";
import Typography from "../general/Typography";
import CustomButton from "../general/custom-button";
import Image from "next/image";
import { skills } from "../lib/data";


export default function SkillsSection() {
  return (
    <div id="skills" className="">
      <Container className="py-20 text-center">
        
        {/* Top Button */}
        <div className="flex justify-center mb-6 flex-col items-center">
          <CustomButton
            btnType="link"
            className="rounded-full "
          >
            Skills
          </CustomButton>

          <Container className="flex flex-col justify-center items-center gap-3">
                <Typography variant="h2">Skills & Technologies</Typography>
                <Typography variant="h3" className="">
          The skills, tools and technologies I am really good at:
        </Typography>
                </Container>
        </div>

        {/* Heading */}
        

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-y-12 gap-x-8 items-center justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>

              <Typography variant="body2" className="text-center">
                {skill.name}
              </Typography>
            </div>
          ))}
        </div>

      </Container>
    </div>
  );
}