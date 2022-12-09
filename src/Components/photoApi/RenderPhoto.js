import React from "react";

function RenderPhoto(props) {
    /**
     * @params photDetails - a list of the photo Details, each element in the list is a object
     * sample - [ ["0911", "car", "img_url"]]
     */
    const photoDetails = props.photoDetails
    console.log(props);

    
    const photoRow = photoDetails.map( (photoID ) => 
            <li key={1}>
                {photoID}
            </li>
            );

    return (
        <>
        <ul>{photoRow}</ul>
        </>
    )

}

export default RenderPhoto