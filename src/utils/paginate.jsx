// import _ from "lodash";

export function paginate(items, pageNumber, pageSize){

    let initialIndex= (pageNumber * pageSize ) - pageSize;
    let finalIndex = pageNumber * pageSize;
    return items.slice(initialIndex, finalIndex)

    
    /*paginate(movies, currentPage, pageSize)
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value()*/
}