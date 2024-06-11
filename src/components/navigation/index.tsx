import clsx from 'clsx';
import { useState } from 'react';
import { AlignJustify } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import LinkButton from '../button/LinkButton';
import SocialMedia from '../socialMedia';

const Navigation = (): JSX.Element => {
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);

  return (
    <nav
      className={clsx(
        'w-full mt-4 px-4 flex justify-between relative',
        'lg:w-3/5 lg:mx-auto lg:p-0'
      )}>
      <div>
        <LinkButton
          label={'Suyud Setiawan Al Arif'}
          linkTo={'/'}
          linkType="internal"
          className={clsx('text-base', 'lg:text-xl')}
        />
      </div>
      <div>
        <ul className={clsx('hidden', 'md:flex md:gap-8')}>
          <li>
            <LinkButton
              label={'Project'}
              linkTo={'/project'}
              linkType="internal"
              className={clsx(
                'ease-in duration-100',
                'hover:border-b-2 hover:border-white'
              )}
              onClick={() => setToggleNavbar(false)}
            />
          </li>
          <li>
            <LinkButton
              label={'Contact'}
              linkTo={'/contact'}
              linkType="internal"
              className={clsx(
                'ease-in duration-100',
                'hover:border-b-2 hover:border-white'
              )}
              onClick={() => setToggleNavbar(false)}
            />
          </li>
        </ul>

        <AnimatePresence>
          <motion.button className={clsx('block', 'md:hidden')}>
            <AlignJustify onClick={() => setToggleNavbar((prev) => !prev)} />
          </motion.button>
        </AnimatePresence>

        <AnimatePresence>
          {toggleNavbar ? (
            <motion.div
              initial={{ left: '-100%' }}
              animate={{ left: 0 }}
              exit={{ left: '-100%' }}
              transition={{
                duration: 0.4,
                ease: 'easeInOut',
              }}
              className={clsx(
                'fixed top-0 z-10 w-4/5 h-screen bg-[#2c2c2d]',
                'flex flex-col justify-between p-6 '
              )}>
              <div className={clsx('text-center', 'md:hidden')}>
                <LinkButton
                  label={'Suyud Setiawan'}
                  linkTo={'/'}
                  linkType="internal"
                  className={clsx('text-base', 'lg:text-xl')}
                />
              </div>
              <ul className={clsx('text-center')}>
                <li className={clsx('max-h-10 mb-3')}>
                  <LinkButton
                    label={'Project'}
                    linkTo={'/project'}
                    linkType="internal"
                    className={clsx(
                      'ease-in duration-100',
                      'hover:border-b-2 hover:border-white'
                    )}
                    onClick={() => setToggleNavbar(false)}
                  />
                </li>
              </ul>
              <div>
                <div>
                  <h1
                    className={clsx(
                      'font-rm-semibold text-2xl text-center',
                      'md:text-5xl'
                    )}>
                    Let's Connect
                  </h1>
                </div>

                <SocialMedia
                  className={clsx('flex justify-evenly mt-5', 'md:hidden')}
                  iconClassname={clsx('w-[35px] h-[35px]')}
                />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
