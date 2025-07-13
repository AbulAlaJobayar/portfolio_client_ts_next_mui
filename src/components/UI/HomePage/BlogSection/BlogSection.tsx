"use client";
import {
  Box,
  Container,
  Stack,
  Typography,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useCallback, useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BlogCard from "./BlogCard/BlogCard";
const BlogSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/blog`, {
          cache: "no-store",
        });
        const Blogs = await res.json();
        setProjects(Blogs?.data || []);
      } catch (err) {
        console.error("Error fetching Blog:", err);
        setError("Failed to loadBlogs");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Auto slide functionality
  useEffect(() => {
    if (projects.length > 0 && !isHovered) {
      autoSlideInterval.current = setInterval(() => {
        if (swiperRef.current) {
          if (swiperRef.current.isEnd) {
            swiperRef.current.slideTo(0);
          } else {
            swiperRef.current.slideNext();
          }
        }
      }, 5000); // Change slide every 3 seconds
    }

    return () => {
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    };
  }, [projects.length, isHovered]);

  const handlePrev = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      // Reset auto slide timer on manual navigation
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    }
  }, []);

  const handleNext = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      // Reset auto slide timer on manual navigation
      if (autoSlideInterval.current) {
        clearInterval(autoSlideInterval.current);
      }
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" py={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box py={4} textAlign="center">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <div id="projects">
      <Container>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 2,
            marginBottom: 5,
          }}
        >
          <Typography
            variant="h6"
            marginBottom={1}
            fontWeight={600}
            style={{ borderBottom: "3px solid #ff6121", width: "fit-content" }}
          >
            DEV INSIGHTS
          </Typography>
        </Stack>
        <Box pb={5} position="relative">
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              slidesPerView={1}
              spaceBetween={30}
              breakpoints={{
                400: { slidesPerView: 1 },
                600: { slidesPerView: 2 },
                900: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }}
              pagination={{ type: "fraction" }}
              modules={[Navigation]}
              className="project-swiper"
            >
              {projects.map((blog: any) => (
                <SwiperSlide key={blog?.id}>
                  <Box sx={{ height: "100%" }}>
                    <BlogCard blog={blog} />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 2,
              marginX: "auto",
            }}
          >
            <IconButton onClick={handlePrev} disabled={isBeginning}>
              <ChevronLeft
                fontSize="large"
                sx={{ color: isBeginning ? "#ccc" : "#3D3942" }}
              />
            </IconButton>
            <IconButton onClick={handleNext} disabled={isEnd}>
              <ChevronRight
                fontSize="large"
                sx={{ color: isEnd ? "#ccc" : "#3D3942" }}
              />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default BlogSection;
