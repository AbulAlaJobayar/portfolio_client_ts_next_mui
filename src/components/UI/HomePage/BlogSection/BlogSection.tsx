import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import BlogCard from "./BlogCard/BlogCard";

const BlogSection = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blog`, {
    cache: "no-store",
  });
  const Blogs = await res.json();
  console.log(Blogs);
  return (
    <div id="#blog">
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
            BLOG
          </Typography>
          <Typography variant="h4" marginBottom={1} fontWeight={600}>
            LATEST NEWS
          </Typography>
        </Stack>
        <Box>
          <Grid container spacing={4}>
            {Blogs?.data.map((blog: any) => (
              <Grid item key={blog?.id} xs={12} sm={6} md={4}>
                <BlogCard blog={blog} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", py: 5 }}>
          <Button sx={{ mx: "auto", color: "white" }}>View More</Button>
        </Box>
      </Container>
    </div>
  );
};

export default BlogSection;
