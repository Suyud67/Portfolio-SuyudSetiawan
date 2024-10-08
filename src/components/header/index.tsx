import clsx from 'clsx';

import Contacts from '../media';
import HeroProfile from '../../assets/image/dtd.webp';
import ProfileImage from '../../assets/image/suyudsetiawan.png';
import useResizeWindow from '../../hooks/useResizeWindow';
import AnimateTechStackScroll from '../AnimateTechStackScroll';

const Header = () => {
  const { isMediaScreen } = useResizeWindow();

  return (
    <header className={clsx('relative')}>
      <div>
        <div
          className={clsx(
            'w-full rounded-t-md h-[150px] bg-cover bg-center',
            'bg-no-repeat',
            'lg:rounded-t-2xl'
          )}
          style={{ backgroundImage: `url(${HeroProfile})` }}></div>
      </div>
      <div className={clsx('bg-[#363537] rounded-b-2xl')}>
        <div
          className={clsx(
            'absolute top-0 left-0 translate-x-10 translate-y-1/2'
          )}>
          <img
            src={ProfileImage}
            alt="profile image"
            className={clsx(
              'w-[140px] h-[140px] pt-2 bg-[#F6f6f6] rounded-full border-black border-2'
            )}
          />
        </div>
        <div className={clsx('pt-16 pb-5 px-4', 'lg:pb-10 lg:px-10')}>
          <div>
            <h1 className={clsx('font-rm-semibold text-base', 'md:text-lg')}>
              Suyud Setiawan Al Arif
            </h1>
            {isMediaScreen('lg') ? (
              <p className={clsx('text-base text-justify mt-2')}>
                Hello World I'm Suyud Setiawan Al Arif, you guys can call me
                Suyud and I am a Frontend specializing in web application
                development using React. I have a strong interest in modern web
                technologies and have developed various projects that showcase
                my ability to create dynamic, responsive, and user-friendly web
                applications. I thrive on collaborating with teams to deliver
                efficient, scalable, and visually appealing web applications.
              </p>
            ) : (
              <>
                <p className={clsx('text-sm', 'md:text-base')}>
                  Web Developer | Bali, Indonesia
                </p>
                <Contacts className={clsx('mt-4')} />

                {!isMediaScreen('lg') && (
                  <div className={clsx('mt-4')}>
                    <h1>Every Tool I used:</h1>
                    <div
                      className={clsx(
                        'overflow-hidden flex flex-nowrap',
                        'whitespace-nowrap mt-3'
                      )}>
                      <AnimateTechStackScroll />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
