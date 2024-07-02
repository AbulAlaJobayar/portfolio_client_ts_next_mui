import React, { ReactNode } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

type TProp = {
  children: ReactNode;
  variant?: any;
  onClick?: any;
  href?: any;
};

const AnimatedButton = ({
  children,
  variant = "contained",
  onClick,
  href,
}: TProp) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, opacity: 0.8 }}
    >
      <Button variant={variant} onClick={onClick} href={href}>
        {children}
      </Button>
    </motion.div>
  );
};

export default AnimatedButton;
