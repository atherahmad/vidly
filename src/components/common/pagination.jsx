import React from "react";
import _ from "lodash";

const Pagination = props=>{

    const {itemsCount, pageSize, currentPage,onPageChange} = props;

    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount ===1) return
    const pages = _.range(1,pagesCount+1)
    

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page)=>(
                        <li key = {page} 
                            className={page===currentPage? "page-item active" : "page-item"}
                            style={page===currentPage?{cursor:"default"} : {cursor:"pointer"}}>
                        <a className="page-link" onClick={()=>onPageChange(page)}>{page}</a>
                    </li>))}
            </ul>
      </nav>)
}
export default Pagination;