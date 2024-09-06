import clsx from 'clsx';
import { wrap } from '@motionone/utils';
import { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from 'framer-motion';

import { Bootstrap } from '../../assets/icons/bootstrap';
import { ChakraUI } from '../../assets/icons/chakraUI';
import { Express } from '../../assets/icons/express';
import { GIT } from '../../assets/icons/git';
import { HTML } from '../../assets/icons/html';
import { Javascript } from '../../assets/icons/js';
import { Laravel } from '../../assets/icons/laravel';
import { MongoDB } from '../../assets/icons/mongoDB';
import { MUI } from '../../assets/icons/mui';
import { MySQL } from '../../assets/icons/mySQL';
import { NextJS } from '../../assets/icons/nextjs';
import { NodeJS } from '../../assets/icons/nodejs';
import { NPM } from '../../assets/icons/npm';
import { ReactJS } from '../../assets/icons/react';
import { Redux } from '../../assets/icons/redux';
import { Sass } from '../../assets/icons/sass';
import { Tailwind } from '../../assets/icons/tailwind';
import { TypeScript } from '../../assets/icons/typescript';
import { Webpack } from '../../assets/icons/webpack';
import { CSS } from '../../assets/icons/css';

const techStacks = [
  {
    label: 'HTML',
    icon: <HTML />,
  },
  {
    label: 'CSS',
    icon: <CSS />,
  },
  {
    label: 'Tailwind',
    icon: <Tailwind />,
  },
  {
    label: 'Bootstrap',
    icon: <Bootstrap />,
  },
  {
    label: 'Chakra UI',
    icon: <ChakraUI />,
  },
  {
    label: 'SASS',
    icon: <Sass />,
  },
  {
    label: 'MUI',
    icon: <MUI />,
  },
  {
    label: 'Javascript',
    icon: <Javascript />,
  },
  {
    label: 'Typescript',
    icon: <TypeScript />,
  },
  {
    label: 'React',
    icon: <ReactJS />,
  },
  {
    label: 'Redux',
    icon: <Redux />,
  },
  {
    label: 'Webpack',
    icon: <Webpack />,
  },
  {
    label: 'Next',
    icon: <NextJS />,
  },
  {
    label: 'Express JS',
    icon: <Express />,
  },
  {
    label: 'Node JS',
    icon: <NodeJS />,
  },
  {
    label: 'Laravel',
    icon: <Laravel />,
  },
  {
    label: 'MongoDB',
    icon: <MongoDB />,
  },
  {
    label: 'MySQL',
    icon: <MySQL />,
  },
  {
    label: 'Git',
    icon: <GIT />,
  },
  {
    label: 'NPM',
    icon: <NPM />,
  },
];

const duplicatedElements = [...techStacks, ...techStacks];

const itemWidth = 108;
const totalWidth = itemWidth * techStacks.length;

const AnimateTechStackScroll = (): JSX.Element => {
  const directionFactor = useRef<number>(5);
  const baseX = useMotionValue(0);

  const x = useTransform(baseX, (v) => `${wrap(-totalWidth, 0, v)}px`);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * -5 * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });
  return (
    <motion.div className={clsx('flex gap-2')} style={{ x }}>
      {duplicatedElements.map((_, index) => (
        <div className={clsx('flex gap-x-1 items-center')} key={index}>
          {_.icon} {_.label}
        </div>
      ))}
    </motion.div>
  );
};

export default AnimateTechStackScroll;
