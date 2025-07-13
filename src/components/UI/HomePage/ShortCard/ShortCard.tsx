"use client";
import { Box, Container, Stack, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaDesktop,
  FaVial,
  FaCloudUploadAlt,
  FaDatabase,
  FaRocket,
  FaProjectDiagram,
  FaTools,
} from "react-icons/fa";

const cards = [
  { name: "Frontend", icon: <FaCode size={18} />},
  { name: "Backend", icon: <FaServer size={18} />},
  { name: "Mobile App", icon: <FaMobileAlt size={18} />},
  { name: "Desktop App", icon: <FaDesktop size={18} />},
  { name: "Testing", icon: <FaVial size={18} />},
  { name: "Deployment", icon: <FaCloudUploadAlt size={18} />},
  { name: "Database", icon: <FaDatabase size={18} /> },
];

export default function SkillCards() {
  return (
    <Container maxWidth="lg">
      <Stack 
        direction="row" 
        spacing={1} 
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        useFlexGap
      >
        {cards.map(({ name, icon }) => (
          <Box 
            key={name}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Paper
              elevation={6}
              sx={{
                px: 1.5,
                py: 0.5,
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                bgcolor: "#FF6121",
                color: "white",
                borderRadius: 20, // pill shape
                transition: "all 0.3s",
                "&:hover": {
                  bgcolor: "#ff5c1c",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                },
                minWidth: 'fit-content'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }} >
                {icon}
              </Box>
              <Typography variant="caption">
              <span className="text-base ">  {name}</span> 
              </Typography>
            </Paper>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}