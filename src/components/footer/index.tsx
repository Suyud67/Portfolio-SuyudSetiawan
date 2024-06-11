import clsx from 'clsx';
import { Copyright } from 'lucide-react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Footer = ({ className }: Props): JSX.Element => {
  return (
    <footer className={clsx('hidden', 'md:block', className)}>
      <h1 className={clsx('flex justify-center gap-2')}>
        <Copyright /> Suyud Setiawan 2024
      </h1>
    </footer>
  );
};

export default Footer;
