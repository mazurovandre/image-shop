import React from 'react';
import style from './Footer.module.scss'
import Trash from "../UI/Trash";

const Footer = ({selectedImages, resetSelected, deleteAll}) => {

    const totalImages = selectedImages.length
    const totalPrice = selectedImages.length * 1560

    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <div className={style.info}>
                    <button className={style.btn} disabled={totalImages === 0} onClick={resetSelected}>X</button>
                    <div className={style.count}>{totalImages}</div>
                    <p className={style.text}>изображение выбрано на {totalPrice} ₽</p>
                </div>
                <button className={style.delete_btn} disabled={totalImages === 0} onClick={deleteAll}>
                    <Trash />
                </button>

            </div>
        </footer>
    );
};

export default Footer;