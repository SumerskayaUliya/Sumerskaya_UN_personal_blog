import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css'

const Navigation = ({ active }) => {
    const links = [
        { id: 1, title: 'Обо мне', link: '' },
        { id: 2, title: 'Методическая копилка', link: 'works' },
        { id: 3, title: 'Публикации', link: 'blog' },
        { id: 4, title: 'Школьная жизнь', link: 'school_life' }
    ]
    const changeClass = ({ isActive }) => isActive ? [s.nav_link, s.active].join(' ') : s.nav_link

    return (
        <nav className={active ? s.nav_mob : s.nav} >
            {
                links.map((el, i) =>
                    <NavLink
                        to={i === 0 ? '/' : `/${el.link.toLowerCase()}`}
                        className={changeClass}
                        key={el.id}
                    >
                        {el.title}
                    </NavLink>)
            }
        </nav>
    );
};

export default Navigation;