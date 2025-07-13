"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  useTheme,
  Paper,
  Fade,
  Grow,
} from "@mui/material";
import { toast } from "sonner";
import { motion } from "framer-motion";

const ContactSection = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      emailjs
        .send(
          "service_zlg092n",
          "template_9zfxabf",
          formData,
          "I-WH7Asd4VtCvRsfg"
        )
        .then((result) => {
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Failed to send message. Please try again later.");
          setIsSubmitting(false);
        });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <Box sx={{  paddingY: 10 }}>
      <Container>
        <Grow in={true} timeout={800}>
          <Paper
            elevation={6}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4,
            }}
          >
            <Box textAlign="left" mb={4}>
                <Typography
            variant="h6"
            marginBottom={1}
            fontWeight={600}
            style={{ borderBottom: "3px solid #ff6121", width: "fit-content" }}
          >
            Reach Out
          </Typography>
            </Box>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    size="small"
                    required
                    variant="outlined"
                    InputProps={{
                      sx: { borderRadius: 2 },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    size="small"
                    required
                    variant="outlined"
                    InputProps={{
                      sx: { borderRadius: 2 },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    fullWidth
                    required
                    size="small"
                    multiline
                    rows={3}
                    variant="outlined"
                    InputProps={{
                      sx: { borderRadius: 2 },
                    }}
                  />
                </Grid>
              </Grid>

              <Box textAlign="center" mt={4}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    disabled={isSubmitting}
                    sx={{
                      px: 6,
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: 16,
                      color: "#fff",
                      fontWeight: 600,
                      textTransform: "none",
                      boxShadow: theme.shadows[4],
                      "&:hover": {
                        boxShadow: theme.shadows[8],
                      },
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </Box>
            </Box>
          </Paper>
        </Grow>
      </Container>
    </Box>
  );
};

export default ContactSection;
