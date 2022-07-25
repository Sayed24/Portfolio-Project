import Portfolios from '../projects.json';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className='container'>
      <h1>My Projects</h1>
      <div className='projects'>
        {Portfolios.map((project) => (
          <div className='project' key={project.id}>
            <Image
              src={project.cover}
              height={100}
              width={200}
              alt='image of project'
            />
            <h3>{project.title}</h3>
            <p>{project.excerpt}</p>
            <Link href={project.slug}>
              <a>Expanded Project View</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
