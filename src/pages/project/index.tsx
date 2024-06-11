import clsx from 'clsx';

import CardProject from '../../components/card/project';
import ContainerLayout from '../../components/layout';
import noteAppImg from '../../assets/image/noteApp.webp';
import watherAppImg from '../../assets/image/weatherApp.webp';
import restaurantAppImg from '../../assets/image/restaurantsApp.webp';

const projects = [
  {
    project_name: 'Note App',
    description:
      'This App will help you to write every single moment, and everywhere.',
    link_project: 'https://suyud67-note-app-2.netlify.app/',
    labels: ['React', 'CSS', 'API', 'React Routers', 'React Icon'],
    image: noteAppImg,
  },
  {
    project_name: "Let's Eat",
    description: 'Find favorite restaurants around you 🍜',
    link_project: 'https://suyud67-lets-restaurant.netlify.app/',
    labels: ['HTML', 'CSS', 'Javascript', 'indexDB', 'API', 'Webpack', 'PWA'],
    image: restaurantAppImg,
  },
  {
    project_name: 'Weather App',
    description: 'Check the weather before travel around the world 🛫',
    link_project: 'https://suyud67-weather-app.netlify.app/',
    labels: ['HTML', 'CSS', 'Javascript', 'API'],
    image: watherAppImg,
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
            <CardProject
              key={indexItem}
              chipLabel={item.labels}
              title={item.project_name}
              imgProject={item.image}
              descProject={item.description}
            />
          ))}
        </div>
      </div>
    </ContainerLayout>
  );
};

export default ProjectPage;
