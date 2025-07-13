"use client";
import {
  Box,
  Typography,
  Container,
  Stack,
  Divider,
  IconButton,
  Avatar,
  useTheme,
  Skeleton,
  Chip,
} from "@mui/material";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Share, Bookmark, ArrowBack } from "@mui/icons-material";
import { motion } from "framer-motion";

interface BlogDetails {
  id: string;
  title: string;
  content: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
  user: {
    name: string;
    photo: string;
    description?: string;
  };
}

const BlogDetailsPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [blog, setBlog] = useState<BlogDetails | null>(null);
console.log(blog)
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blog/${params.id}`);
        if (!res.ok) throw new Error("Failed to fetch blog");
        const { data } = await res.json();
        setBlog(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [params.id]);

  const formattedDate = blog?.createdAt
    ? format(new Date(blog.createdAt), "MMMM dd, yyyy")
    : "Unknown date";

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: { xs: 3, sm: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <IconButton
          onClick={() => router.back()}
          sx={{
            mb: 3,
            color: "inherit",
            backgroundColor: theme.palette.action.hover,
            '&:hover': {
              backgroundColor: theme.palette.action.selected,
            }
          }}
        >
          <ArrowBack />
        </IconButton>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            mb: { xs: 4, md: 6 },
            borderRadius: 3,
            overflow: "hidden",
            position: "relative",
            aspectRatio: "16/9",
            boxShadow: 6,
            backgroundColor: theme.palette.grey[100],
          }}
        >
          {isLoading ? (
            <Skeleton
              variant="rectangular"
              width="100%"
              height="100%"
            />
          ) : (
            <Image
              src={blog?.photo || "/placeholder-blog.jpg"}
              alt={blog?.title || "Blog cover image"}
              fill
              priority
              style={{
                objectFit: "cover",
              }}
            />
          )}
        </Box>
      </motion.div>

      {/* Content Section */}
      <Stack spacing={{ xs: 3, md: 4 }}>
        {/* Title and Metadata */}
        <Box>
          {isLoading ? (
            <>
              <Skeleton width="80%" height={60} sx={{ mb: 2 }} />
              <Skeleton width="60%" height={30} />
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 3,
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "3rem",
                    },
                    lineHeight: 1.2,
                    color: theme.palette.text.primary,
                  }}
                >
                  {blog?.title}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  sx={{ mb: 3 }}
                >
                  <Avatar
                    src={blog?.user?.photo}
                    alt={blog?.user?.name}
                    sx={{ width: 56, height: 56 }}
                  />
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      {blog?.user?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {formattedDate}
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", gap: 1, mb: 4 }}>
                <IconButton
                  aria-label="share"
                  sx={{
                    backgroundColor: theme.palette.action.hover,
                    '&:hover': {
                      backgroundColor: theme.palette.action.selected,
                    }
                  }}
                >
                  <Share fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="bookmark"
                  sx={{
                    backgroundColor: theme.palette.action.hover,
                    '&:hover': {
                      backgroundColor: theme.palette.action.selected,
                    }
                  }}
                >
                  <Bookmark fontSize="small" />
                </IconButton>
              </Box>
            </>
          )}
        </Box>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Divider 
            sx={{ 
              my: { xs: 3, md: 4 },
              borderColor: theme.palette.divider,
            }} 
          />
        </motion.div>

        {/* Blog Content */}
        {isLoading ? (
          <Box>
            {[...Array(5)].map((_, i) => (
              <Skeleton
                key={i}
                width={`${100 - (i % 3) * 10}%`}
                height={24}
                sx={{ my: 1.5 }}
              />
            ))}
          </Box>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Box
              component="article"
              sx={{
                "& p": {
                  mb: 3,
                  lineHeight: 1.8,
                  fontSize: "1.1rem",
                  color: theme.palette.text.primary,
                },
                "& img": {
                  maxWidth: "100%",
                  height: "auto",
                  my: 4,
                  borderRadius: 2,
                  boxShadow: 3,
                },
              }}
              dangerouslySetInnerHTML={{ __html: blog?.content || "" }}
            />
          </motion.div>
        )}

        {/* Author Bio Section */}
        {blog?.user?.description && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Box
              sx={{
                mt: 6,
                p: 4,
                borderRadius: 2,
                backgroundColor: theme.palette.mode === 'dark' 
                  ? theme.palette.grey[800] 
                  : theme.palette.grey[100],
              }}
            >
              <Stack direction="row" spacing={3} alignItems="center">
                <Avatar
                  src={blog.user.photo}
                  alt={blog.user.name}
                  sx={{ width: 80, height: 80 }}
                />
                <Box>
                  <Typography variant="h6" gutterBottom>
                    About {blog.user.name}
                  </Typography>
                  <Typography variant="body1">
                    {blog.user.description}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </motion.div>
        )}
      </Stack>
    </Container>
  );
};

export default BlogDetailsPage;