import React from "react";

const ImageList = (props) => {
    // console.log(props.images)
    const images = props.images.map((images) => {
        return <img src={images.urls.regular}/>
    });
    return <div>{images}</div>;
};

export default ImageList;