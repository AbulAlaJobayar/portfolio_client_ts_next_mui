import AboutSection from "@/components/UI/HomePage/AboutSection/AboutSection";
import BlogSection from "@/components/UI/HomePage/BlogSection/BlogSection";
import BoardSection from "@/components/UI/HomePage/BoardSection/BoardSection";
import ContactSection from "@/components/UI/HomePage/ContactSection/ContactSection";
import FAQSection from "@/components/UI/HomePage/FaqSection/FAQSection";
import HeroSection from "@/components/UI/HomePage/HeroSection/HeroSection";
import ProjectSection from "@/components/UI/HomePage/projectSection/ProjectSection";
import ReviewCarousel from "@/components/UI/HomePage/ReviewCarosel/ReviewCarosel";
import { Stack } from "@mui/material";

const HomePage = () => {
  return (
    <Stack direction={'column'} spacing={4}>
     <HeroSection/>
     <ProjectSection/>
     <BoardSection/>
     <BlogSection/>
     <FAQSection/>
     <ReviewCarousel/>
     <ContactSection/>
    </Stack>
  );
};

export default HomePage;
