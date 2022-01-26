import * as React from 'react';

interface Props {
  project: {
    name: string,
    description: string,
    link: string
  }
}

const ProjectComponent = ( { project }: Props ): JSX.Element => {

  return (
    <a href={`${project.link}`} target="_blank" rel="noreferrer noopener">
      <button>
        <div style={{ height: 175, backgroundColor: 'brown' }}></div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </button>
    </a>
  );
};

export default ProjectComponent;