import clsx from 'clsx';
import { FC } from 'react';
import Card from './Card';

type Project = {
  title: string;
  image: string;
  url: string;
  techStack: JSX.Element[];
};

interface Props {
  projects: Project[];
}

const Cards: FC<Props> = ({ projects }): JSX.Element => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-y-4 justify-center',
        'xs:flex-row xs:gap-y-8 xs:justify-evenly xs:flex-wrap'
      )}>
      {projects.map((project, indexItem) => (
        <Card key={indexItem} project={{ ...project, indexItem }} />
      ))}
    </div>
  );
};

export default Cards;
