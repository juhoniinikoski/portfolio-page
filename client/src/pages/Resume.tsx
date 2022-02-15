import * as React from 'react';
import Layout from '../components/Layout';
import { technologies } from '../content/technologies';
import { education, experience, relevantCourses, textContent } from '../content/textContent';

const Resume = (): JSX.Element => {
  return (
    <Layout>
      <section style={{alignSelf: 'flex-start', textAlign: 'start'}}>
        <h2>{textContent.educationTitle}</h2>
        <h4 style={{marginTop: 24}}>{education.universityDegree}</h4>
        <p className='light-text'>{education.universityOthers1}</p>
        <p className='light-text'>{education.universityOthers2}</p>
        <h4 style={{marginTop: 24}}>{education.highSchoolDegree}</h4>
        <p className='light-text'>{education.highSchoolOthers}</p>
      </section>
      <section style={{alignSelf: 'flex-start', textAlign: 'start', marginTop: 36}}>
        <h2>{textContent.technologyTitle}</h2>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {technologies.map(t =>
            <a href={t.link} target="_blank" rel="noreferrer noopener">
              <button className='tech-box'>
                <p>{t.name}</p>
              </button>
            </a>
          )}
        </div>
      </section>
      <section style={{alignSelf: 'flex-start', textAlign: 'start', marginTop: 36}}>
        <h2 style={{marginBottom: 0}}>{textContent.coursesTitle}</h2>
        {relevantCourses.map(c => 
          <div>
            <h4 style={{marginTop: 24}}>{c.name}</h4>
            <p className='light-text'>{c.school}</p>
            <p style={{marginTop: 16}}>{c.description}</p>
          </div>  
        )}
      </section>
      <section style={{alignSelf: 'flex-start', textAlign: 'start', marginTop: 36}}>
        <h2 style={{marginBottom: 0}}>{textContent.experienceTitle}</h2>
        {experience.map(e => 
          <div>
            <h4 style={{marginTop: 24}}>{e.title}</h4>
            <p className='light-text'>{e.employer}</p>
            <p style={{marginTop: 16}}>{e.description}</p>
          </div>  
        )}
      </section>
    </Layout>
  )
};

export default Resume;
