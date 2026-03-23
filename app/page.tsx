import React from "react";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import Card from "@/components/card";
import Projects from "@/components/sections/projects";
import Footer from "@/components/sections/footer";


export default function Page(){

  return(
    <>
    <Hero/>
    <About/>
    <SkillsSection/>
    <Projects/>
    <Footer/>
    </>
  )
}