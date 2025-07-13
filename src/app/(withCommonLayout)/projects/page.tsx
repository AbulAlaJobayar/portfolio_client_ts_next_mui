"use client";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Stack,
  Button,
  useTheme,
  Divider,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTypescript, SiMui, SiNextdotjs } from "react-icons/si";
import { useEffect, useState } from "react";
import project from "@/services/action/projectData";
import { useRouter } from "next/navigation";
  

type Project = {
  id: string;
  title: string;
  description: string;
  githubClient: string;
  githubServer: string;
  liveLink: string;
  photo: string;
  tags: string[];
  createdAt: string;  // or `Date` if you parse it
  updatedAt: string;  // or `Date` if you parse it
};
const ProjectPage = () => {
  const theme = useTheme();
  const [projects, setProjects] = useState<Project[]>([]);
  const router = useRouter();

console.log(projects);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await project();
        setProjects(res?.data || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
        // setError("Failed to load projects");
      } finally {
        // setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (projects.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h5" color="text.secondary">
          No projects found.
        </Typography>
      </Box>
    );
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
 
  const handleNavigate=(id:string)=>{
router.push(`/projects/${id}`);
  }

  return (
    <Box sx={{ py: 8, background: theme.palette.background.default }}>
      <Container maxWidth="xl">
        {/* Hero Section */}
        <Box sx={{ textAlign: "left", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h6"
              marginBottom={1}
              fontWeight={600}
              style={{
                borderBottom: "3px solid #ff6121",
                width: "fit-content",
              }}
            >
              My Works
            </Typography>

            <Typography
              component="p"
              color="text.secondary"
              sx={{ maxWidth: "700px" }}
            >
              Here are some of my featured projects. Each one <br /> represents
              a unique challenge and solution.
            </Typography>
          </motion.div>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project.id}>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "12px",
                    boxShadow: theme.shadows[4],
                    transition: "transform 0.3s, box-shadow 0.3s",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: theme.shadows[8],
                    },
                  }}
                  onClick={() => handleNavigate(project.id)}
                >
                  {/* Project Image */}
                  <CardMedia
                    component="img"
                    height="200"
                    image={project?.photo}
                    alt={project?.title}
                    sx={{
                      objectFit: "cover",
                      borderTopLeftRadius: "12px",
                      borderTopRightRadius: "12px",
                    }}
                  />

                  {/* Project Content */}
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                    
                      sx={{  fontWeight: 600 }}
                    >
                      {project?.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"

                    >
                      {project?.description.split(" ").slice(0, 20).join(" ")}
                      ...
                    </Typography>

                    {/* Tags */}
                    <Box sx={{ mb: 1}}>
                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        useFlexGap
                      >
                        {project?.tags?.map((tag: any) => (
                          <Chip
                            key={tag}
                            label={tag}
                            size="small"
                            sx={{
                              borderRadius: "4px",
                              bgcolor:
                                theme.palette.mode === "dark"
                                  ? "rgba(255,255,255,0.1)"
                                  : "rgba(0,0,0,0.05)",
                            }}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </CardContent>

                  {/* Actions */}
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Divider sx={{ mb: 2 }} />
                    <Stack direction="row" spacing={2}>
                      <Button
                        component="a"
                        href={project?.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="small"
                        startIcon={<FiGithub />}
                        sx={{
                          flex: 1,
                          textTransform: "none",
                          borderRadius: "6px",
                        }}
                      >
                        Client
                      </Button>
                      <Button
                        component="a"
                        href={project?.githubServer}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="small"
                        startIcon={<FiGithub />}
                        sx={{
                          flex: 1,
                          textTransform: "none",
                          borderRadius: "6px",
                        }}
                      >
                        Server
                      </Button>
                      <Button
                        component="a"
                        href={project?.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        size="small"
                        startIcon={<FiExternalLink />}
                        sx={{
                          flex: 1,
                          textTransform: "none",
                          borderRadius: "6px",
                        }}
                      >
                         Demo
                      </Button>
                    </Stack>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            mt: 10,
            p: 6,
            borderRadius: "12px",
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(135deg, rgba(30,30,30,0.8) 0%, rgba(50,50,50,0.8) 100%)"
                : "linear-gradient(135deg, rgba(240,240,240,0.8) 0%, rgba(220,220,220,0.8) 100%)",
            boxShadow: theme.shadows[2],
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 2, fontWeight: 600 }}
          >
            Have a project in mind?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 3, maxWidth: "600px", mx: "auto" }}
          >
            I&apos;m always interested in hearing about new projects. Whether
            you have a question or just want to say hi, I&apos;ll get back to
            you!
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="#contact"
            sx={{
              px: 6,
              borderRadius: "8px",
              fontWeight: 600,
              textTransform: "none",
              boxShadow: theme.shadows[4],
            }}
          >
            Let&apos;s Talk
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectPage;
