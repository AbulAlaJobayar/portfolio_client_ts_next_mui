import { Stack, Typography } from "@mui/material";

const DashboardPage = () => {
  return (
    <Stack
      direction={"row"}
      sx={{
        display:'flex',
        textAlign: "center",
        maxHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
       fontWeight:'bold'
      }}
    >
      <Typography variant="h2" >Welcome To Your Dashboard</Typography>
    </Stack>
  );
};

export default DashboardPage;
