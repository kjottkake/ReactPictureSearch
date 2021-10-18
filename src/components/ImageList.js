import React from "react";
import './ImageList.css';

const ImageList = (props) => {
    // console.log(props.images)
    const images = props.images.map((images) => {
        return <img alt={images.description} key={images.id} src={images.urls.regular}/>
    });
    return <div className="image-list">{images}</div>;
};

export default ImageList;