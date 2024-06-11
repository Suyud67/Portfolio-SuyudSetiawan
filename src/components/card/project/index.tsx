import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';

import Chip from '../../chip';
import LinkButton from '../../button/LinkButton';

interface Props {
  imgProject: string;
  title: string;
  chipLabel: string[];
  descProject: string;
}

const CardProject = ({
  title,
  chipLabel,
  imgProject,
  descProject,
}: Props): JSX.Element => {
  return (
    <div
      className={clsx(
        'bg-[#2c2c2d] rounded-xl p-4 flex flex-col justify-between'
      )}>
      <div>
        <div>
          <img
            src={imgProject}
            alt="img project"
            className={clsx(' mx-auto')}
            loading="lazy"
          />
        </div>
        <div className={clsx('mt-2')}>
          <div>
            <h1 className={clsx('text-base', 'md:text-lg', 'lg:text-xl')}>
              {title}
            </h1>
            <div className={clsx('my-3 flex gap-2 flex-wrap')}>
              {typeof chipLabel !== 'string' ? (
                chipLabel.map((item) => (
                  <Chip className={clsx('bg-[#097EA5]')} title={item} />
                ))
              ) : (
                <Chip className={clsx('bg-[#097EA5]')} title={chipLabel} />
              )}
            </div>
            <p>{descProject}</p>
          </div>
        </div>
      </div>
      <div className={clsx('mt-4 text-right')}>
        <LinkButton
          linkTo="/"
          linkType="external"
          label={'Check Project'}
          className={clsx('hover:font-semibold')}
          icon={<ArrowRight className={clsx('inline-block')} />}
        />
      </div>
    </div>
  );
};

export default CardProject;
