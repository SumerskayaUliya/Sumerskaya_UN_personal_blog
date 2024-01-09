import React from 'react';
import s from './School.module.css'
import Title from '../../components/Title/Title';
import ImageGallery from "react-image-gallery";
import location from '../../assets/location.svg'
import phone from '../../assets/phone.svg'
import site from '../../assets/site.svg'
import f1 from '../../assets/photo1.jpg'
import f2 from '../../assets/photo2.jpeg'
import f3 from '../../assets/photo3.jpeg'
import f4 from '../../assets/photo4.jpeg'
import f5 from '../../assets/photo5.jpg'
import f6 from '../../assets/photo6.jpg'
import f7 from '../../assets/photo7.jpg'
import f8 from '../../assets/photo8.jpeg'
import f9 from '../../assets/photo9.jpeg'
import f10 from '../../assets/photo10.jpg'

const images = [
  { original: f1, thumbnail: f1 },
  { original: f2, thumbnail: f2 },
  { original: f3, thumbnail: f3 },
  { original: f4, thumbnail: f4 },
  { original: f5, thumbnail: f5 },
  { original: f6, thumbnail: f6 },
  { original: f7, thumbnail: f7 },
  { original: f8, thumbnail: f8 },
  { original: f9, thumbnail: f9 },
  { original: f10, thumbnail: f10 },
];
const School = () => {
  return (
    <div className={s.page}>
      <div className={s.container}>
        <Title text={'Моя ученики и их достижения'} />
        <h2 className={s.subtitile}>Фотогалерея</h2>
        <ImageGallery items={images} />
        <h2 className={s.subtitile}>Достижения и награды</h2>
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

export default School;