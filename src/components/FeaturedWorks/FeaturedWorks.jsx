import s from './FeaturedWorks.module.css'
import { work_data } from '../../data'
import Work from '../Work/Work';

const FeaturedWorks = () => {
    return (
        <section className={s.container}>
            <h2 className={s.title}>Популярное</h2>
            <div className={s.works_wrapper}>
                {
                    work_data
                        .map(el => <Work key={el.id} {...el} />)
                        .slice(0, 2)
                }
            </div>
        </section>
    );
};

export default FeaturedWorks;