'use client'

import Image from "next/image";

import Container from "@/components/layout/container";
import Typography from "@/components/general/Typography";
import CustomButton from "@/components/general/custom-button";

export default function Hero() {

  const handleClick = () => {
    alert("Contact button clicked!");
  };

  return (
    <section className=" min-h-screen flex items-center">

      <Container>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <Typography variant="h2">
              Hi, I'm
            </Typography>

            <Typography variant="h1" className="leading-tight">
              Syed Muhammad Uzair 👋
            </Typography>

            <Typography variant="body1" className="max-w-xl">
              I'm a Full Stack Web Developer with expertise in React.js, Next.js, Express.js and FastAPI, committed to building
              dynamic and scalable applications. I specialize in building efficient
              backend systems and intuitive user interfaces.
            </Typography>

            <div className="space-y-2">

              <Typography variant="body2" className="flex items-center gap-2">
                📍 Mardan, Pakistan
              </Typography>

              <Typography variant="body2" className="flex items-center gap-2">
                🟢 Available for new projects
              </Typography>

            </div>

            <div className="pt-4">
              <CustomButton btnType="submit" onClick={handleClick}>
                Contact Me
              </CustomButton>
            </div>

          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px]">

              <div className="absolute w-[92%] h-[92%] bg-slate-700 bottom-[-20px] right-[-20px] rounded-md"></div>

              <div className="relative z-10 overflow-hidden rounded-md border border-gray-700">
                <Image
                  src="/profile_pic_2.jpeg"
                  alt="Profile Image"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>

            </div>
          </div>

        </div>

      </Container>

    </section>
  );
}