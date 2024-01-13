import s from './ContactPage.module.css'
import Button from '../../components/Button/Button';
import img from '../../assets/contacts_img.png'

const ContactPage = () => {
    const handelSubmit = (e) => {
        e.preventDefault();
        e.target.message.value = '';
        e.target.email.value = '';
        e.target.name.value = '';
    }
    return (
        <div className={s.page}>
            <div className={s.container}>
                <div className={s.form_block}>
                    <h1 className={s.title}>Форма обратной связи</h1>
                    <form className={s.form} onSubmit={handelSubmit}>
                        <input
                            className={s.input_text}
                            type="text"
                            name='name'
                            placeholder='Name'
                            required
                        />
                        <input
                            className={s.input_text}
                            type="email"
                            name='email'
                            placeholder='Email'
                            required
                        />
                        <textarea
                            className={s.message}
                            name="message"
                            placeholder='Message'
                            rows={5}
                        >
                        </textarea>
                        <Button style={{ width: "50%", alignSelf: "center" }} >ОТПРАВИТЬ</Button>
                    </form>
                </div>
                <img className={s.img} src={img} alt="" />
            </div>
        </div>
    );
};

export default ContactPage;