import React from 'react';
import style from './Footer.module.scss'
import trash from '../../icons/trash-black.svg'

const Footer = ({selectedImages, resetSelected, deleteAll}) => {

    const totalImages = selectedImages.length
    const totalPrice = selectedImages.length * 1560

    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.info}>
                    <button className={style.btn} onClick={() => {}}>+</button>
                    <div className={style.count}>{totalImages}</div>
                    <p className={style.text}>изображение выбрано на {totalPrice} ₽</p>
                </div>
                <img className={style.trash} src={trash} alt="Delete selected" onClick={deleteAll}/>
                <p className={style.cancel}>Для отмены нажмите ESC</p>
            </div>
        </footer>
    );
};

export default Footer;