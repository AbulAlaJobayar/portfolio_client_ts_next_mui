"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import animation from "@/assets/animation.json";
import AnimatedButton from "../../animationButton/animationButton";
import Link from "next/link";
const HeroSection = () => {
  const onButtonClick = () => {
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <Box sx={{ background: "#fdf8f7", pt: 2, pb: 2 }}>
      <Container>
        <div className=" sm:flex justify-between items-center md:h-[calc(100vh-70px)] text-center md:text-left max-h-[900px]">
          <div className="w-full md:1/2">
            <div className="">
              <h4 className=" text-2xl md:text-3xl xl:text-4xl font-bold  text-[#ff6900] pt-10  pb-2 ">
                Hi I&apos;m
              </h4>
              <h1 className="text-3xl  md:text-5xl xl:text-6xl font-extrabold text-[#15295f] my-4 -mt-2">
                ABUL ALA JOBAYAR
              </h1>
              <h6 className=" text-2xl md:text-3xl xl:text-4xl font-semibold text-[#15295f]">
                Web Developer{" "}
                <span className="text-[#ff6900]">(Full-Stack)</span> Expert
              </h6>
              <p className="mt-5 mb-10 text-base text-[#15295f]">
                Highly skilled Full Stack Developer with 3+ years of hands-on
                experience in web development. Proficient in HTML, CSS,
                JavaScript, TypeScript, Bootstrap, Tailwind CSS, Express,
                Mongoose, Prisma, MongoDB, PostgreSQL, Firebase, React, Redux,
                Next.js, graphQL, vitest git, and Github
              </p>
              <Stack direction={"row"} gap={2}>
                <AnimatedButton>
                  <Link href="https://wa.me/01928210545" style={{textDecoration:"none", color:"#FFFFFF"}}>Contact me</Link>
                </AnimatedButton>
                <AnimatedButton variant={"outlined"} onClick={onButtonClick}>
                  {" "}
                  Download Resume
                </AnimatedButton>
              </Stack>
            </div>
          </div>
          <div className="w-full md:1/2 hidden md:block">
            <Lottie animationData={animation} loop={true} />
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default HeroSection;
