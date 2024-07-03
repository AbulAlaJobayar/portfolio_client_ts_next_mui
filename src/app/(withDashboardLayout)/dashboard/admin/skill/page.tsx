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

interface IFormInput {
  name: string;
  level: string;
  userId: string;
}

const SkillPage = () => {
  const user = getUserInfo();
  const handleUpdate = async (data: FieldValues) => {
    const toastId = toast.loading("Creating Contact", {
      position: "top-center",
      style: {
        color: "#8ed1a3",
      },
      duration: 2000,
    });
    try {
      const res = await postSkill({ ...data });
      if (res?.data?.id) {
        toast.success("Created Contact", {
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
              Add Skill
            </Typography>
            <Typography fontWeight={400}>Create your Skill</Typography>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box my={7}>
          <Box>
            <PFForm
              onSubmit={handleUpdate}
              defaultValues={{
                name: "",
                level: "",
                userId: user?.id,
              }}
            >
              <Grid container spacing={4} my={1}>
                <Grid item md={6}>
                  <PFInput
                    name="name"
                    fullWidth
                    label="Skill Name"
                    size="small"
                  />
                </Grid>
                <Grid item md={6}>
                  <PFSelectField
                    name="level"
                    items={["Beginner", "Intermediate", "Expert"]}
                    label="Experience Level"
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
                Add Skill
              </Button>
            </PFForm>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SkillPage;
