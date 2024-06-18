import clsx from 'clsx';
import { ArrowRight } from 'lucide-react';

import Chip from '../../chip';
import LinkButton from '../../button/LinkButton';

import './project.css';

export interface itemType {
  imgProject: string;
  title: string;
  labels: string[];
  description: string;
  linkProject: string;
}

interface Props {
  item: itemType;
}

const CardProject = ({ item }: Props): JSX.Element => {
  return (
    <div
      className={clsx(
        'card bg-[#2c2c2d] rounded-xl p-4 flex flex-col justify-between'
      )}>
      <div>
        <div className="overflow-hidden">
          <img
            src={item.imgProject}
            alt="image project"
            loading="lazy"
            className={clsx('img-project h-[200px]')}
          />
        </div>
        <div className={clsx('mt-2')}>
          <div>
            <h1 className={clsx('text-base', 'md:text-lg', 'lg:text-xl')}>
              {item.title}
            </h1>
            <div className={clsx('my-3 flex gap-3 flex-wrap')}>
              {typeof item.labels !== 'string' ? (
                item.labels.map((item) => (
                  <Chip
                    className={clsx(
                      'border hover:cursor-default hover:shadow-[0_5px_15px_rgba(254,255,254,0.3)]'
                    )}
                    title={item}
                  />
                ))
              ) : (
                <Chip className={clsx('bg-[#097EA5]')} title={item.labels} />
              )}
            </div>
            <p>{item.description}</p>
          </div>
        </div>
      </div>
      <div className={clsx('mt-4 text-right')}>
        <LinkButton
          linkTo={item.linkProject}
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
