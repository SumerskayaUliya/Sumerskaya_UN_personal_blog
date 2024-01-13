import { Link } from 'react-router-dom';
import s from './Work.module.css'

const Work = ({ id, main_img, title, year, link }) => {

    return (
        <div className={s.item}>
            <a href={link} target='_blanc'>
                <img className={s.picture} src={main_img} alt={title} />
            </a>
            <div className={s.info}>
                <h3 className={s.title}>{title}</h3>
                <div className={s.addit_info}>
                    <span className={s.year}>{year}</span>
                    <a href={link} className={s.tag} target='_blanc'>Посмотреть документ</a>
                </div>
            </div>
        </div>
    );
};

export default Work;