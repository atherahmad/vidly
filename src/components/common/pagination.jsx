import React from "react";
// import _ from "lodash";

const Pagination = props=>{

    const {itemsCount, pageSize, currentPage,onPageChange} = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount ===1) return null

   
    // const pages = _.range(1,pagesCount+1) // first 1 is starting number and pagesCount +1 is required it is loop with smaller than condition
    const pagesArray=(p)=>{
        let array=[];
        for(let index=1; index<=p; index++)
        {
            array.push(index)
        }
        return array
    }

    const resultedPages = pagesArray(pagesCount)

    return (
            <nav>
            <ul className="pagination">
                <li className= "page-item"
                    style={currentPage===1?{cursor:"disabledCursor"} : {cursor:"pointer"}}>
                    <p className="page-link"
                        disabled={true}
                        onClick={()=>{
                        onPageChange(currentPage===1? 1 : currentPage-1)}}>
                    Previous</p>
                </li>

        {resultedPages.map((page)=>(
                <li key = {page} 
                    className={page===currentPage? "page-item active" : "page-item"}
                    style={page===currentPage?{cursor:"default"} : {cursor:"pointer"}}>
                    <p className="page-link" 
                        onClick={()=>onPageChange(page)}>
                        {page}</p>
                </li>))}

                <li className= "page-item"
                    style={currentPage=== pagesCount ?{cursor:"disabledCursor"} : {cursor:"pointer"}}>
                    <p className="page-link"
                        onClick={()=>onPageChange(currentPage===pagesCount? currentPage : currentPage+1)}>
                        Next</p>
                </li>

            </ul>
      </nav>)
}

export default Pagination;