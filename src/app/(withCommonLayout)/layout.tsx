import { ReactNode } from "react";
import { Box } from "@mui/material";
import Navbar from "@/components/Shared/Navbar/Navbar";
const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
    <Navbar/>
      <Box sx={{ minHeight: "100Vh" }}> {children}</Box>{" "}
    </>
  );
};

export default CommonLayout;
