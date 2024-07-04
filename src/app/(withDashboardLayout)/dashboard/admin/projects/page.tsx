"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import PFForm from "@/components/Form/PFForm";
import PFInput from "@/components/Form/PFInput";
import PFImage from "@/components/Form/PFImage";
import { getUserInfo } from "@/services/authService";
import { imageHosting } from "@/utils/imageHosting";
import { postProject } from "@/services/action/postProject";

interface IFormInput {
  title: string;
  description: string;
  photo: string;
  githubClient: string;
  githubServer: string;
  liveLink: string;
  userId: string;
}

const ProjectPage = () => {
  const user = getUserInfo();
  const handleUpdate = async (data: FieldValues) => {
    const toastId = toast.loading("Creating Project", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration: 2000,
    });
    try {
      const image = await imageHosting(data.photo);
      const res = await postProject({ ...data, photo: image });
      if (res?.data?.id) {
        toast.success("Created Project", {
          id: toastId,
          duration: 2000,
          position: "top-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box>
      <Box bgcolor={"#FDF8F7"}>
        <Container>
          <Box py={10}>
            <Typography variant="h4" fontWeight={700}>
              Add Project
            </Typography>
            <Typography fontWeight={400}>
              Create your project
            </Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box my={7}>
          <Box>
            <PFForm
              onSubmit={handleUpdate}
              defaultValues={{
                title: "",
                description: "",
                githubClient: "",
                githubServer: "",
                liveLink: "",
                photo: "",
                userId: user?.id,
              }}
            >
              <Grid container spacing={4} my={1}>
                <Grid item md={6}>
                  <PFInput name="title" fullWidth label="Title" size="small" />
                </Grid>
                <Grid item md={6}>
                  <PFInput
                    name="githubClient"
                    fullWidth
                    label="GitHub Client Repo"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <PFInput
                    name="githubServer"
                    fullWidth
                    label="GitHub Server Repo"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <PFInput
                    name="liveLink"
                    fullWidth
                    label="Deploy link"
                    size="small"
                  />
                </Grid>

                <Grid item md={6}>
                  <PFImage name="photo" />
                </Grid>
                <Grid item md={12}>
                  <PFInput
                    name="description"
                    fullWidth
                    label="Description"
                    size="small"
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                sx={{
                  margin: "10px 0px",
                }}
              >
                Add Project
              </Button>
            </PFForm>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectPage;
