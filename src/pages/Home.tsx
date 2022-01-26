import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ProjectComponent from '../components/ProjectComponent';
import { projects } from '../content/projects';
import { textContent } from '../content/textContent';

const Home = (): JSX.Element => {

  const navigate = useNavigate();

  const handleClick = (): void => navigate('/contact');

  const handleScroll = (): void => {

    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    };

  };

  const scrollRef = React.useRef<any>();

  return (
    <Layout>
      <div>
        <section className='home-introduction'>
          <img src={require('../assets/profile.png')} alt='' height={'100%'}></img>
          <div className='introduction-text'>
            <h1>{textContent.title}</h1>
            <p>{textContent.description}</p>
            <div style={{display: 'flex'}}>
              <button onClick={handleClick} className='introduction-button'>
                <h4>Contact me</h4>
              </button>
              <button onClick={handleScroll} className='introduction-button'>
                <h4>My work</h4>
              </button>
            </div>
          </div>
        </section>
        <section className='projects' ref={scrollRef}>
          <h2>{textContent.projectsTitle}</h2>
          <p style={{ maxWidth: 600 }}>{textContent.projectsDescription}</p>
          <div className='project-grid-container'>
            <ProjectComponent project={projects[0]} />
            <ProjectComponent project={projects[1]} />
            <ProjectComponent project={projects[2]} />
          </div>
        </section>
      </div>
    </Layout>
  )
};

export default Home;