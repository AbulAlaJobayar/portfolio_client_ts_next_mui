"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_r0svm59",
        "template_9zfxabf",
        formData,
        "I-WH7Asd4VtCvRsfg"
      )
      .then((result) => {
      
        toast.success("Message Send Successfully.");
      })
      .catch((error) => {
        console.log(error.text);
      });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div id="#projects" style={{ background: "#FDF8F7" }}>
      <Container>
        <Stack
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mx={"auto"}
          py={5}
        >
          <Typography
            component={"p"}
            sx={{ fontWeight: "400", marginBottom: 2, fontSize: "24px" }}
          >
            Contact
          </Typography>
          <Typography variant="h4" marginBottom={1} fontWeight={600}>
            GET IN TOUCH
          </Typography>
        </Stack>
        <Box component="form" onSubmit={handleSubmit} >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            required
            multiline
            rows={4}
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ my: 2,mb:10 }}

          >
            <Box sx={{color:"white"}}>Send</Box>
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default ContactSection;
