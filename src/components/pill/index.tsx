import clsx from 'clsx';
import { FC } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Pill: FC<Props> = ({ children }) => {
  return (
    <div
      className={clsx(
        'inline-flex gap-1 border-2 border-white',
        'px-2 py-1 rounded-full'
      )}>
      {children}
    </div>
  );
};

export default Pill;
