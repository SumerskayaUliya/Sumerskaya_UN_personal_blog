import React from 'react';
import s from './Contacts.module.css'
import Title from '../../components/Title/Title';
import location from '../../assets/location.svg'
import phone from '../../assets/phone.svg'
import site from '../../assets/site.svg'

const Contacts = () => {
  return (
    <div className={s.page}>
      <div className={s.container}>
        <Title text={'Моя школа'} />
        <p className={s.text}>Муниципальное общеобразовательное учреждение Верейская средняя общеобразовательная школа № 19
        </p>
        <h2 className={s.subtitile}>Контакты</h2>
        <div className={s.contacts}>
          <div className={s.contacts_items}>
            <div className={s.item}>
              <img src={location} alt="" />
              <span className={s.text}>142633, Московская область, г.о. Орехово-Зуево, Верея, улица Школьная, дом 6</span>
            </div>
            <div className={s.item}>
              <img src={phone} alt="" />
              <a className={s.text} href='tel:+7(496)4162116'>+7(496)416-21-16</a>
            </div>
            <div className={s.item}>
              <img src={site} alt="" />
              <a className={s.text} href='mailto:orzu_mou_sosh19@mosreg.ru' >orzu_mou_sosh19@mosreg.ru</a>
            </div>
          </div>
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=650&amp;height=400&amp;hl=en&amp;q=%D1%83%D0%BB%20%D0%A8%D0%BA%D0%BE%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%20%D0%B4%206%20%D0%92%D0%B5%D1%80%D0%B5%D1%8F+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;