import clsx from 'clsx';
import LinkButton from '../button/LinkButton';
import { Github, Linkedin, Mail } from 'lucide-react';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  iconClassname?: string;
}

const SocialMedia = ({ className, iconClassname }: Props) => {
  return (
    <div className={clsx(className)}>
      <LinkButton
        label={
          <Linkedin
            className={clsx(
              'hover:shadow-lg hover:shadow-slate-500/50 ease-in-out transition-all duration-500',
              iconClassname
            )}
          />
        }
        linkTo={'https://www.linkedin.com/in/suyud-setiawan-al-arif-67567821b/'}
        linkType="internal"
        className={clsx('text-base', 'lg:text-xl')}
      />

      <LinkButton
        label={
          <Mail
            className={clsx(
              'hover:shadow-lg hover:shadow-slate-500/50 ease-in-out transition-all duration-500',
              iconClassname
            )}
          />
        }
        linkTo={
          'https://mail.google.com/mail/?view=cm&fs=1&to=suyudsetiawan@gmail.com'
        }
        linkType="internal"
        className={clsx('text-base', 'lg:text-xl')}
      />

      <LinkButton
        label={
          <Github
            className={clsx(
              'hover:shadow-lg hover:shadow-slate-500/50 ease-in-out transition-all duration-500 ',
              iconClassname
            )}
          />
        }
        linkTo={'https://github.com/Suyud67'}
        linkType="internal"
        className={clsx('text-base', 'lg:text-xl')}
      />
    </div>
  );
};

export default SocialMedia;
