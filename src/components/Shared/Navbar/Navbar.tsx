// "use client";
// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import animationData from "@/assets/Animation - 1719823055645.json";
// import { Stack } from "@mui/material";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// const variants = {
//   open: { opacity: 1, x: 1 },
//   closed: { opacity: 1, x: "10%" },
// };
// const pages = [
//   { name: "Home", link:"/" },
//   { name: "About", link:"/about" },
//   { name: "Projects", link:"/projects" },
//   { name: "Blog", link:"/blog" },
//   { name: "Contact", link:"/contact" },
//   { name: "Login", link:"/login" },
// ];
// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [isOpen, setIsOpen] = useState(false);
//   const handleOpenNavMenu = (event: any) => {
//     setAnchorElNav(event.currentTarget);
//     setIsOpen((isOpen) => !isOpen);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };
//   const path = usePathname();

//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         bgcolor: "#ffffff",
//       }}

//     >
//       <Container>
//         <Toolbar disableGutters>
//           {/* Logo */}
//           <Stack direction={"row"} alignItems={"center"} className="sticky top-0 z-50">
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="/"
//               // sx={{
//               //   fontFamily: "'Raleway', sans-serif",
//               //   color: "text.primary",
//               //   textDecoration: "none",
//               // }}
//               className="no-underline"
//             >
//               Jobayar
//             </Typography>
//             <Box  >
//               <Lottie
//                 animationData={animationData}
//                 loop={true}
//                 style={{ width: 20, height: 20 }}
//               />
//             </Box>
//           </Stack>

//           {/* Space between Logo and Nav content */}
//           <Box sx={{ flexGrow: 1 }} />

//           {/* Nav content */}
//           <Box sx={{ display: { xs: "none", md: "flex" } }}>
//             {pages.map((page, i) => (
//               <Link
//                 key={i}
//                 href={page.link}
//                 style={{
//                   textAlign: "center",
//                   color: "text.primary",
//                   textDecoration: "none",
//                   fontWeight: 600,
//                   marginLeft: "24px",
                  
//                 }}
//               >
//                 <Box
//                   component={motion.span}
//                   whileHover={{ scale: 1.1 }}
//                   sx={{
//                     fontFamily: "'Raleway', sans-serif",
//                     textDecoration: "none",
//                     fontWeight: page.link === path ? "bold" : "normal",
//                     color: page.link === path ? "primary.main" : "text.main",
//                   }}
//                 >
//                   {page.name}
//                 </Box>
//               </Link>
             
//             ))}
//           </Box>

//           {/* Responsive nav content */}
//           <Box
//             component={motion.div}
//             animate={isOpen ? "open" : "closed"}
//             variants={variants}
//             sx={{ display: { xs: "flex", md: "none" } }}
//           >
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {pages.map((page, i) => (
//                 <MenuItem key={i} onClick={handleCloseNavMenu}>
//                   <Link
//                     href={page.link}
//                     style={{
//                       textAlign: "center",
//                       color: "text.primary",
//                       textDecoration: "none",
//                       fontWeight: 600,
//                     }}
//                   >
//                     <Box
//                       component={motion.div}
//                       whileHover={{ scale: 1.1 }}
//                       sx={{
//                         textDecoration: "none",
//                         fontWeight: page.link === path ? "bold" : "normal",
//                       }}
//                     >
//                       {page.name}
//                     </Box>
//                   </Link>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;

"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/assets/Animation - 1719823055645.json";
import { Stack } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const pages = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const path = usePathname();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Stack direction="row" alignItems="center" >
            <Link href="/" passHref legacyBehavior>
              <Typography
                variant="h6"
                noWrap
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  color: "text.primary",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Jobayar
              </Typography>
            </Link>
            <Box
              component={motion.div}
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <Lottie
                animationData={animationData}
                loop={true}
                style={{ width: 24, height: 24 }}
              />
            </Box>
          </Stack>

          {/* Space between Logo and Nav content */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {pages.map((page, i) => (
              <Link key={i} href={page.link} passHref legacyBehavior>
                <Box
                  component={motion.div}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    position: "relative",
                    px: 2,
                    py: 1,
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: path === page.link ? 700 : 500,
                      color: path === page.link ? "primary.main" : "text.primary",
                      fontFamily: "'Poppins', sans-serif",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {page.name}
                  </Typography>
                  {path === page.link && (
                    <Box
                      component={motion.div}
                      layoutId="activeIndicator"
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 2,
                        bgcolor: "primary.main",
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  )}
                </Box>
              </Link>
            ))}
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: "text.primary" }}
            >
              {anchorElNav ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  minWidth: 180,
                  borderRadius: 2,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                },
              }}
            >
              {pages.map((page, i) => (
                <MenuItem
                  key={i}
                  onClick={handleCloseNavMenu}
                  sx={{
                    py: 1.5,
                    "&:hover": {
                      bgcolor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  <Link href={page.link} passHref legacyBehavior>
                    <Box
                      component={motion.div}
                      whileTap={{ scale: 0.95 }}
                      sx={{
                        width: "100%",
                        textAlign: "center",
                        position: "relative",
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: path === page.link ? 700 : 500,
                          color: path === page.link ? "primary.main" : "text.primary",
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        {page.name}
                      </Typography>
                      {path === page.link && (
                        <Box
                          component={motion.div}
                          layoutId="mobileActiveIndicator"
                          sx={{
                            position: "absolute",
                            bottom: -8,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 20,
                            height: 3,
                            bgcolor: "primary.main",
                            borderRadius: 3,
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                      )}
                    </Box>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;