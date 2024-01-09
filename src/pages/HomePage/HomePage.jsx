import FeaturedWorks from '../../components/FeaturedWorks/FeaturedWorks';
import RecentPosts from '../../components/RecentPosts/RecentPosts';
import UserInfo from '../../components/UserInfo/UserInfo';
import s from './HomePage.module.css'
import certif from '../../assets/certif.jpg'
import certif_1 from '../../assets/certif_1.png'

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
                    <h2 className={s.subtitile}>Сертификаты</h2>
                    <div className={s.items}>
                        <img src={certif} alt="" />
                        <img src={certif_1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;