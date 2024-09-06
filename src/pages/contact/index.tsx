import clsx from 'clsx';

// import SocialMedia from '../../components/socialMedia';
import ContainerLayout from '../../components/layout';

const Contact = (): JSX.Element => {
  return (
    <ContainerLayout>
      <div
        className={clsx(
          'grid place-content-center gap-6 h-[80vh]',
          'md:h-[60vh]'
        )}>
        <div>
          <h1 className={clsx('font-rm-semibold text-2xl', 'md:text-5xl')}>
            Let's Connect
          </h1>
        </div>

        {/* <SocialMedia
          className={clsx('flex justify-center gap-6', 'lg:justify-end')}
          iconClassname={clsx(
            'w-[35px] h-[35px]',
            'md:w-[60px] md:h-[60px]',
            'lg:w-[75px] lg:h-[75px]'
          )}
        /> */}
      </div>
    </ContainerLayout>
  );
};

export default Contact;
