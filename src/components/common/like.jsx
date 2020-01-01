import React  from "react";

const Like = (props)=>{


    let classes = "fa fa-heart"
        if(!props.movie.favourite) classes+="-o"

        return(<i className={classes}
                  style={{cursor:"pointer"}} aria-hidden="true"
                  onClick={props.handleFavourite}></i>)
}


export default Like;

/*  onMouseEnter={()=>document.body.style.cursor="pointer"}
    onMouseLeave={()=>document.body.style.cursor="default"}
*/
