import clsx from 'clsx';
import { Hash, MapPin, NotebookPen } from 'lucide-react';

import SocialMedia from '../SocialMedia/index.tsx';
import AnimateTechStackScroll from '../AnimateTechStackScroll';

const Sidebar = () => {
  return (
    <div
      className={clsx(
        'bg-[#363537] rounded-2xl',
        'lg:px-4 lg:py-2 lg:col-span-4'
      )}>
      <h1 className={clsx('font-rm-semibold text-base', 'lg:text-xl lg:mb-4')}>
        <Hash className={clsx('inline text-[#D81E5B]')} />
        Bio
      </h1>

      <div>
        <div className={clsx('lg:mt-3 lg:mb-5')}>
          <div className={clsx('flex gap-1')}>
            <NotebookPen /> Web Developer
          </div>
          <div className={clsx('flex gap-1', 'lg:my-4')}>
            <MapPin /> Bali, Indonesia
          </div>
          <h1 className={clsx('mb-2')}>Every Tool I used:</h1>
          <div
            className={clsx(
              'overflow-hidden flex flex-nowrap',
              'whitespace-nowrap',
              'lg:mb-4'
            )}>
            <AnimateTechStackScroll />
          </div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
