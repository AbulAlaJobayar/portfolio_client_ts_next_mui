"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { Box, Stack } from "@mui/material";
import dateFormatter from "@/utils/dateFormatter";
import Link from "next/link";


const BlogCard = ({blog}:{blog:any}) => {

  return (
    <Card sx={{ maxWidth: 345 ,pb:4}}>
      <motion.div whileHover={{ scale: 1.1 }}>
        <CardMedia
          component="img"
          height="200"
          image={blog?.photo}
          alt={blog?.title}
          sx={{
            transition: "transform 0.5s ease",
          }}
        />
      </motion.div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {blog?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {blog?.content}
        </Typography>
      </CardContent>
    
        <Stack  direction="row" justifyContent="space-between" alignItems="center" mx={2} >
        <Link href={"/"}>Read More</Link>
        <Box>{dateFormatter(blog?.createdAt)}</Box>
        </Stack>
     
    </Card>
  );
};
export default BlogCard;
