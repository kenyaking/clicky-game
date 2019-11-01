import React from 'react' 
const Images = (props) =>{
    return(
        <div> 
         {
        props.clickyimages.map(image=>{
            return (<div>{image}</div>)
        })   
         }   
        </div>

    )
}
export default Images