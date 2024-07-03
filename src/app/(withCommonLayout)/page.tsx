import AboutSection from "@/components/UI/HomePage/AboutSection/AboutSection";
import BlogSection from "@/components/UI/HomePage/BlogSection/BlogSection";
import ContactSection from "@/components/UI/HomePage/ContactSection/ContactSection";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import ProjectSection from "@/components/UI/HomePage/projectSection/ProjectSection";
import { Stack } from "@mui/material";

const HomePage = () => {
  return (
    <Stack direction={'column'} spacing={8}>
     <HeroSection/>
     <AboutSection/>
     <ProjectSection/>
     <BlogSection/>
     <ContactSection/>
    </Stack>
  );
};

export default HomePage;
