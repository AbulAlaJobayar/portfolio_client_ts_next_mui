// import { Box, Container, Stack, Typography } from "@mui/material";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import Link from "next/link";
// const FooterBottom = () => {
//   return (
//     <Box bgcolor={"#F4F0F0"}>
//       <Container>
//         <Stack direction={"row"} justifyContent={'space-between'} alignItems={"center"}>
//         <Typography py={4} color={""} textAlign={"center"} fontWeight={600}>
//           Copyright &copy; Colored-Web {new Date().getFullYear()} - Present |
//           Made with Abul Ala Jobayar
//         </Typography>
//         <Stack direction={"row"} gap={2}>
//           <Link
//             href={"https://web.facebook.com/profile.php?id=100010086635226"}
//           >
//             <FacebookIcon />
//           </Link>
//           <Link href={"https://www.linkedin.com/in/abul-ala-jobayar-4972b5202"}>
//             <LinkedInIcon />
//           </Link>
//           <Link href={"https://github.com/AbulAlaJobayar"}>
//             <GitHubIcon />
//           </Link>
//         </Stack>
//         </Stack>
//       </Container>
//     </Box>
//   );
// };

// export default FooterBottom;
"use client"

import { Box, Container, Stack, Typography, IconButton, Divider, useTheme, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Link from "next/link";
import { motion } from "framer-motion";

const FooterBottom = () => {
  const theme = useTheme();
  
  const socialLinks = [
    { 
      icon: <FacebookIcon />, 
      href: "https://web.facebook.com/profile.php?id=100010086635226",
      label: "Facebook",
      color: "#1877F2"
    },
    { 
      icon: <LinkedInIcon />, 
      href: "https://www.linkedin.com/in/abul-ala-jobayar-4972b5202",
      label: "LinkedIn",
      color: "#0A66C2"
    },
    { 
      icon: <GitHubIcon />, 
      href: "https://github.com/AbulAlaJobayar",
      label: "GitHub",
      color: theme.palette.mode === 'dark' ? "#ffffff" : "#000000"
    },
    { 
      icon: <EmailIcon />, 
      href: "mailto:abulalajobayar@gamil.com.com",
      label: "Email",
      color: "#EA4335"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <Box 
      component="footer"
      sx={{
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' 
          : 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        color: theme.palette.text.secondary,
        pt: 8,
        pb: 4,
        borderTop: `1px solid ${theme.palette.divider}`
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
              Abul Ala Jobayar
            </Typography>
            <Typography variant="body2" paragraph>
              Full-stack developer specializing in modern web technologies. Creating beautiful, functional, and user-centered digital experiences.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              {socialLinks.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    component={Link}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    sx={{
                      color: theme.palette.mode === 'dark' ? '#fff' : item.color,
                      backgroundColor: theme.palette.mode === 'dark' 
                        ? 'rgba(255,255,255,0.1)' 
                        : 'rgba(0,0,0,0.05)',
                      '&:hover': {
                        backgroundColor: theme.palette.mode === 'dark' 
                          ? 'rgba(255,255,255,0.2)' 
                          : 'rgba(0,0,0,0.1)',
                      }
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href}
                  passHref
                  style={{ 
                    textDecoration: 'none',
                    color: theme.palette.text.secondary,
                    transition: 'color 0.3s ease'
                  }}
                >
                  <motion.div whileHover={{ x: 5 }}>
                    <Typography variant="body2" sx={{
                      '&:hover': {
                        color: theme.palette.primary.main
                      }
                    }}>
                      {link.name}
                    </Typography>
                  </motion.div>
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
              Contact Me
            </Typography>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center">
                <LocationOnIcon color="primary" />
                <Typography variant="body2">
                  Khulna, Bangladesh
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <EmailIcon color="primary" />
                <Typography variant="body2">
                  abulalajobayar@gmail.com
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <PhoneIcon color="primary" />
                <Typography variant="body2">
                  +880 1928210545 (Whatsapp)
                </Typography>
              </Stack>
            </Stack>
          </Grid>

          {/* Newsletter (optional) */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
              Newsletter
            </Typography>
            <Typography variant="body2" paragraph>
              Subscribe to get updates on my latest projects.
            </Typography>
            {/* Simple newsletter form - would need backend integration */}
            <Stack direction="row" sx={{ mt: 1 }}>
              <input 
                type="email" 
                placeholder="Your email" 
                style={{
                  padding: '8px 12px',
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: '4px 0 0 4px',
                  flexGrow: 1,
                  background: theme.palette.background.paper,
                  color: theme.palette.text.primary
                }}
              />
              <button 
                style={{
                  background: theme.palette.primary.main,
                  color: '#fff',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '0 4px 4px 0',
                  cursor: 'pointer'
                }}
              >
                Go
              </button>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright Section */}
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          justifyContent="space-between" 
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2">
            © {new Date().getFullYear()} Dexnivo Tech | All Rights Reserved
          </Typography>
          
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="body2">
              Crafted with
            </Typography>
            <FavoriteIcon 
              fontSize="small" 
              sx={{ 
                color: theme.palette.error.main,
                animation: 'pulse 1.5s infinite',
                '@keyframes pulse': {
                  '0%': { transform: 'scale(1)' },
                  '50%': { transform: 'scale(1.2)' },
                  '100%': { transform: 'scale(1)' },
                }
              }} 
            />
            <Typography variant="body2">
              by Abul Ala Jobayar
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterBottom;