"use client";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FieldValues } from "react-hook-form";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import PFForm from "@/components/Form/PFForm";

import PFInput from "@/components/Form/PFInput";
import PFQuill from "@/components/Form/PFQuil";
import PFImage from "@/components/Form/PFImage";
import { getUserInfo } from "@/services/authService";
import { imageHosting } from "@/utils/imageHosting";
import { postBlog } from "@/services/action/postBlog";

interface IFormInput {
  title: string;
  content: string;
  photo: string;
  userId: string;
}

const BlogPage = () => {

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
      
      const res = await postBlog({ ...data, photo: image });
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
      <Box
        bgcolor={"#FDF8F7"}
      >
        <Container>
          <Box py={10}>
            <Typography variant="h4" fontWeight={700}>
              Add your Blog
            </Typography>
            <Typography fontWeight={400}>
              Write your Blog and show your skill
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
                content: "",
                photo: "",
                userId: user?.id,
              }}
            >
              <Grid container spacing={4} my={1}>
                <Grid item md={6}>
                  <PFInput name="title" fullWidth label="Title" size="small" />
                </Grid>

                <Grid item md={6}>
                  <PFImage name="photo" />
                </Grid>
                <Grid item md={12}>
                  <PFQuill name="content" />
                </Grid>
              </Grid>

              <Button
                type="submit"
                fullWidth
                sx={{
                  margin: "10px 0px",
                }}
              >
                Add Blog
              </Button>
            </PFForm>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogPage;
