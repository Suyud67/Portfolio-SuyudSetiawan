import clsx from 'clsx';

import LinkButton from '../button/LinkButton';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FC } from 'react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const SocialMediaLink = [
  {
    link: 'https://www.linkedin.com/in/suyud-setiawan-al-arif-67567821b/',
    icon: <Linkedin />,
    linkType: 'external',
    bgColor: '#0A67C3',
  },
  {
    link: 'https://github.com/Suyud67',
    icon: <Github />,
    linkType: 'external',
    bgColor: '#090908',
  },
  {
    link: 'https://mail.google.com/mail/?view=cm&fs=1&to=suyudsetiawan@gmail.com',
    icon: <Mail />,
    linkType: 'external',
    bgColor: '#FF4737',
  },
];

const Contacts: FC<Props> = ({ className }): JSX.Element => {
  return (
    <div className={clsx('inline-flex gap-4', className)}>
      {SocialMediaLink.map(({ link, icon, linkType, bgColor }, indexItem) => (
        <LinkButton
          key={indexItem}
          linkTo={link}
          linkType={linkType as 'internal' | 'external'}
          icon={icon}
          className={clsx(
            bgColor === '#0A67C3'
              ? 'bg-linkedinBlue'
              : bgColor === '#090908'
              ? 'bg-githubBlack'
              : 'bg-mailRed',
            'inline-flex items-center gap-2 text-lg',
            'w-full px-2 h-10 hover:-translate-x-1 hover:-translate-y-1',
            'transition ease-in-out duration-150 rounded-full',
            'lg:m-0'
          )}
          linkClassName={clsx(
            bgColor === '#0A67C3'
              ? 'border-linkedinBlue'
              : bgColor === '#090908'
              ? 'border-githubBlack'
              : 'border-mailRed',
            'border-2 rounded-full inline-flex relative'
          )}
        />
      ))}
    </div>
  );
};

export default Contacts;
