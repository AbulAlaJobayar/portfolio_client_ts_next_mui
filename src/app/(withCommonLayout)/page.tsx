import AboutSection from "@/components/UI/animationButton/HomePage/AboutSection/AboutSection";
import HeroSection from "@/components/UI/animationButton/HomePage/HeroSection/HeroSection";
import { Stack } from "@mui/material";

const HomePage = () => {
  return (
    <Stack direction={'column'} spacing={8}>
     <HeroSection/>
     <AboutSection/>
    </Stack>
  );
};

export default HomePage;
