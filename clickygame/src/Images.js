import React from 'react' 
const Images = (props) =>{
    return(
        <div> 
         {
        props.clickyimages.map(image=>{
        const imagepath = require( '../public/assets/images/' + image.toString() + ".jpg");
            return (<div>
                <img onClick ={props.handleImageClick} src={imagepath} style={{height: "200px", padding:"20px", cursor:"pointer"}} alt={imagepath}>

            </img> </div>)
        })   
         }   
        </div>

    )
}
export default Images