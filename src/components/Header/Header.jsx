import React from 'react';
import style from './Header.module.scss'
import '../../index.scss'

const Header = ({totalImages}) => {
    return (
        <header className={style.header}>
            <h5 className={style.counter}>{totalImages} изображений</h5>
        </header>
    );
};

export default Header;