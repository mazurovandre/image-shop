import data from './data.json'

const images = Array.from(data)

export const newData = images.map((item, index) => {
    return {
        ...item,
        id: index + 1
    }
})