import { ReactNode } from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/Shared/Navbar/Navbar";
import FooterBottom from "@/components/Shared/Footer/Footer";
import Marquee from "react-fast-marquee";
const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
        <div style={{
          background: "linear-gradient(to right,  #20212F,#574654)",
          color: "#fff",
        }} className="bg-[] py-2">
        <Marquee
          direction="left"
          speed={40}
          gradient={false}
          pauseOnHover={true}
          className="text-developer-text text-inter text-base" 
        >
          Hi, I’m Abul Ala Jobayar — a passionate Full-Stack Developer. I build
          modern, high-performance  applications using JavaScript,
          TypeScript, React, ReactNative, Next.js, Node.js, Prisma, Mongoose, and more. Whether
          it&rsquo;s a sleek frontend or a robust backend, I love turning ideas into
          scalable digital experiences. Let’s create something amazing together. ..............
        </Marquee>
      </div>

      <Navbar />
    
      <Box sx={{ minHeight: "100Vh" }}> {children}</Box>
      <FooterBottom />
    </>
  );
};

export default CommonLayout;
