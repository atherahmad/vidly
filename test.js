const pagesArray=(p)=>{
            let array=[];
            for(index=1; index<=p; index++)
            {
                array.push(index)
            }
            return array
    }
    const getPages = pagesArray(22)
    console.log(getPages)
    console.log(paginate(getPages, 5, 5)) 
    console.log(getPages)

 function paginate(items, pageNumber, pageSize){

        let initialIndex= (pageNumber * pageSize ) - pageSize;
        let finalIndex = pageNumber * pageSize;
        return items.slice(initialIndex, finalIndex)
       


    
    /*paginate(movies, currentPage, pageSize)
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value()*/
}
