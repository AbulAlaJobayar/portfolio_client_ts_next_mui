import { Box, Button, Container, Grid, Typography } from "@mui/material";
import image from "@/assets/JOBAYAR.png";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <Box >
      <Container>
        <Box>
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={6}>
              <Image src={image} alt="about" height={"500"} width={"500"} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" marginBottom={1} fontWeight={600}>
                About Me
              </Typography>
              <Typography
                component={"p"}
                sx={{ fontWeight: "400", marginBottom: 2, fontSize: "24px" }}
              >
                Full Stack Developer
              </Typography>

              <Typography>
                Hello! I&apos;m Abul Ala Jobayar, but you can call me Jobayar. I
                am a dedicated and skilled Full Stack Developer with over 3
                years of experience in web development. I excel in creating
                beautiful, responsive, and dynamic websites and applications.
                <br />
                <Box component={"span"} sx={{ fontWeight: "bold" }}>
                  {" "}
                  Frontend Development:
                </Box>{" "}
                Proficient in HTML, CSS, JavaScript, TypeScript, and React.js.
                Experienced with styling frameworks like Tailwind CSS, SaSS,
                CSS3, and Bootstrap. I utilize state management tools such as
                Redux and handle APIs with Axios.
                <br />
                <Box component={"span"} sx={{ fontWeight: "bold" }}>
                  Backend Development:
                </Box>{" "}
                Expertise in Node.js and Express.js for building robust
                server-side applications. Knowledgeable in databases such as
                MongoDB, PostgreSQL, Firebase, Prisma, and Mongoose.
                <br />
                <Box component={"span"} sx={{ fontWeight: "bold" }}>
                  Full Stack Development:
                </Box>{" "}
                Skilled in using Next.js for server-side rendering and static
                site generation. Familiar with GraphQL for efficient data <br />{" "}
                <br /> I also have experience with various UI libraries like
                MUI, Shadcn, NextUI, and Antd. I am well-versed in testing with
                Jest and version control with Git and GitHub.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
        <Link href={"/about"}>
          {" "}
          <Button sx={{ mx: "auto", color: "white" }}>About More</Button>
        </Link>
      </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
