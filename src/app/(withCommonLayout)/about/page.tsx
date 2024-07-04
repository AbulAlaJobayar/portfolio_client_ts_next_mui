import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const AboutPage = () => {
  return (
    <Box mb={4}>
      <Box
        bgcolor={"#FDF8F7"}
      sx={{ clipPath: "polygon(100% 0, 100% 100%, 28% 76%, 0 100%, 0 0)" }}
      >
        <Container>
          <Box py={10}>
            <Typography variant="h4" fontWeight={700}>
              About Me
            </Typography>
            <Typography fontWeight={400}>Know about Jobayar.</Typography>
          </Box>
        </Container>
      </Box>
     <Box mt={4}>
     <Container >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={400} my={5}>
              Welcome to my portfolio! I&lsquo;m Jobayar, a passionate
              full-stack web developer with expertise in creating dynamic and
              responsive web applications. With a strong foundation in HTML,
              CSS, and JavaScript, combined with advanced skills in React,
              Next.js, Redux, Node.js, Express, Mongoose, Prisma, GraphQL, and
              Vitest, I strive to deliver high-quality and efficient solutions.
              My journey in web development has been driven by a love for coding
              and a dedication to continuous learning. Whether it&lsquo;s
              designing user-friendly interfaces or building robust backend
              systems, I am committed to turning ideas into reality. Explore my
              projects, learn about my skills, and get in touch if you&lsquo;d
              like to collaborate.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              My Mission
            </Typography>
            <Typography fontWeight={400}>
              My mission as a full-stack web developer is to create innovative,
              high-quality web applications that exceed user expectations. I am
              dedicated to: <br />
              <Box component={"span"} style={{ fontWeight: 700 }}>
                {" "}
                1. Exceptional User Experiences:
              </Box>{" "}
              Crafting intuitive and engaging interfaces.
              <br />{" "}
              <Box component={"span"} style={{ fontWeight: 700 }}>
                {" "}
                2. Robust Solutions:
              </Box>{" "}
              Developing secure and scalable backend systems.
              <br />
              <Box component={"span"} style={{ fontWeight: 700 }}>
                {" "}
                3. Continuous Learning:
              </Box>
              Staying updated with the latest web development trends.
              <br />
              <Box component={"span"} style={{ fontWeight: 700 }}>
                {" "}
                4. Collaborative Success:
              </Box>
              Working closely with clients and teams to deliver impactful
              solutions. I aim to transform ideas into remarkable digital
              experiences.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              Education
            </Typography>
            <Typography fontWeight={400}>
              <Typography component={"span"} fontWeight={700}>
                National University, Bangladesh{" "}
              </Typography>
              <br />
              <Typography component={"span"}>
                Master of Arts (M.A) in Islamic History and culture. passed
                in(2023){" "}
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              Courses
            </Typography>
            <Box>
              <Typography fontWeight={400} sx={{ my: 2 }}>
                Web development course.
                <Typography component={"span"} fontWeight={700}>
                  {" "}
                  LEDP lOT 5{" "}
                </Typography>{" "}
                Passed in (2020)
              </Typography>
              <Typography fontWeight={400} sx={{ my: 2 }}>
                Compleate web development course.
                <Typography component={"span"} fontWeight={700}>
                  {" "}
                  Programming Hero
                </Typography>{" "}
                Passed in (2023)
              </Typography>
              <Typography fontWeight={400} sx={{ my: 2 }}>
                Apollo Level - 2 web development .
                <Typography component={"span"} fontWeight={700}>
                  {" "}
                  Programming Hero
                </Typography>{" "}
                Passed in (2024)
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              Why Choose ME?
            </Typography>
            <Typography>
              Choosing the right developer for your project is crucial.
              Here&lsquo;s why I stand out:
            </Typography>
            <Box>
              <Typography fontWeight={400} sx={{ my: 2 }}>
                <span style={{ fontWeight: 700 }}>1. Expertise:</span> With
                proficiency in HTML, CSS, JavaScript, React, Next.js, Redux,
                Node.js, Express, MongoDB, Prisma, GraphQL, and Vitest, I bring
                a comprehensive skill set to the table.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                <span style={{ fontWeight: 700 }}>3. Innovation:</span> I am
                committed to leveraging cutting-edge technologies and best
                practices to deliver innovative and efficient solutions.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                <span style={{ fontWeight: 700 }}>4.Collaboration:</span> I
                believe in open communication and teamwork. I work closely with
                clients to understand their vision and deliver results that
                exceed expectations.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                <span style={{ fontWeight: 700 }}>
                  5. Commitment to Quality:
                </span>{" "}
                Quality is at the forefront of everything I do. I strive for
                excellence in both design and functionality, ensuring a seamless
                user experience.
              </Typography>
              By choosing me, you&lsquo;re choosing a dedicated professional who
              is passionate about transforming ideas into impactful digital
              solutions. Let&lsquo;s collaborate and create something
              extraordinary together!
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 2 }}>
              Contact Me
            </Typography>
            <Typography fontWeight={400} mb={2}>
              Ready to start your project or have any questions? Let&lsquo;s
              connect!
            </Typography>
            <Stack>
              <a href="mailto:abulalajobayar@gmail.com" style={{textDecoration:"none",}}><EmailIcon/> abulalajobayar@gmail.com</a>
              <a href="tel:+8801928210545" style={{textDecoration:"none",}}><CallIcon/>01928210545</a>
              <a href="https://www.linkedin.com/in/abul-ala-jobayar-4972b5202" style={{textDecoration:"none",}}><LinkedInIcon/>Abul Ala Jobayar</a>
              <a href="https://github.com/AbulAlaJobayar" style={{textDecoration:"none",}}><GitHubIcon/>01928210545</a>
             
            </Stack>
            <Typography my={2}>
            I look forward to hearing from you!
            </Typography>
          </Grid>
        </Grid>
      </Container>
     </Box>
    </Box>
  );
};

export default AboutPage;
