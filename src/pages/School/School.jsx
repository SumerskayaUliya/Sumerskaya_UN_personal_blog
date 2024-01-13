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
import deti from '../../assets/deti.jpeg'
import deti1 from '../../assets/deti1.jpeg'
import deti2 from '../../assets/deti2.jpeg'
import deti3 from '../../assets/deti3.jpeg'
import deti4 from '../../assets/deti4.jpeg'
import deti5 from '../../assets/deti5.jpeg'

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
const data = [deti1, deti2, deti3, deti4, deti5, deti]

const School = () => {
  return (
    <div className={s.page}>
      <div className={s.container}>
        <Title text={'Мои ученики и их достижения'} />
        <h2 className={s.subtitile}>Фотогалерея</h2>
        <ImageGallery items={images} />
        <h2 className={`${s.subtitile} ${s.mt}`}>Достижения и награды учеников</h2>
        <div className={s.diploms_block}>
          {data.map((el, index) => <div className={s.deti} key={index}>
            <img src={el} alt='' />
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default School;