import React from 'react';
import style from './Pagination.module.scss'

const Pagination = ({currentPage, totalPages, changePage}) => {

    let buttonsNums = []
    for (let i = 1; i <= totalPages; i++) {
        buttonsNums.push(i)
    }

    const buttons = buttonsNums.map(num => <button key={num}
                                                   className={num === currentPage ? `${style.btn} ${style.btn_active}` : style.btn}
                                                   onClick={() => changePage(num)}
    >
        {num}</button>)

    return (
        <div className={style.pagination}>
            <div className={style.block}>
                <button className={style.arrow_btn}
                        disabled={currentPage === 1}
                        onClick={() => changePage(currentPage - 1)}>&lt;</button>
                {buttons}
                <button className={style.arrow_btn}
                        disabled={currentPage === totalPages}
                        onClick={() => changePage(currentPage + 1)}>&gt;</button>
            </div>
        </div>
    );
};

export default Pagination;