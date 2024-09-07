import clsx from 'clsx';
import { Hash } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import certification1 from './assets/image/sertif1.webp';
import certification2 from './assets/image/sertif2.webp';
import certification3 from './assets/image/sertif3.webp';
import certification4 from './assets/image/sertif4.webp';
import Tabs from './components/Tabs/Tabs';
import Header from './components/header';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import ContainerLayout from './components/layout';
import useResizeWindow from './hooks/useResizeWindow';

const dataTabs = ['projects', 'certifications'];

const certifications = [
  {
    name: 'Front End Web Developer Expert',
    image: certification1,
  },
  {
    name: 'Fundamental of Front End Web Developer',
    image: certification2,
  },
  {
    name: 'Fundamental of Web Application with React',
    image: certification3,
  },
  {
    name: 'Independent Study of Web Front End and React',
    image: certification4,
  },
];

function App() {
  const { isMediaScreen } = useResizeWindow();

  const [activeTab, setActiveTab] = useState<string>('projects');
  const [isCardHover, setIsCardHover] = useState<number | null>(null);

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
          <Tabs tabs={dataTabs} activeTab={activeTab} onClick={setActiveTab} />
          {activeTab === 'projects' ? (
            <Projects />
          ) : (
            <>
              <div className={clsx('my-4')}>
                <h1
                  className={clsx('font-rm-semibold text-base', 'lg:text-xl')}>
                  <Hash className={clsx('inline text-[#D81E5B]')} />
                  Certifications
                </h1>
              </div>
              <div className={clsx('flex flex-col gap-y-4')}>
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setIsCardHover(index + 1)}
                    onMouseLeave={() => setIsCardHover(null)}
                    className={clsx('relative w-full')}>
                    <img
                      src={cert.image}
                      alt="certification"
                      className={clsx('w-full rounded-2xl')}
                    />
                    <AnimatePresence>
                      {isCardHover === index + 1 ? (
                        <motion.div
                          initial={{ y: 2, opacity: 0 }}
                          animate={
                            isCardHover
                              ? { y: 0, opacity: 1 }
                              : { y: 2, opacity: 0 }
                          }
                          exit={{ y: 2, opacity: 0 }}
                          transition={{
                            type: 'spring',
                            stiffness: 50,
                            damping: 10,
                            duration: 0.5,
                          }}
                          className={clsx(
                            'absolute bottom-0 left-0',
                            'w-full pl-6 pb-6'
                          )}
                          style={{
                            borderRadius: '0 0 16px 16px',
                            background:
                              'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
                          }}>
                          <h1
                            className={clsx(
                              'font-rm-semibold text-base text-black',
                              'lg:text-lg'
                            )}>
                            {cert.name}
                          </h1>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </ContainerLayout>
  );
}

export default App;
