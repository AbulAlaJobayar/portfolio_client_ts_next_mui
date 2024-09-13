'use client'
import Countdown from '@/components/UI/Countdown/Countdown';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';


const ComingSoon = () => {
  // Set your target launch date here
  const targetDate = new Date('2025-07-31T00:00:00');

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" gutterBottom>
          Coming Soon
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          We&apos;re working hard to bring you something amazing. Stay tuned!
        </Typography>
        <Box mt={4}>
          <Countdown targetDate={targetDate} />
        </Box>
      </motion.div>
    </Container>
  );
};

export default ComingSoon;
