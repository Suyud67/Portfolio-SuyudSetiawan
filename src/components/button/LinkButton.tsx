import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  linkTo: string;
  icon?: JSX.Element;
  method?: () => void;
  linkType: 'internal' | 'external';
  linkClassName?: string;
}

const LinkButton = ({
  icon,
  method,
  linkTo,
  linkType,
  className,
  linkClassName,
}: Props): JSX.Element => {
  if (linkType === 'internal') {
    return (
      <Link
        className={clsx(linkClassName)}
        to={linkTo}
        onClick={method ? method : () => {}}>
        <span className={clsx(className)}>{icon ? icon : null}</span>
      </Link>
    );
  } else {
    return (
      <a
        href={linkTo}
        target="_blank"
        className={clsx(linkClassName)}
        onClick={method ? method : () => {}}>
        <span className={clsx(className)}>{icon ? icon : null}</span>
      </a>
    );
  }
};

export default LinkButton;
