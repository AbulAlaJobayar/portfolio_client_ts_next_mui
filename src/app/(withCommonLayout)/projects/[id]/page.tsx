import React from 'react';
import { Box, Typography, Button, Link, Card, CardContent, CardMedia } from '@mui/material';

type TProject={
  success:string;
  statusCode:number;
  message:string;
  data:TProjectDetailsProps
}
type TProjectDetailsProps ={
  photo: string;
  title: string;
  description: string;
  githubClientLink: string;
  githubServerLink: string;
  liveLink: string;
}

const ProjectDetails = async({params}:{params:any}) => {
  const res= await fetch(`${process.env.NEXT_PUBLIC_URL}/single_project/${params.id}`)
  const project=await res.json() as TProject
 

  return (
    <Card>
      <CardMedia
        component="img"
        height="100%"
        image={project?.data?.photo}
        alt={project?.data?.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project?.data?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project?.data?.description}
        </Typography>
        <Box mt={2}>
          <Link href={project?.data?.githubClientLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" color="primary" sx={{ mr: 2 }}>
              GitHub Client
            </Button>
          </Link>
          <Link href={project?.data?.githubServerLink} target="_blank" rel="noopener noreferrer">
            <Button variant="outlined"  sx={{ mr: 2 }}>
              GitHub Server
            </Button>
          </Link>
          <Link href={project?.data?.liveLink} target="_blank" rel="noopener noreferrer">
            <Button variant="contained" color="success">
              Live Site
            </Button>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectDetails;
