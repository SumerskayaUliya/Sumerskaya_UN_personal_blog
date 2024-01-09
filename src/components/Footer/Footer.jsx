import s from './Footer.module.css'
import mail from '../../assets/mail.svg'
import insta from '../../assets/insta.svg'
import vk from '../../assets/vk.svg'
import { useNavigate } from 'react-router';

const Footer = () => {

    return (
        <footer className={s.footer}>
            <div className={s.contacts}>
                <div className={s.soc_media}>
                    <a href="mailto:sumerskaya.un@gmail.com" target="_blank" rel="noreferrer">
                        <img src={mail} alt="mail_icon" />
                    </a>
                    <a href="https://www.instagram.com/un_sumerskaya?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noreferrer">
                        <img src={insta} alt="instagram_icon" />
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <img src={vk} alt="vk_icon" />
                    </a>
                </div>
            </div>
            <p className={s.copyright}>Copyright ©2020 All rights reserved </p>
        </footer>
    );
};

export default Footer;