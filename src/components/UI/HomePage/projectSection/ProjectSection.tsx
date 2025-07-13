// "use client";
// import { Box, Container, Grid, Stack, Typography } from "@mui/material";
// import AnimatedCard from "../../AnimateCard/AnimateCard";
// import project from "@/services/action/projectData";
// import { useCallback, useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const ProjectSection = () => {
//   // const projects: any = project();

//   const [projects, setProjects] = useState<Record<string, unknown>[]>([]);
//    console.log(projects, "projects");
//   const [ref, setRef] = useState<SwiperType | null>(null);
//   const [slideCounter, setSlideCounter] = useState({
//     prepend: 1,
//     append: projects?.length || 0,
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await project();
//       setProjects(res?.data || []);
//     };
//     fetchData()
//   }, []);

//   const appendSlide = useCallback(() => {
//     if (!ref) return;
//     const newNumber = slideCounter.append + 1;
//     ref.appendSlide(`<div class="swiper-slide">Slide ${newNumber}</div>`);
//     setSlideCounter((prev) => ({ ...prev, append: newNumber }));
//   }, [ref, slideCounter.append]);

//   return (
//     <div id="#projects">
//       <Container>
//         <Stack>
//           <Typography
//             variant="h6"
//             marginBottom={1}
//             fontWeight={600}
//             style={{ borderBottom: "3px solid #ff6121", width: "fit-content" }}
//           >
//             WORK I HAVE DONE
//           </Typography>
//         </Stack>
//         <Box pb={5}>
//           <Swiper
//             onSwiper={setRef}
//             slidesPerView={3}
//             centeredSlides
//             spaceBetween={30}
//             pagination={{ type: "fraction" }}
//             navigation
//             modules={[Pagination, Navigation]}
//             className="h-64 w-full"
//           >
//             <Grid container spacing={4}>
//               {projects?.map((project: any) => (
//                 <Grid key={project?.id} item xs={12} sm={6} md={4}>
//                   <SwiperSlide className="bg-orange-500 flex items-center justify-center text-white font-bold rounded-lg">
//                     <AnimatedCard
//                       title={project?.title}
//                       description={`${project?.description.slice(0, 100)}...`}
//                       image={project?.photo}
//                       id={project?.id}
//                     />
//                   </SwiperSlide>
//                 </Grid>
//               ))}
//             </Grid>
//           </Swiper>
//         </Box>
//       </Container>
//     </div>
//   );
// };

// export default ProjectSection;
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
import AnimatedCard from "../../AnimateCard/AnimateCard";
import project from "@/services/action/projectData";
import { useCallback, useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Project {
  id: string;
  title: string;
  description: string;
  photo: string;
}

const ProjectSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await project();
        setProjects(res?.data || []);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePrev = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }, []);

  const handleNext = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }, []);

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
            marginBottom:5
          }}
        >
          <Typography
            variant="h6"
            marginBottom={1}
            fontWeight={600}
            style={{ borderBottom: "3px solid #ff6121", width:"fit-content"}}
          >
            WORK I HAVE DONE
          </Typography>

          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 1,
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <ChevronLeft
              fontSize="large"
              onClick={handlePrev}
              sx={{ color: "#ff6121",cursor:"pointer"  }}

            />
            <ChevronRight
              fontSize="large"
              onClick={handleNext}
              sx={{ color: "#ff6121",cursor:"pointer" }}
            />
          </Stack>
        </Stack>
        <Box pb={5} position="relative">
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
            modules={[ Navigation]}
            className="project-swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <AnimatedCard
                  title={project.title}
                  description={`${project.description.slice(0, 100)}...`}
                  image={project.photo}
                  id={project.id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </div>
  );
};

export default ProjectSection;
