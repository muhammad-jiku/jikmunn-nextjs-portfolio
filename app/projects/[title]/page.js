import React, { use } from 'react';
import { projectsData } from '@/db';
import { ProjectDetails } from '@/components';

async function getProjects(params) {
  const title = await params?.title?.split('%20')?.join(' ');
  const project = projectsData?.filter(
    (item) => item?.projectTitle === title
  )[0];

  return project;
}

const Page = ({ params }) => {
  const projectInfo = use(getProjects(params));

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
