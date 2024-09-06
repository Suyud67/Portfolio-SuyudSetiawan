import clsx from 'clsx';
import { Hash } from 'lucide-react';

import Card from './components/Card';
import Header from './components/header';
import Sidebar from './components/Sidebar';
import project1 from './assets/image/btwedutech.webp';
import project2 from './assets/image/app-mitra.webp';
import project3 from './assets/image/restaurant-app.webp';
import project4 from './assets/image/notes-app.webp';
import ContainerLayout from './components/layout';
import { TypeScript } from './assets/icons/typescript';
import { NextJS } from './assets/icons/nextjs';
import { ReactJS } from './assets/icons/react';
import { Tailwind } from './assets/icons/tailwind';
import { Redux } from './assets/icons/redux';
import { MUI } from './assets/icons/mui';
import { Javascript } from './assets/icons/js';
import { HTML } from './assets/icons/html';
import { CSS } from './assets/icons/css';
import { Webpack } from './assets/icons/webpack';
import useResizeWindow from './hooks/useResizeWindow';

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

function App() {
  const { isMediaScreen } = useResizeWindow();

  return (
    <ContainerLayout className={clsx('pt-7 pb-4 px-5', 'md:w-4/5 md:mx-auto')}>
      <Header />

      <main
        className={clsx(
          'lg:mt-6 lg:grid lg:grid-cols-12 lg:gap-6 mb-8',
          'lg:items-start'
        )}>
        {isMediaScreen('lg') && <Sidebar />}

        <div
          className={clsx(
            'bg-[#363537] rounded-2xl w-full py-6 px-4 mt-6',
            'lg:col-span-8 lg:px-6 lg:pt-4 lg:pb-8 lg:m-0'
          )}>
          <div className={clsx('mb-4')}>
            <h1
              className={clsx(
                'font-rm-semibold text-base mb-2',
                'lg:text-xl lg:mb-1'
              )}>
              <Hash className={clsx('inline text-[#D81E5B]')} />
              Project
            </h1>
            <p className={clsx('text-sm', 'lg:text-base')}>
              Every project i ever made
            </p>
          </div>
          <div
            className={clsx(
              'flex flex-col gap-y-4 justify-center',
              'xs:flex-row xs:gap-y-8 xs:justify-evenly xs:flex-wrap'
            )}>
            {projects.map((project, indexItem) => (
              <Card key={indexItem} project={{ ...project, indexItem }} />
            ))}
          </div>
        </div>
      </main>
    </ContainerLayout>
  );
}

export default App;
