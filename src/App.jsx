import React, {useEffect, useState} from "react";
import './index.scss'
import {newData as data} from './data/newData'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";

const App = () => {

    const [selectedImages, setSelectedImages] = useState([]) // Id выбранных изображений
    const [deletedImages, setDeletedImages] = useState([]) // Id удаленных изображений
    let [filteredImages, setFilteredImages] = useState(
        Array.from(data).filter(item => !deletedImages.includes(item.id))
    ) // Изображения, которые надо показать

    useEffect(() => {
        if (data.length !== deletedImages.length + filteredImages.length) {
            setFilteredImages(prevState => prevState.filter(item => !deletedImages.includes(item.id)))
        }
    }, [deletedImages, filteredImages, selectedImages])

    const resetSelected = () => {
        setSelectedImages([])
    }

    const deleteAll = () => {
        setDeletedImages(prevState => [...prevState, ...selectedImages])
        setSelectedImages([])
    }

    const deleteImage = id => {
        if (selectedImages.includes(id)) {
            setSelectedImages(prevState => prevState.filter(num => num !== id))
        }

        setDeletedImages(prevState => {
            return (!prevState.includes(id)) ? [...prevState, id] : prevState
        })
    }

    const selectImage = (id, isAdd) => {
        isAdd && !selectedImages.includes(id) ? setSelectedImages(prevState => [...prevState, id])
            : setSelectedImages(prevState => prevState.filter(num => num !== id))
    }

    return (
        <>
            <Header totalImages={filteredImages.length}/>
            <Gallery images={filteredImages}
                     selectedImages={selectedImages}
                     deleteImage={deleteImage}
                     selectImage={selectImage}
            />
            <Footer images={filteredImages} selectedImages={selectedImages} resetSelected={resetSelected} deleteAll={deleteAll}/>
        </>
    );
}

export default App;
