import React, { use } from 'react';
// internal imports
import { projectsData } from '@/db';
import { NotFound, ProjectDetails } from '@/components';

async function getProjects(params) {
  const title = await params?.title?.split('%20')?.join(' ');

  const project = projectsData?.filter(
    (item) => item?.projectTitle === title
  )[0];

  return project;
}

const Page = ({ params }) => {
  const projectInfo = use(getProjects(params));

  if (params?.title?.split('%20')?.join(' ') !== projectInfo?.projectTitle) {
    return <NotFound />;
  }

  return (
    <>
      <ProjectDetails projectInfo={projectInfo} />
    </>
  );
};

export default Page;

export async function generateStaticParams() {
  const projects = projectsData;

  return projects?.map((item) => ({
    title: item?.projectTitle?.toString(),
  }));
}
