import FeaturedWorks from '../../components/FeaturedWorks/FeaturedWorks';
import RecentPosts from '../../components/RecentPosts/RecentPosts';
import UserInfo from '../../components/UserInfo/UserInfo';
import s from './HomePage.module.css'
import certif from '../../assets/certif.jpg'
import certif1 from '../../assets/certif_1.png'
import certif2 from '../../assets/certif.jpeg'
import svidet from '../../assets/svidet.jpeg'
import svidet1 from '../../assets/svidet1.jpeg'
import svidet2 from '../../assets/svidet2.jpeg'
import diplom1 from '../../assets/diplom1.jpeg'
import diplom2 from '../../assets/diplom2.jpeg'
import gramota from '../../assets/gramota1.jpeg'

const data = [certif, certif1, certif2, svidet, svidet1, svidet2, diplom1, diplom2, gramota]

const HomePage = () => {
    return (
        <div className={s.page}>
            <UserInfo />
            <div className={s.recent_posts}>
                <RecentPosts />
            </div>
            <FeaturedWorks />
            <div className={s.certificates}>
                <div className={s.container}>
                    <h2 className={s.subtitile}>Мои Сертификаты и Свидетельства</h2>
                    <div className={s.items}>
                        {
                            data.map((el, index) => <img key={index} src={el} alt="" />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;