import { Box, Container, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
const FooterBottom = () => {
  return (
    <Box bgcolor={"#F4F0F0"}>
      <Container>
        <Stack direction={"row"} justifyContent={'space-between'} alignItems={"center"}>
        <Typography py={4} color={""} textAlign={"center"} fontWeight={600}>
          Copyright &copy; Colored-Web {new Date().getFullYear()} - Present |
          Made with Abul Ala Jobayar
        </Typography>
        <Stack direction={"row"} gap={2}>
          <Link
            href={"https://web.facebook.com/profile.php?id=100010086635226"}
          >
            <FacebookIcon />
          </Link>
          <Link href={"https://www.linkedin.com/in/abul-ala-jobayar-4972b5202"}>
            <LinkedInIcon />
          </Link>
          <Link href={"https://github.com/AbulAlaJobayar"}>
            <GitHubIcon />
          </Link>
        </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default FooterBottom;
