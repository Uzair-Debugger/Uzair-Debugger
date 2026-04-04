import React from "react";
import Container from "../layout/container";
import Typography from "../general/Typography";
import { Github, Linkedin, Twitter, Phone, Mail } from "lucide-react"; // optional react-icons
import CustomButton from "../general/custom-button";

export default function Footer() {
    return (
        <footer className="py-5">
            <Container className="flex flex-col items-center p-10 gap-6">

                {/* About / Connect */}
                <CustomButton btnType="link">Get in Touch</CustomButton>

                    <div className="max-w-[600px] m-auto text-center">
                    <Typography variant='h3' className="my-4">
                        I ❤️ building cool web apps and exploring new tech.
                    </Typography>

                    <Typography variant="h3">
                        Feel free to reach out or follow me on social media.
                    </Typography>

                    <div className="mt-10 flex flex-col gap-5">
                        <div className="flex items-center justify-center gap-3 text-xl md:text-3xl ">
                            <Mail/>
                        <a href="mailto:smuzair14cse@gmail.com">smuzair14cse@gmail.com</a>
                        </div>

                        <div className="flex items-center justify-center gap-3 text-xl md:text-3xl ">
                        <Phone/>
                        <a href="tel:+923145068487">03145068487</a>
                        </div>
                            
                    </div>
           
                    </div>




            </Container>
            {/* Bottom section spanning 2 columns */}
            <div className=" flex flex-col justify-between col-span-2 gap-5 items-center border-t border-gray-200 mt-10 pt-5">
                {/* Social Links */}
                <div className="flex gap-4 text-2xl text-[var(--app-gray-700)]">
                    <a
                        className="hover:bg-[var(--app-gray-100)] p-1 rounded-sm"
                        href="https://github.com/Uzair-Debugger" target="_blank" rel="noopener noreferrer">

                        <Github />
                    </a>
                    <a

                        className="hover:bg-[var(--app-gray-100)] p-1 rounded-sm"
                        href="https://www.linkedin.com/in/syed-muhammad-uzair-/" target="_blank" rel="noopener noreferrer">
                        <Linkedin />
                    </a>
                </div>

                {/* Made with ❤️ */}
                <Typography variant='body2'>
                    Made with <span className="text-red-500">❤️</span> by Syed Muhammad Uzair
                </Typography>
            </div>
        </footer>
    );
}