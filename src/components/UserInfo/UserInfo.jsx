import s from './UserInfo.module.css'
import ImageGallery from "react-image-gallery";
import user_photo from '../../assets/photo.jpg'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import { useNavigate } from 'react-router';

const data = [
    "Курс 'Мультипликационный фильм: технологии создания и возможности использования в образовательном процессе' (ГОУВПОМО ГГТУ, 36 часов, завершен 01.10.2022).",
    'Курс "Использование цифровых образовательных ресурсов для создания интерактивных заданий"(ГОУВПОМО ГГТУ, 36 часов, завершен 29.10.2022).',
    'Курс "Формирование образовательного контента с использованием дистанционных образовательных технологий".'
]

const UserInfo = () => {
    const navigate = useNavigate();
    return (
        <section className={s.container}>
            <div className={s.info}>
                <div className={s.user_info}>
                    <h1 className={s.titile}>Исследуй, учись, вдохновляйся – мой учительский мир!</h1>
                    <h3 className={s.descr}>Добро пожаловать в мой блог!  <br /> Я, Сумерская Юлия Николаевна - учитель начальных классов и квалифицированный специалист в области образования.</h3>
                    <button className={s.button} onClick={() => navigate('/contacts')}>Let's Contact!</button>
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
                <ul className={s.list}>
                    {data.map(el => <li key={el} className={s.text}>{el}</li>)}
                </ul>
                <div className={s.docs}>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>

            </div>
        </section>
    );
};

export default UserInfo;