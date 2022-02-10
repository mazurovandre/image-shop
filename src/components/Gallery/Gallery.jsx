import React, {useState} from 'react';
import Pagination from "../Pagination/Pagination";
import style from "./Gallery.module.scss";
import PictureBlock from "./PictureBlock/PictureBlock";

const Gallery = ({images, selectImage, deleteImage, selectedImages}) => {
    const [currentPage, setCurrentPage] = useState(1);

    const portionSize = 6; // Количество изображений на экране
    const imagesPortion = images.slice((currentPage - 1) * portionSize, currentPage * portionSize); // Конкретные изображения на экране
    const totalPages = Math.ceil(images.length / portionSize); // Количество страниц

    const changePage = (targetPage) => {
        setCurrentPage(targetPage)
    }

    const isSelected = (id) => {
        selectedImages.includes(id)
    }

    const blocks = imagesPortion.map(item => <PictureBlock key={item.url + item.name}
                                                           isSelected = {selectedImages.includes(item.id)}
                                                                    id={item.id}
                                                                    name={item.name}
                                                                    url={item.sample_url}
                                                                    width={item.width}
                                                                    height={item.height}
                                                                    selectImage={selectImage}
                                                                    deleteImage={deleteImage}
    />)

    return (
        <>
            <div className={style.gallery}>
                {blocks}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                changePage={changePage}
            />
        </>
    );
};

export default Gallery;