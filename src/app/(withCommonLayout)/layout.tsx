import { ReactNode } from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/Shared/Navbar/Navbar";
import FooterBottom from "@/components/Shared/Footer/Footer";
const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <Box sx={{ minHeight: "100Vh" }}> {children}</Box> 
      <FooterBottom />
    </>
  );
};

export default CommonLayout;
