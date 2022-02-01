import * as React from 'react';

interface Props {
  project: {
    name: string,
    description: string,
    link: string,
    image: string
  }
}

const ProjectComponent = ( { project }: Props ): JSX.Element => {

  return (
    <a href={`${project.link}`} target="_blank" rel="noreferrer noopener">
      <button>
        <img src={require(`../assets/${project.image}`)} alt='' width={'100%'}></img>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </button>
    </a>
  );
};

export default ProjectComponent;