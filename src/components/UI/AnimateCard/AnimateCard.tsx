"use client";
import React, { useState } from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/system";
import AnimatedButton from "../animationButton/animationButton";
import Link from "next/link";
import Image from "next/image";

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
const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  description,
  image,
  id,
}) => {
  const [mouseHover, setMouseHover] = useState<Boolean>(false);

  return (
    <div
      className="card-wrapper h-[250px] w-[250px] mx-auto"
      onMouseOver={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
    >
      <Card>
        <div className="card-content flex items-center flex-col bg-white justify-center text-xs shadow-lg">
          {mouseHover ? (
            <>
              <OverlayButton
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="w-full h-full flex items-center justify-center bg-slate-100 backdrop-blur-3xl rounded-[16px]"
              >
                <Link href={`/projects/${id}`}>
                  <AnimatedButton variant={"contained"}>
                    <Box component={"span"} style={{ color: "#FFFFFF" }}>
                      Details
                    </Box>
                  </AnimatedButton>
                </Link>
              </OverlayButton>
            </>
          ) : (
            <div className="max-w-[246px] max-h-[244px] ">
              <Image
                src={image}
                alt={title}
                width={246}
                height={140} 
                
                className=" overflow-hidden object-cover"
              />

              <CardContent>
                <Typography>{title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {description.split(" ").slice(0, 10).join(" ")}...
                </Typography>
              </CardContent>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default AnimatedCard;