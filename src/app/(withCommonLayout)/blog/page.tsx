'use client';
import { Box, Container, Grid, Typography } from "@mui/material";
import BlogCard from "@/components/UI/HomePage/BlogSection/BlogCard/BlogCard";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blog`, {
          cache: "no-store",
        });
        const Blogs = await res.json();
        setBlogs(Blogs?.data || []);
      } catch (err) {
        console.error("Error fetching Blog:", err);
        setError("Failed to load Blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Box mb={4}>
      <Box bgcolor={"#FDF8F7"} sx={{ clipPath: "polygon(100% 0, 100% 100%, 28% 76%, 0 100%, 0 0)" }}>
        <Container>
          <Box py={10}>
            <Typography variant="h4" fontWeight={700}>Our Blog</Typography>
            <Typography fontWeight={400}>Our latest Blog</Typography>
          </Box>
        </Container>
      </Box>
      <Box mt={4}>
        <Container>
          {loading && <Typography>Loading blogs...</Typography>}
          {error && <Typography color="error">{error}</Typography>}
          <Grid container spacing={4}>
            {blogs?.map((blog: any) => (
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
