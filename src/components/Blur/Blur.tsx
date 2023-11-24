import blueSvg from '@/assets/svg/bg/blueBlur.svg';
import greenSvg from '@/assets/svg/bg/greenBlur.svg';

import classes from './Blur.module.scss';

export const Blur = () => {
  return (
    <>
      <img
        src={greenSvg}
        alt=""
        className={`${classes.greenSvg} ${classes.animated} ${classes.animatedDelay}`}
      />
      <img src={blueSvg} alt="" className={`${classes.blueSvg} ${classes.animated}`} />
    </>
  );
};
