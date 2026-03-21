import React from "react";
import Container from "../layout/container";
import Typography from "../general/Typography";
import CustomButton from "../general/custom-button";
import Image from "next/image";
import { skills } from "../lib/data";


export default function SkillsSection() {
  return (
    <div className="">
      <Container className="py-20 text-center">
        
        {/* Top Button */}
        <div className="flex justify-center mb-6">
          <CustomButton
            btnType="link"
            className="rounded-full px-5 py-2 text-sm"
          >
            Skills
          </CustomButton>
        </div>

        {/* Heading */}
        <Typography variant="h3" className="mb-14">
          The skills, tools and technologies I am really good at:
        </Typography>

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