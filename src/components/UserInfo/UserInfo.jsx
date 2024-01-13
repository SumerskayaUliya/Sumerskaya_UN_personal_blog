import s from './UserInfo.module.css'
import ImageGallery from "react-image-gallery";
import user_photo from '../../assets/photo.jpg'
import img1 from '../../assets/courses/1.jpeg'
import img2 from '../../assets/courses/2.jpeg'
import img3 from '../../assets/courses/3.jpeg'
import img4 from '../../assets/courses/4.jpeg'
import img5 from '../../assets/courses/5.jpeg'
import img6 from '../../assets/courses/6.jpeg'
import img7 from '../../assets/courses/7.jpeg'
import img8 from '../../assets/courses/8.jpeg'
import img9 from '../../assets/courses/9.jpg'
import img10 from '../../assets/courses/10.jpg'
import img11 from '../../assets/courses/11.jpg'


import { useNavigate } from 'react-router';

const images = [
    { original: img11, thumbnail: img11 },
    { original: img10, thumbnail: img10 },
    { original: img4, thumbnail: img4 },
    { original: img2, thumbnail: img2 },
    { original: img9, thumbnail: img9 },
    { original: img3, thumbnail: img3 },
    { original: img1, thumbnail: img1 },
    { original: img8, thumbnail: img8 },
    { original: img5, thumbnail: img5 },
    { original: img6, thumbnail: img6 },
    { original: img7, thumbnail: img7 },
];

const UserInfo = () => {
    const navigate = useNavigate();
    return (
        <section className={s.container}>
            <div className={s.info}>
                <div className={s.user_info}>
                    <h1 className={s.titile}>Исследуй, учись, вдохновляйся – мой учительский мир!</h1>
                    <h3 className={s.descr}>Добро пожаловать в мой блог!  <br /> Я, Сумерская Юлия Николаевна - учитель начальных классов и квалифицированный специалист в области образования.</h3>
                    <button className={s.button} onClick={() => navigate('/feedback')}>Обратная связь</button>
                </div>
                <div className={s.photo}>
                    <img src={user_photo} alt="my_photo" />
                </div>
            </div>
            <h3 className={s.titile_small}>Немного фактов обо мне</h3>
            <div className={s.about}>
                <h4 className={s.subtitile}>Должность:</h4>
                <p className={s.text}>Учитель начальных классов, преподаватель иностранного языка (французского).</p>
                <h4 className={s.subtitile}>Высшее образование:</h4>
                <p className={s.text}>Московский государственный областной педагогический институт (МГОПИ) педагогика и методика начального образования.</p>
                <h4 className={s.subtitile}>Повышение квалификации:</h4>
                <ImageGallery items={images} />
            </div>
        </section>
    );
};

export default UserInfo;