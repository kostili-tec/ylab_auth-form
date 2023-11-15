import upLeft from '@/assets/svg/bolts/bolt-up-left.svg';
import upRight from '@/assets/svg/bolts/bolt-up-right.svg';
import downLeft from '@/assets/svg/bolts/bolt-down-left.svg';
import downRight from '@/assets/svg/bolts/bolt-down-right.svg';
import classes from './FourBolts.module.scss';

export const FourBolts = () => {
  return (
    <>
      <img src={upLeft} alt="" className={classes.topLeft} />
      <img src={upRight} alt="" className={classes.topRight} />
      <img src={downLeft} alt="" className={classes.bottomLeft} />
      <img src={downRight} alt="" className={classes.bottomRight} />
    </>
  );
};
