import Image from 'next/image';
import { Carousel } from '@/shared/ui/carusel/Carousel';
import classes from './announcements.module.css';
import { getAllAnnouncements } from '@/shared/api/db';

async function AnnouncementsGrid() {

  // const data = await getAllAnnouncements();

  // const largeBanner = data.filter((item) => item.isLargeBanner === true);
  // const smallBanner = data.filter((item) => item.isSmallBanner === true);

  return (
    <div className={classes.container}>
      {/* <div className={classes.big}>
        <Carousel data={[largeBanner[3]]} />
      </div>
      <div className={classes.small}>
        <Image src={smallBanner[1].imageUrl} alt="photo" fill />
      </div>
      <div className={classes.small}>
        <Image src={smallBanner[0].imageUrl} alt="photo" fill />
      </div>
      <div className={classes.small}>
        <Image src={smallBanner[2].imageUrl} alt="photo" fill />
      </div>
      <div className={classes.small}>
        <Image src={smallBanner[3].imageUrl} alt="photo" fill />
      </div> */}
    </div>
  )
}

export default AnnouncementsGrid;
