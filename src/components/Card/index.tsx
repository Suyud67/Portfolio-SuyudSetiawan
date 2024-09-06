import clsx from 'clsx';
import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectData {
  title: string;
  image: string;
  url: string;
  techStack: JSX.Element[];
  indexItem: number;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  project: ProjectData;
}

const Card: FC<Props> = ({ project }) => {
  const [isCardHover, setIsCardHover] = useState<number | null>(null);

  return (
    <a
      href={project.url}
      target="_blank"
      onMouseEnter={() => setIsCardHover(project.indexItem + 1)}
      onMouseLeave={() => setIsCardHover(null)}
      style={{ backgroundImage: `url(${project.image})` }}
      className={clsx(
        'h-[60vh] w-full bg-no-repeat bg-center bg-cover',
        'rounded-2xl relative',
        'xs:w-2/5'
      )}>
      <AnimatePresence>
        {isCardHover === project.indexItem + 1 ? (
          <motion.div
            key={project.indexItem + 1}
            initial={{ y: 2, opacity: 0 }}
            animate={isCardHover ? { y: 0, opacity: 1 } : { y: 2, opacity: 0 }}
            exit={{ y: 2, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 50,
              damping: 10,
              duration: 0.5,
            }}
            className={clsx('absolute bottom-0 left-0 w-full p-4')}
            style={{
              borderRadius: '0 0 16px 16px',
              background:
                'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
            }}>
            <h1 className={clsx('font-rm-semibold text-base', 'lg:text-lg')}>
              {project.title}
            </h1>
            <div
              className={clsx(
                'flex items-center gap-x-1 flex-wrap text-sm',
                'lg:text-base'
              )}>
              Tech Stack :
              {project.techStack.map((tech, index) => (
                <div key={index}>{tech}</div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </a>
  );
};

export default Card;
