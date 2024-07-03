"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";
import AnimatedButton from "../animationButton/animationButton";
import Link from "next/link";

interface AnimatedCardProps {
  title: string;
  description: string;
  image: any;
  id: string;
}

const ImageContainer = styled("div")`
  position: relative;
  overflow: hidden;
`;

const OverlayButton = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const BlurredImage = styled(motion.img)`
  width: 100%;
  height: 140px;
  object-fit: cover;
`;

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  description,
  image,
  id,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Card sx={{ maxWidth: 345, m: 2 }}>
        <ImageContainer>
          <BlurredImage
            src={image}
            alt={title}
            whileHover={{ filter: "blur(4px)" }}
          />
          <OverlayButton initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
          <Link href={`/project/${id}`}>  <AnimatedButton variant={"contained"}> <Box component={"span"} style={{color:"#FFFFFF"}}>Details</Box></AnimatedButton></Link>
          </OverlayButton>
        </ImageContainer>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default AnimatedCard;
