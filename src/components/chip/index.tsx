import clsx from 'clsx';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Chip = ({ className, title }: Props): JSX.Element => {
  return (
    <div className={clsx('px-4 py-1 rounded-full', className)}>
      <p>{title}</p>
    </div>
  );
};

export default Chip;
