import s from './Post.module.css'

const Post = ({ title, text, link, date, styles, img }) => {

    return (
        <div className={s[`post-${styles}`]}>
            <h3 className={s[`title-${styles}`]}>{title}</h3>
            <div className={s.addit_info}>
                <span className={s[`date-${styles}`]}>{date}</span>
                <span className={s.decor}></span>
                <a href={link} target='_blanc' className={s[`tags-${styles}`]}>Узнай больше</a>
            </div>
            <p className={s.text}>{text}</p>
            {img &&
                <div className={s.img}>
                    <img src={img} alt="" />
                </div>}
        </div>
    );
};

export default Post;