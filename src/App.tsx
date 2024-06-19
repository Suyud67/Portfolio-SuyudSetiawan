import clsx from 'clsx';
import Tilt from 'react-parallax-tilt';

import ContainerLayout from './components/layout';
import profileImg from './assets/image/person-avatar.webp';

function App() {
  return (
    <ContainerLayout>
      <div
        className={clsx(
          'w-full flex justify-center',
          'items-center flex-col h-[80vh]',
          'md:w-4/5 md:gap-4 md:mx-auto md:flex-row',
          'lg:w-2/4 lg:gap-0'
        )}>
        <div
          className={clsx(
            'order-2 text-center mt-8 mx-4',
            'md:m-0 md:text-left md:order-none'
          )}>
          <h1
            className={clsx(
              'text-lg',
              'md:text-2xl',
              'lg:text-xl',
              'xl:text-2xl'
            )}>
            Hello World, <br /> I'm Suyud Setiawan <br /> A Front End Web
            Developer
          </h1>
          <p className={clsx('text-sm', 'md:text-base')}>
            Hello from Bali, Indonesia. A person who interest about software
            engineer.
          </p>
        </div>
        <div>
          <Tilt>
            <img
              src={profileImg}
              alt="profile image"
              className={clsx(
                ' w-[200px] h-[200px]',
                'md:w-[350px] md:h-[200px]',
                'lg:w-[450px] lg:h-[200px]',
                'xl:w-[450px] xl:h-[300px]'
              )}
            />
          </Tilt>
        </div>
      </div>
    </ContainerLayout>
  );
}

export default App;
