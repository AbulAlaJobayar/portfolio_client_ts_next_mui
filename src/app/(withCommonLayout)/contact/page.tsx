'use client';

import { Box, Container, Grid, TextField, Typography, Button, Stack, IconButton } from '@mui/material';
import { Email, Call, LinkedIn, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <Box bgcolor="#FDF8F7" py={8}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" fontWeight={700} gutterBottom textAlign="center">
            Let’s Connect
          </Typography>
          <Typography textAlign="center" color="textSecondary" mb={4}>
            Got a project in mind or just want to say hi? Drop a message below or reach me directly!
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Call color="primary" />
                <Typography>+8801928210545 (Whatsapp)</Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Email color="primary" />
                <Typography>abulalajobayar@gmail.com</Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <LinkedIn color="primary" />
                <Typography component="a" href="https://www.linkedin.com/in/abulalajobayar/" target="_blank" sx={{ textDecoration: 'none' }}>
                  LinkedIn Profile
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <GitHub color="primary" />
                <Typography component="a" href="https://github.com/AbulAlaJobayar" target="_blank" sx={{ textDecoration: 'none' }}>
                  GitHub Profile
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Box component="form" noValidate autoComplete="off">
              <Stack spacing={3}>
                <TextField label="Your Name" fullWidth required />
                <TextField label="Your Email" fullWidth required />
                <TextField label="Your Message" fullWidth multiline rows={4} required />
                <Button variant="contained" size="large" color="primary">
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
