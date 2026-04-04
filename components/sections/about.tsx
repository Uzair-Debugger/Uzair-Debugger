import React from "react";
import Container from "../layout/container";
import Typography from "../general/Typography";
import CustomButton from "../general/custom-button";
import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="bg-[var(--app-gray-50)] min-h-screen flex items-center">
      <Container className="py-20 flex flex-col">
        
         {/* Button */}
            <CustomButton btnType="link" className="mx-auto ">
              About me
            </CustomButton>
            <Container className="flex flex-col justify-center mb-6 items-center gap-3">
                <Typography variant="h2">About me</Typography>
               </Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT IMAGE SECTION */}
          <div className="relative flex justify-center lg:justify-start">
            
            {/* Background decorative blocks */}
            {/* <div className="absolute left-0 top-10 w-16 h-64 bg-[#1f2a3a] -z-10"></div>
            <div className="absolute bottom-0 left-10 w-64 h-16 bg-[#1f2a3a] -z-10"></div> */}

            {/* Profile Image */}
            <div className="bg-gray-300 p-4">
              <Image
                src="/profile_pic_2.jpeg" // replace with your image
                alt="Profile"
                width={350}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="">
            
           

            {/* Heading */}
            <Typography variant="h2" className="mb-6 leading-snug">
              Curious about me? Here you have it:
            </Typography>

            {/* Paragraphs */}
            <Typography variant="body1" className="mb-5 leading-relaxed">
              I'm a dedicated, Full Stack Developer with a strong focus on creating seamless user experiences and efficient web solutions. Specializing in Angular, React.js, and Node.js, I bring both the technical and visual aspects of digital products to life. I'm passionate about developing intuitive, responsive interfaces and writing clean, high-performance code. My commitment to delivering top-quality work drives me to constantly innovate and excel in every project.
            </Typography>

            <Typography variant="body1" className="mb-5 leading-relaxed">
              I began my web development career in 2023, and since then, I've continually expanded my skills. Each project has fueled my growth as a full stack developer, driving my passion for creating efficient, user-friendly web applications.
            </Typography>

            <Typography variant="body1" className="mb-5 leading-relaxed">
              I'm constantly evolving by tackling new challenges and expanding my knowledge daily. I'm passionate about understanding user behavior and creating web applications that deliver valuable experiences for all users.
            </Typography>

            <Typography variant="body1" className="leading-relaxed">
              I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
            </Typography>

          </div>
        </div>
      </Container>
    </div>
  );
}