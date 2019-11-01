import React from 'react' 
const Images = (props) =>{
    return(
        <div> 
         {
        props.clickyimages.map(image=>{
        const imagepath = require( '../public/assets/images/' + image);
            return (<div>
                <img src={imagepath} style={{height: "200px", padding:"20px", cursor:"pointer"}} alt={imagepath}>

            </img> </div>)
        })   
         }   
        </div>

    )
}
export default Images