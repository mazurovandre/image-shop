import React, {useEffect} from 'react';
import style from './PictureBlock.module.scss'
import trash from '../../../icons/trash-white.svg'
import eye from '../../../icons/eye.svg'

const PictureBlock = ({id, width, height, url, name, selectImage, deleteImage, isSelected}) => {

    const selectBlock = () => {
        !isSelected ? selectImage(id, true) : selectImage(id, false)
    }

    // useEffect(() => {
    //     if (isSelected) {
    //         selectImage(id, true)
    //     }
    // }, [isSelected])



    return (
        <div className={style.block}>
            <div className={style.img_block}>
                <img className={style.img} width={width} height={height} src={url} alt={name}/>
                <div className={style.icons}>
                    <label className={style.checkbox_label}>
                        <input type="checkbox" name="checkbox" className={style.hidden} checked={isSelected} onChange={selectBlock}/>
                        <div className={style.checkbox_custom} />
                    </label>
                    <img className={style.trash} src={trash} alt="delete" onClick={() => deleteImage(id)}/>
                    <div className={style.eye}>
                        <img src={eye} alt="eye"/>
                    </div>

                </div>
            </div>
            <div className={style.info}>
                <h4 className={style.description}>{name}</h4>
            </div>
        </div>
    );
};

export default PictureBlock;