import React from "react";
import Container from "../layout/container";
import Typography from "../general/Typography";
import { Github, Linkedin, Twitter } from "lucide-react"; // optional react-icons

export default function Footer() {
    return (
        <footer className="mt-10 bg-[var(--app-gray-50)]">
            <Container className=" p-10 grid md:grid-cols-2 gap-6">

                {/* About / Connect */}
                <div className="flex flex-col gap-4">
                    <Typography variant='h3'>Let's Connect</Typography>
                    <Typography variant='body3'>
                        I love building cool web apps and exploring new tech. Feel free to reach out or follow me on social media.
                    </Typography>
                </div>

                {/* Message / Contact form placeholder */}
                <div className="flex flex-col gap-4">
                    <Typography variant='h3'>Send a Message</Typography>
                    <Typography variant='body3'>
                        You can drop an email at <a href="mailto:smuzair14cse@gmail.com" className="underline">smuzair14cse@gmail.com</a> or connect via social links below.
                    </Typography>
                </div>

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

            </Container>
        </footer>
    );
}