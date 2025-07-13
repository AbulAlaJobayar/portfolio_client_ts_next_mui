// "use client";
// import { Box, Button, Container, Stack, Typography } from "@mui/material";
// import Lottie from "lottie-react";
// import animation from "@/assets/animation.json";
// import heroImage from "@/assets/hero.jpg";
// import AnimatedButton from "../../animationButton/animationButton";
// import Link from "next/link";
// const HeroSection = () => {
//   const onButtonClick = () => {
//     fetch("Abul_Ala_Jobayar_Full_stack_Developer.pdf").then((response) => {
//       response.blob().then((blob) => {
//         const fileURL = window.URL.createObjectURL(blob);
//         let alink = document.createElement("a");
//         alink.href = fileURL;
//         alink.download = "Abul_Ala_Jobayar_Full_stack_Developer.pdf";
//         alink.click();
//       });
//     });
//   };
//   return (
//     //     <section
//     //   className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center justify-center px-6"
//     //   style={{
//     //     backgroundImage: "url('/images/hero-bg.jpg')",
//     //   }}
//     // >
//     //   <div className="absolute inset-0 bg-black/60 z-0" /> {/* Overlay */}
//     //   <div className="relative z-10 max-w-3xl text-center text-white">
//     //     <h1 className="text-4xl md:text-5xl font-bold font-sora mb-4">
//     //       Hi, I’m Abul Ala Jobayar
//     //     </h1>
//     //     <p className="text-base md:text-lg font-inter text-gray-200">
//     //       A Full-Stack Developer building modern web applications with React, Next.js, Node.js, and PostgreSQL.
//     //     </p>
//     //     <div className="mt-6 flex justify-center gap-4">
//     //       <a
//     //         href="/resume.pdf"
//     //         className="bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition"
//     //       >
//     //         Download Resume
//     //       </a>
//     //       <a
//     //         href="#projects"
//     //         className="border border-white px-5 py-2 rounded-full font-medium hover:bg-white hover:text-black transition"
//     //       >
//     //         View Projects
//     //       </a>
//     //     </div>
//     //   </div>
//     // </section>
//     <section

//     >
//       <Box sx={{  pb: 2 }}
//        style={{
//         backgroundImage: `url(${heroImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}>
//         <Container>
//           <div className=" sm:flex justify-between items-center md:h-[calc(100vh-70px)] text-center md:text-left max-h-[900px]">
//             <div className="w-full md:1/2">
//               <div className="">
//                 <h4 className=" text-2xl md:text-3xl xl:text-4xl font-bold  text-[#ff6900] pt-10  pb-2 ">
//                   Hi I&apos;m
//                 </h4>
//                 <h1 className="text-3xl  md:text-5xl xl:text-6xl font-extrabold text-[#15295f] my-4 -mt-2">
//                   ABUL ALA JOBAYAR
//                 </h1>
//                 <h6 className=" text-2xl md:text-3xl xl:text-4xl font-semibold text-[#15295f]">
//                   Web Developer{" "}
//                   <span className="text-[#ff6900]">(Full-Stack)</span> Expert
//                 </h6>
//                 <p className="mt-5 mb-10 text-base text-[#15295f]">
//                   Highly skilled Full Stack Developer with 3+ years of hands-on
//                   experience in web development. Proficient in HTML, CSS,
//                   JavaScript, TypeScript, Bootstrap, Tailwind CSS, Express,
//                   Mongoose, Prisma, MongoDB, PostgreSQL, Firebase, React, Redux,
//                   Next.js, graphQL, vitest git, and Github
//                 </p>
//                 <Stack direction={"row"} gap={2}>
//                   <AnimatedButton>
//                     <Link
//                       href="https://wa.me/01928210545"
//                       style={{ textDecoration: "none", color: "#FFFFFF" }}
//                     >
//                       Contact me
//                     </Link>
//                   </AnimatedButton>
//                   <AnimatedButton variant={"outlined"} onClick={onButtonClick}>
//                     {" "}
//                     Download Resume
//                   </AnimatedButton>
//                 </Stack>
//               </div>
//             </div>
//             <div className="w-full md:1/2 hidden md:block">
//               <Lottie animationData={animation} loop={true} />
//             </div>
//           </div>
//         </Container>
//       </Box>
//     </section>
//   );
// };

// export default HeroSection;
"use client";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Lottie from "lottie-react";
import animation from "@/assets/animation.json";
import heroImage from "@/assets/hero.jpg"; // Make sure this path is correct
import Image from "next/image"; // Import Next.js Image component
import AnimatedButton from "../../animationButton/animationButton";
import Link from "next/link";
import ShortCard from "../ShortCard/ShortCard";

const HeroSection = () => {
  const onButtonClick = () => {
    fetch("Abul_Ala_Jobayar_Full_stack_Developer.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Abul_Ala_Jobayar_Full_stack_Developer.pdf";
        alink.click();
      });
    });
  };

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          pb: 1,
        }}
      >
        {/* Background Image - Proper Implementation */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.3)", // Optional overlay
            },
          }}
        >
          <Image
            src={heroImage}
            alt="Background"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            quality={100}
            priority
          />
        </Box>

        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: { md: "calc(100vh - 70px)" },
              maxHeight: { md: "900px" },
              textAlign: { xs: "center", md: "left" },
              position: "relative",
              zIndex: 1,
              color: "white", // Set text color to contrast with background
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "50%" } }}>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: "1rem", md: "2rem", xl: "2rem" },
                  fontWeight: "extrabold",
                  color: "white",
                  mt: -2,
                }}
              >
                Hi I&apos;m, Abul Ala Jobayar
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  fontSize: { xs: "1rem", md: "2rem", xl: "2rem" },
                  fontWeight: "semibold",
                  color: "white",
                }}
              >
                Software Developer{" "}
                <Box component="span" sx={{ color: "#ff6900" }}>
                  (Full-Stack)
                </Box>{" "}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mt: 4,
                  mb: 4,
                  fontSize: "1rem",
                  color: "white",
                  maxWidth: "800px",
                }}
              >
                I’m a passionate Full Stack Developer with hands-on experience
                in real-world projects. I work with JavaScript, TypeScript,
                React, Next.js, Node.js, and Prisma to build scalable,
                high-performance applications. I’ve also used React Native,
                Electron, GraphQL, AWS, and GitHub Actions (CI/CD). Quick to
                learn and focused on clean, maintainable code—I’m driven to
                build software that makes a difference.
              </Typography>
              <Stack
                direction={"row"}
                gap={2}
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <AnimatedButton>
                  <Link
                    href="https://wa.me/01928210545"
                    style={{ textDecoration: "none", color: "#FFFFFF" }}
                  >
                    Contact me
                  </Link>
                </AnimatedButton>
                <AnimatedButton variant={"outlined"} onClick={onButtonClick}>
                  Download Resume
                </AnimatedButton>
              </Stack>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                display: { xs: "none", md: "block" },
              }}
            >
              <Lottie animationData={animation} loop={true} />
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className="mt-3">
      <ShortCard />
      </Box>
    </Box>
  );
};

export default HeroSection;
