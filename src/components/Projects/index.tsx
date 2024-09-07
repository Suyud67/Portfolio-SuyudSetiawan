import clsx from 'clsx';
import { Hash } from 'lucide-react';

import Cards from './Cards';
import project1 from '../../assets/image/btwedutech.webp';
import project2 from '../../assets/image/app-mitra.webp';
import project3 from '../../assets/image/restaurant-app.webp';
import project4 from '../../assets/image/notes-app.webp';
import { MUI } from '../../assets/icons/mui';
import { CSS } from '../../assets/icons/css';
import { HTML } from '../../assets/icons/html';
import { Redux } from '../../assets/icons/redux';
import { NextJS } from '../../assets/icons/nextjs';
import { ReactJS } from '../../assets/icons/react';
import { Webpack } from '../../assets/icons/webpack';
import { Tailwind } from '../../assets/icons/tailwind';
import { Javascript } from '../../assets/icons/js';
import { TypeScript } from '../../assets/icons/typescript';

const projects = [
  {
    title: 'BTW Edutech Company Portofolio',
    image: project1,
    url: 'https://www.btwedutech.com/',
    techStack: [
      <TypeScript />,
      <NextJS />,
      <ReactJS />,
      <Tailwind />,
      <Redux />,
    ],
  },
  {
    title: 'BTW Edutech Affiliate Partner Program',
    image: project2,
    url: 'https://mitra.btwedutech.com/',
    techStack: [<TypeScript />, <NextJS />, <ReactJS />, <Tailwind />, <MUI />],
  },
  {
    title: "Let's Eat",
    image: project3,
    url: 'https://suyud67-lets-restaurant.netlify.app/',
    techStack: [<HTML />, <CSS />, <Javascript />, <Webpack />],
  },
  {
    title: 'Notes App',
    image: project4,
    url: 'https://suyud67-note-app-2.netlify.app/',
    techStack: [<ReactJS />, <Javascript />, <CSS />],
  },
];

const Projects = () => {
  return (
    <>
      <div className={clsx('my-4')}>
        <h1
          className={clsx(
            'font-rm-semibold text-base mb-2',
            'lg:text-xl lg:mb-1'
          )}>
          <Hash className={clsx('inline text-[#D81E5B]')} />
          Projects
        </h1>
        <p className={clsx('text-sm', 'lg:text-base')}>
          Every projects i ever made
        </p>
      </div>
      <Cards projects={projects} />
    </>
  );
};

export default Projects;
