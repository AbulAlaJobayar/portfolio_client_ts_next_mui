import { Box, Container, Stack, Typography } from "@mui/material";
import BlogCard from "./BlogCard/BlogCard";

const BlogSection = () => {
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
          <BlogCard />
        </Box>
      </Container>
    </div>
  );
};

export default BlogSection;
