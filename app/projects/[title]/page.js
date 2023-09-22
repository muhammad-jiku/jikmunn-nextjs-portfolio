import { projectsData } from '@/db';
import React, { use } from 'react';

async function getProjects(params) {
  const title = await params?.title?.split('%20')?.join(' ');
  const project = projectsData?.filter(
    (item) => item?.projectTitle === title
  )[0];

  return project;
}

const Page = ({ params }) => {
  const projectDetails = use(getProjects(params));

  return (
    <>
      <h1>Hello</h1>
      {console.log(projectDetails)}
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
