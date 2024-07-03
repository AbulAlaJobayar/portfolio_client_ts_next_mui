"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FieldValues } from "react-hook-form";
import { userLogin } from "@/services/action/userLogin";
import { toast } from "sonner";
import { storeUserInfo } from "@/services/authService";


import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import PFForm from "@/components/Form/PFForm";
import PFInput from "@/components/Form/PFInput";
import { motion } from "framer-motion";

export const validationSchema = z.object({
  email: z.string().email("please enter a valid email!"),
  password: z.string().min(5, "password must be at last 5 characters"),
});
const LoginPage = () => {
  // const router = useRouter();
  const [error, setError] = useState();

  const handleLogin = async (values: FieldValues) => {
    try {
      const res = await userLogin(values);
      console.log("token",res?.data?.token);
      if (res?.data?.token) {
        
        storeUserInfo(res?.data?.token);
        toast.success(res.message);
      } else {
        setError(res.message);
        toast.error(res?.message ? res?.message : "something went wrong");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            p: 4,
            borderRadius: 1,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Login Only Super Admin
              </Typography>
            </Box>
          </Stack>
          {error && (
            <Box>
              <Typography
                sx={{
                  background: "red",
                  color: "white",
                  marginTop: "5px",
                  borderRadius: "2px",
                  padding: "1px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}
          <Box>
            <PFForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{ email: "", password: "" }}
            >
              <Grid container spacing={3} my={1}>
                <Grid item md={6}>
                  <PFInput name="email" label="Email" size="small" />
                </Grid>
                <Grid item md={6}>
                  <PFInput name="password" label="Password" size="small" />
                </Grid>
              </Grid>
             
            <Box component={motion.div}
             whileHover={{ scale: 1.05 }}
            >
            <Button
                type="submit"
                fullWidth
                sx={{
                  margin: "10px 0px",
                }}
                
              >
              <Box component={"span"} color={ "#FFFFFF"}>  Login</Box>
              </Button>
            </Box>
              
            </PFForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
