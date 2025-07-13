/* eslint-disable react/no-unescaped-entities */
"use client";
import { Box, Typography, Card, useTheme } from "@mui/material";
import { useRef, useState } from "react";
import { motion, PanInfo, useMotionValue } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    content:
      "The website delivered exceeded our expectations. Perfect blend of aesthetics and functionality with 40% better performance than our old site.",
  },
  {
    id: 2,
    name: "Michael Chen",
    content:
      "Exceptional attention to detail. The custom CMS solution has streamlined our workflow dramatically.",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    content:
      "Their React skills are top-notch. Implemented complex designs perfectly while keeping the code maintainable.",
  },
  {
    id: 4,
    name: "David Wilson",
    content:
      "60% faster API responses after their optimizations. Rare to find someone who masters both frontend and backend.",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    content:
      "Translated our brand vision perfectly. The website has become our best marketing tool.",
  },
  {
    id: 6,
    name: "James Wilson",
    content:
      "On-time delivery with zero defects. Their communication throughout the project was excellent.",
  },
  {
    id: 7,
    name: "Olivia Martinez",
    content:
      "The e-commerce platform they built increased our conversion rate by 35% in the first month.",
  },
  {
    id: 8,
    name: "Robert Davis",
    content:
      "Fixed performance issues that had plagued our app for months. Highly recommended for optimization work.",
  },
];

const ReviewCarousel = () => {
  const theme = useTheme();
  const [currentPage, setCurrentPage] = useState(0);
  const dragX = useMotionValue(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const pages = Math.ceil(reviews.length / 3);
  const visibleReviews = reviews.slice(currentPage * 3, (currentPage + 1) * 3);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const threshold = 100;
    if (info.offset.x > threshold && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (info.offset.x < -threshold && currentPage < pages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Box>
      <Box sx={{ maxWidth: 1200, margin: "0 auto" }}>
        <Typography
          variant="h6"
          marginBottom={1}
          fontWeight={600}
          style={{
            borderBottom: "3px solid #ff6121",
            width: "fit-content",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          Client Feedback
        </Typography>

        <Box
          ref={carouselRef}
          sx={{
            position: "relative",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            my: 1,
          }}
        >
          <motion.div
            drag="x"
            dragConstraints={carouselRef}
            onDragEnd={handleDragEnd}
            style={{
              display: "flex",
              gap: "24px",

              x: dragX,
              padding: "0 20px",
            }}
          >
            {visibleReviews.map((review) => (
              <motion.div
                key={review.id}
                whileHover={{ scale: 1.03 }}
                style={{ minWidth: "calc(25% - 18px)" }}
              >
                <Card
                  sx={{
                    maxHeight: 250,
                    background: "#ffebe3",
                    p: 1,
                    borderRadius: 2,
                    border: "1px solid #ff6121",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  
                >
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color:"black"
                    }}
                  >
                    {review.content}
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: 5,
                      fontWeight: 600,
                      textAlign: "center",
                       color:"black"
                    }}
                  >
                    {review.name}
                  </Typography>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 1,
            mt: 2,
          }}
        >
          {Array.from({ length: pages }).map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentPage(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor:
                  index === currentPage
                    ? ""
                    : theme.palette.action.disabled,
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewCarousel;
