"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { motion } from "framer-motion";
import React from "react";

const BoardSection = () => {
  return (
    <div className="py-10">
      <Container
        sx={{
          background: "linear-gradient(to right,#2F2D3B , #574654)",
        }}
        className="w-full rounded-xl overflow-hidden relative text-white"
      >
        {/* Blurred Background Overlay */}
        <Box className="absolute inset-0 backdrop-blur-sm bg-white/10 z-0" />

        {/* Content */}
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className="h-[250px] relative z-10"
        >
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center space-y-2"
            >
              <SupportAgentIcon sx={{ fontSize: 50 }} />
              <Typography variant="h4" fontWeight="bold">
                24/7 Developer Support
              </Typography>
              <Typography variant="subtitle1">
                Need help? I’m always ready to assist, whether it’s debugging, deploying, or building new features.
              </Typography>
              <Typography variant="body2">
                Let’s keep your projects moving — anytime, anywhere.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BoardSection;
