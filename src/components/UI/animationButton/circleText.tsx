import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const CircularText = ({ text }: { text: string }) => {
  const characters = text.split('');

  return (
    <Box
      component={motion.div}
      sx={{
        position: 'relative',
        width: 200,  // Adjust size as needed
        height: 200, // Adjust size as needed
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: 'linear',
      }}
    >
      {characters.map((char, index) => (
        <Box
          key={index}
          component="span"
          sx={{
            position: 'absolute',
            transform: `rotate(${index * (360 / characters.length)}deg)`,
            transformOrigin: 'center 100px', // Adjust based on the size of the circle
            textAlign: 'center',
          }}
        >
          {char}
        </Box>
      ))}
    </Box>
  );
};

export default CircularText;