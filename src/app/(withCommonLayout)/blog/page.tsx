import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import BlogCard from "@/components/UI/HomePage/BlogSection/BlogCard/BlogCard";
const AboutPage = async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blog`, {
    cache: "no-store",
  });
  const Blogs = await res.json();
  return (
    <Box mb={4}>
      <Box
        bgcolor={"#FDF8F7"}
      sx={{ clipPath: "polygon(100% 0, 100% 100%, 28% 76%, 0 100%, 0 0)" }}
      >
        <Container>
          <Box py={10}>
            <Typography variant="h4" fontWeight={700}>
              Our Blog
            </Typography>
            <Typography fontWeight={400}>Our latest Blog</Typography>
          </Box>
        </Container>
      </Box>
     <Box mt={4}>
     <Container >
       
     <Grid container spacing={4}>
            {Blogs?.data.map((blog: any) => (
              <Grid item key={blog?.id} xs={12} sm={6} md={4}>
                <BlogCard blog={blog} />
              </Grid>
            ))}
          </Grid>
      </Container>
     </Box>
    </Box>
  );
};

export default AboutPage;
