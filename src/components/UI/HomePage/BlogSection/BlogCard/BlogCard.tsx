import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Box, Stack, Skeleton } from "@mui/material";
import dateFormatter from "@/utils/dateFormatter";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Blog {
  id: string;
  title: string;
  content: string;
  photo: string;
  createdAt: string;
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  const router = useRouter();

  const getExcerpt = (content: string, maxWords = 20) => {
    if (!content) return "No content available";
    const textOnly = content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
    const words = textOnly.split(" ");
    return words.length > maxWords
      ? `${words.slice(0, maxWords).join(" ")}...`
      : textOnly;
  };

  const handleCardClick = (id:string) => {
    console.log(id)
    if (id) {
      router.push(`/blog/${id}`);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%", // <-- This is key
          maxWidth: 400,
          margin: "auto",
          cursor: "pointer",
          borderRadius: 2,
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          "&:hover": {
            boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          },
        }}
        onClick={()=>handleCardClick(blog.id)}
      >
        {/* Image */}
        {blog?.photo ? (
          <CardMedia
            component="img"
            image={blog.photo}
            alt={blog.title || "Blog Post"}
            sx={{
              height: 200,
              objectFit: "cover",
              width: "100%",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          />
        ) : (
          <Skeleton variant="rectangular" height={200} animation="wave" />
        )}

        {/* Content */}
        <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", p: 3 }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 600,
              lineHeight: 1.3,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
    
            }}
          >
            {blog?.title || "Untitled Post"}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 1,
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {getExcerpt(blog?.content, 20)}
          </Typography>

          <Stack direction="row" justifyContent="space-between" alignItems="center" mt="auto">
            <Box
              component={Link}
              href={blog.id ? `/blog/${blog.id}` : "#"}
              passHref
              onClick={(e) => e.stopPropagation()}
              sx={{
                fontWeight: 500,
                fontSize: "0.875rem",
                color: "primary.main",
                textDecoration: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                  textDecoration: "underline",
                  color: "primary.dark",
                },
              }}
            >
              Read More
            </Box>
            <Typography variant="caption" color="text.secondary">
              {dateFormatter(blog?.createdAt) || "No date"}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
