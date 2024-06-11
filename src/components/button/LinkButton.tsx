import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  linkTo: string;
  icon?: JSX.Element;
  method?: () => void;
  label: string | JSX.Element;
  linkType: 'internal' | 'external';
}

const LinkButton = ({
  icon,
  label,
  method,
  linkTo,
  linkType,
  className,
}: Props): JSX.Element => {
  if (linkType === 'internal') {
    return (
      <Link
        className={clsx(className)}
        to={linkTo}
        onClick={method ? method : () => {}}>
        {label} {icon ? icon : null}
      </Link>
    );
  } else {
    return (
      <a
        href={linkTo}
        target="_blank"
        className={clsx(className)}
        onClick={method ? method : () => {}}>
        {label} {icon ? icon : null}
      </a>
    );
  }
};

export default LinkButton;
