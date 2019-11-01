import React from 'react' 
const Images = (props) =>{
    return(
        <div> 
         {
        props.clickyimages.map(image=>{
        const imagepath = require( '../public/assets/images/' + image.toString() + ".jpg");
            return (<span>
                <img onClick ={()=>props.handleImageClick(image)} src={imagepath} style={{height: "150px", padding:"20px", cursor:"pointer"}} alt={imagepath}>

            </img> </span>)
        })   
         }   
        </div>

    )
}
export default Images