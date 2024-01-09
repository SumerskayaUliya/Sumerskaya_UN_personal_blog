import s from './BlogPage.module.css'
import Title from '../../components/Title/Title';
import { blog_data_ } from '../../data';
import Post from '../../components/Post/Post';

const BlogPage = () => {
    return (
        <div className={s.page}>
            <div className={s.container}>
                <Title text={'Мои Публикации'} />
                <div className={s.posts_wrapper}>
                    {
                        blog_data_.map(el => <Post key={el.id} {...el} styles={'main'}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogPage;