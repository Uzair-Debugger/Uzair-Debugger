'use client'

import Image from "next/image";
import Container from "../layout/container";
import Typography from "../general/Typography";
import CustomButton from "../general/custom-button";

export default function Hero() {

  const handleClick = () => {
    alert("Contact button clicked!");
  };

  return (
    <section className="min-h-screen flex items-center pb-8 pt-24 md:pt-28">

      <Container>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6 text-center lg:text-left">

            <Typography variant="h2">
              Hi, I'm
            </Typography>

            <Typography variant="h1" className="leading-tight">
              Syed Muhammad Uzair 👋
            </Typography>

            <Typography variant="body1" className="max-w-xl mx-auto lg:mx-0">
              I'm a Full Stack Web Developer with expertise in React.js, Next.js, Express.js and FastAPI, committed to building
              dynamic and scalable applications. I specialize in building efficient
              backend systems and intuitive user interfaces.
            </Typography>

            <div className="space-y-2">

              <Typography variant="body2" className="flex items-center justify-center lg:justify-start gap-2">
                📍 Mardan, Pakistan
              </Typography>

              <Typography variant="body2" className="flex items-center justify-center lg:justify-start gap-2">
                🟢 Available for new projects
              </Typography>

            </div>

            <div className="pt-4 flex justify-center lg:justify-start">
              <CustomButton btnType="submit" onClick={handleClick}>
                Contact Me
              </CustomButton>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center lg:justify-end">

            <div className="relative w-full max-w-[220px] sm:max-w-[260px] md:max-w-[300px]">

              {/* Background decorative box */}
              <div className="
                absolute w-[92%] h-[92%] bg-[var(--app-gray-300)]
                bottom-[-10px] right-[-10px]
                sm:bottom-[-15px] sm:right-[-15px]
                lg:bottom-[-20px] lg:right-[-20px]
                rounded-md
              "></div>

              {/* Image */}
              <div className="relative z-10 overflow-hidden rounded-md border border-gray-700">
                <Image
                  src="/profile_pic_2.jpeg"
                  alt="Profile Image"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}