import clsx from 'clsx';

import CardProject from '../../components/card/project';
import ContainerLayout from '../../components/layout';
import noteAppImg from '../../assets/image/notes-app.jpg';
import watherAppImg from '../../assets/image/weather-app.webp';
import restaurantAppImg from '../../assets/image/restaurant-app.webp';

const projects = [
  {
    title: 'Note App',
    description:
      'This App will help you to write every single moment, and everywhere.',
    linkProject: 'https://suyud67-note-app-2.netlify.app/',
    labels: ['React', 'CSS', 'API', 'React Routers', 'React Icon'],
    imgProject: noteAppImg,
  },
  {
    title: "Let's Eat",
    description: 'Find favorite restaurants around you 🍜',
    linkProject: 'https://suyud67-lets-restaurant.netlify.app/',
    labels: ['HTML', 'CSS', 'Javascript', 'indexDB', 'API', 'Webpack', 'PWA'],
    imgProject: restaurantAppImg,
  },
  {
    title: 'Weather App',
    description: 'Check the weather before travel around the world 🛫',
    linkProject: 'https://suyud67-weather-app.netlify.app/',
    labels: ['HTML', 'CSS', 'Javascript', 'API'],
    imgProject: watherAppImg,
  },
];

const ProjectPage = (): JSX.Element => {
  return (
    <ContainerLayout footerClassName={clsx('md:mb-4')}>
      <div className={clsx('w-full px-4 my-8', 'lg:w-4/5 lg:mx-auto')}>
        <div className={clsx('text-center mb-4')}>
          <h1
            className={clsx(
              'text-lg font-rm-semibold',
              'lg:text-xl',
              'xl:text-2xl'
            )}>
            My Projects
          </h1>
          <p className={clsx('text-sm', 'md:text-base')}>
            Projects i've been worked on
          </p>
        </div>
        <div
          className={clsx(
            'grid grid-cols-1 gap-4',
            'md:grid-cols-2',
            'lg:grid-cols-3'
          )}>
          {projects.map((item, indexItem) => (
            <CardProject key={indexItem} item={item} />
          ))}
        </div>
      </div>
    </ContainerLayout>
  );
};

export default ProjectPage;
