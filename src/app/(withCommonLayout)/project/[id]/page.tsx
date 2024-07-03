const ProjectDetailsPage = ({ params }: { params: any }) => {
  return (
    <div>
      <h1>This is page component{params.id}</h1>
    </div>
  );
};

export default ProjectDetailsPage;
