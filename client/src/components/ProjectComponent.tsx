interface Props {
  project: {
    name: string,
    description: string,
    link: string,
    image: string
  }
}

const handleClick = (link: string) => {
  window.open(link);
}

const ProjectComponent = ( { project }: Props ): JSX.Element => {

  return (
    <button onClick={() => handleClick(project.link)}>
      <img src={require(`../assets/${project.image}`)} alt='' width={'100%'}></img>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
    </button>
  );
};

export default ProjectComponent;