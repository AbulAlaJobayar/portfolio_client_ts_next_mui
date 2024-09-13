import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AnimatedCard from "../../AnimateCard/AnimateCard";
import project from "@/services/action/projectData";

const ProjectSection = async () => {
  const projects = await project();
  return (
    <div id="#projects" style={{ background: "#FDF8F7" }}>
      <Container>
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mx={"auto"}
          py={5}
        >
          <Typography
            component={"p"}
            sx={{ fontWeight: "400", marginBottom: 2, fontSize: "24px" }}
          >
            PORTFOLIO
          </Typography>
          <Typography variant="h4" marginBottom={1} fontWeight={600}>
            WORK I HAVE DONE
          </Typography>
        </Stack>
        <Box 
        pb={5}>
          <Grid container spacing={4}>
            {projects?.data?.map((project: any) => (
              <Grid key={project?.id} item xs={12} sm={6} md={4}>
                <AnimatedCard
                  title={project?.title}
                  description={`${project?.description.slice(0, 100)}...`}
                  image={project?.photo}
                  id={project?.id}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ProjectSection;
