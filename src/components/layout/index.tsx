import clsx from 'clsx';
import Footer from '../footer';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  footerClassName?: string;
}

const ContainerLayout = ({ className, children, footerClassName }: Props) => {
  return (
    <div className={clsx('text-white font-rm-medium relative', className)}>
      {children}
      <Footer className={clsx(footerClassName)} />
    </div>
  );
};

export default ContainerLayout;
