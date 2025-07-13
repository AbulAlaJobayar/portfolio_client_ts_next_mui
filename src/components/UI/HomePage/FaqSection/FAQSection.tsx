"use client";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, useTheme } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Image from "next/image";
import img from "@/assets/coverPhoto.jpg"

const FAQSection = () => {
  const theme = useTheme();
  
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I specialize in full-stack Software development, including custom Software design, responsive front-end development, back-end API integration, and database management. I also offer UI/UX design consultation and ongoing maintenance services.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple portfolio site might take 2 weeks, while a complex web application could take 3-6 months. I'll provide a detailed timeline after our initial consultation.",

    },
    {
      question: "What's your pricing structure?",
      answer: "I offer both fixed-price contracts for well-defined projects and hourly rates for ongoing work. My rates are competitive and based on project scope. I provide transparent quotes with no hidden fees.",
    },
    {
      question: "Do you work with clients remotely?",
      answer: "Yes! I've successfully worked with clients worldwide through video calls, project management tools, and collaborative platforms. Time zone differences are never a problem.",
    },
    {
      question: "What technologies do you specialize in?",
      answer: "My core stack includes React, Next.js, Node.js, prisma ,and Mongoose. I'm also proficient in TypeScript, ReactNative, and Electron. I stay updated with the latest industry trends.",
    },
    {
      question: "How do we get started?",
      answer: "Simply contact me through the form on this website. We'll schedule a free consultation to discuss your project needs, timeline, and budget. From there, I'll prepare a proposal for your review.",
    }
  ];

  return (
    <Box>
      <Box 
        sx={{ 
          maxWidth: 1200, 
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: { xs: 4, md: 6 },
          alignItems: "center"
        }}
      >
        {/* Left Side - Title and Description */}
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography 
           variant="h5"
           fontWeight={600}
           marginBottom={2}
          >
            Frequently Asked Questions
          </Typography>
          
          <Typography 
            variant="body1" 
        marginY={1}
          >
            Here are answers to some common questions about my services and working process. 
            If you don&rsquo;t find what you&rsquo;re looking for, feel free to reach out directly.
          </Typography>
          
          <Box 
            sx={{ 
              position: "relative",
              height: { xs: 300, md: 400 },
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
              mt: { xs: 3, md: 0 }
            }}
          >
            <Image
              src={img}
              alt="FAQ illustration"
              fill
              style={{ objectFit: "cover" }}
              quality={90}
              priority
            />
          </Box>
        </Box>
        
        {/* Right Side - Accordion FAQs */}
        <Box sx={{ width: "100%" }}>
          {faqs.map((faq, index) => (
            <Accordion 
              key={index}
              elevation={2}
              sx={{ 
                mb: 2,
                borderRadius: "8px !important",
                overflow: "hidden",
                "&:before": {
                  display: "none"
                }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  backgroundColor: theme.palette.background.default,
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover
                  }
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Typography 
                    variant="h6" 
                    component="h3"
                    sx={{ 
                      fontWeight: 600,
                      fontSize: { xs: "1rem", md: "1.1rem" }
                    }}
                  >
                    {faq.question}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails
                sx={{ 
                  backgroundColor: theme.palette.background.paper,
                  borderTop: `1px solid ${theme.palette.divider}`
                }}
              >
                <Typography 
                  variant="body1"
                  sx={{ 
                    color: theme.palette.text.secondary,
                    lineHeight: 1.7
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default FAQSection;