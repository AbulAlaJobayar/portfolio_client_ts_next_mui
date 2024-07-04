"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import PFForm from "@/components/Form/PFForm";
import PFInput from "@/components/Form/PFInput";
import PFImage from "@/components/Form/PFImage";
import { getUserInfo } from "@/services/authService";
import { postProject } from "@/services/action/postProject";
import PFSelectField from "@/components/Form/PFSelectField";
import { postSkill } from "@/services/action/postSkill";
import PFDatePicker from "@/components/Form/PFDatePicker";
import { postExperience } from "@/services/action/postExperience";

interface IFormInput {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

const ExperiencePage = () => {
  const user = getUserInfo();
  const handleUpdate = async (data: FieldValues) => {
    const toastId = toast.loading("Creating Experience", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration: 2000,
    });
    try {
      const res = await postExperience({ ...data });
      if (res?.data?.id) {
        toast.success("Created Experience", {
          id: toastId,
          duration: 2000,
          position: "top-center",
        });
      } else {
        toast.warning("something went wrong", {
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
              Add Experience
            </Typography>
            <Typography fontWeight={400}>Create your Experience</Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box my={7}>
          <Box>
            <PFForm
              onSubmit={handleUpdate}
              defaultValues={{
                company: "",
                position: "",
                startDate: undefined,
                endDate: undefined,
                description: "",
                userId: user?.id,
              }}
            >
              <Grid container spacing={4} my={1}>
                <Grid item md={6}>
                  <PFInput
                    name="company"
                    fullWidth
                    label="Company Name"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <PFInput
                    name="position"
                    fullWidth
                    label="Your Position"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <PFDatePicker name="startDate" label="Start Date" />
                </Grid>
                <Grid item md={6}>
                  <PFDatePicker name="endDate" label="End Date" />
                </Grid>
                <Grid item md={6}>
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
                Add Experience
              </Button>
            </PFForm>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExperiencePage;
