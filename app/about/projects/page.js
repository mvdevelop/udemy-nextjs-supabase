/* eslint-disable @next/next/no-img-element */

import React, { Suspense } from 'react';
import ProjectList from './components/project-list';
import ProjectListLoading from './components/project-list-loading';

export const dynamic = 'force-dynamic';

export default async function Projects() {

  return (
    <div>
      <h2 className='mb-8 text-xl'>Projects</h2>

      <div className='mb-8'>Hello, this is the list of my repos!</div>

      <Suspense fallback={<ProjectListLoading />}>
        <ProjectList />
      </Suspense>
    </div>
  );
}
