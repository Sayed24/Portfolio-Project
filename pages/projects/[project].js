import React from 'react';
import { useRouter } from 'next/router';

const Project = () => {
  const router = useRouter();
  const { project } = router.query;
  return (
    <div>
      <h1>This is project {project}</h1>
      <p>Sample Text</p>
      <p>Sample Text</p>
      <p>Sample Text</p>
    </div>
  );
};

export default Project;
