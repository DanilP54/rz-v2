import Image from 'next/image';
import { Carousel } from '@/shared/ui/carusel/Carousel';
import classes from './announcements.module.css';
// import { getAllAnnouncements } from '@/shared/api/db';

async function AnnouncementsPage() {

  // const data = await getAllAnnouncements();

  // const largeBanner = data.filter((item) => item.isLargeBanner === true);
  // const smallBanner = data.filter((item) => item.isSmallBanner === true);

  return (
    <div className={classes.container}>
      <div className={classes.big}>
        {/* <Carousel data={[smallBanner[1]]} /> */}
      </div>
      <div className={classes.small}>
        {/* <Image src={largeBanner[3].imageUrl} alt="photo" fill /> */}
      </div>
      <div className={classes.small}>
        {/* <Image src={largeBanner[1].imageUrl} alt="photo" fill /> */}
      </div>
      <div className={classes.small}>
        {/* <Image src={smallBanner[2].imageUrl} alt="photo" fill /> */}
      </div>
      <div className={classes.small}>
        {/* <Image src={smallBanner[3].imageUrl} alt="photo" fill /> */}
      </div>
    </div>
  )
}

export default AnnouncementsPage;
