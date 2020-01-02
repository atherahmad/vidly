import React, { Component } from 'react';
import Like from "./common/like.jsx"
import Pagination from "./common/pagination"
import {getMovies} from '../services/fakeMovieService';
import {paginate} from "../utils/paginate"
import Filter from "./filter"




 class Movies extends Component {
     state={
         movies: getMovies(),
         pageSize : 3   ,
         currentPage : 1,
         filtering : false,
         show : "allMovies",
         sorting: false,
         sortBy:"",
         lastSorting: "none",
         sortType:""
     }

     sortHandler =(selection)=>{
        if(selection === this.state.lastSorting) this.setState({sortType: -1,lastSorting:"none"})
        else this.setState({sorting: true, sortBy:selection, lastSorting:selection , sortType:1})
     }
     filterHandler=(selection)=>{
    
        if(selection === "allMovies") {
            this.setState({filtering: false, show:selection})
            return}
        this.setState({filtering: true, show:selection})
        

     }

     handlePageChange=(page)=>{
         console.log(page)
         this.setState({currentPage:page})
     }

    handleDelete=selectedMovie=>{
        
        const movies= this.state.movies.filter(m=>m._id !== selectedMovie._id)
        this.setState({movies:movies})

    }
        
    
    handleFavourite =(movie)=>{

        const movies= [...this.state.movies]
        const index = movies.indexOf(movie)
        console.log(index)

        movie.favourite = !movie.favourite
        movies[index] = {...movie}
        this.setState({movies})


    }

    

        
    
    
    render() {

        let count = this.state.movies.length;
        let {pageSize, currentPage, movies, sortType} = this.state;
        let iconClass = "";
        this.state.sortType===1? iconClass = "fa fa-chevron-down" : iconClass = "fa fa-chevron-up" 


        console.log(this.state.filtering)

        if(this.state.sorting){
            if(this.state.sortBy === "genre.name")
            movies.sort((a, b) => (a.genre.name > b.genre.name) ? sortType : -(sortType))
            else
            movies.sort((a, b) => (a[(this.state.sortBy)] > b[(this.state.sortBy)]) ? sortType : -(sortType))


        }

        if(this.state.filtering){
            movies=[...movies.filter((m)=>m.genre.name===this.state.show)]
            
            count = movies.length;
            console.log(movies, "and ", count)
            
            } 
           

        if(count === 0)

          return <p>There are no movies in the database</p>;
        let paginatedMovies=[];
        if(count <= pageSize)  paginatedMovies=[...movies]
        else  paginatedMovies = paginate(movies, currentPage, pageSize)

        
       
        return (
            <React.Fragment>
            <p>Showing {count} movies in the Database</p>
            
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" ><span style={{cursor:"pointer"}}
                                	            onClick={()=>this.sortHandler("title")}>Title</span>
                                                    {this.state.sortBy==="title" ? 
                                                    <i className={iconClass}></i> 
                                                    :null}</th>

                            <th scope="col" ><span style={{cursor:"pointer"}}
                                                onClick={()=>this.sortHandler("genre.name")}>Genre</span>
                                                    {this.state.sortBy==="genre.name" ? 
                                                    <i className={iconClass}></i> 
                                                    :null}</th>

                            <th scope="col" ><span style={{cursor:"pointer"}}
                                                onClick={()=>this.sortHandler("numberInStock")}>Stock</span>
                                                    {this.state.sortBy==="numberInStock" ? 
                                                    <i className={iconClass}></i> 
                                                    :null}</th>

                            <th scope="col" ><span style={{cursor:"pointer"}}
                                                onClick={()=>this.sortHandler("dailyRentalRate")}>Rent</span>
                                                    {this.state.sortBy==="dailyRentalRate" ? 
                                                    <i className = {iconClass}></i> 
                                                    :null}</th>

                            <th scope="col">Favourites<i className=""></i></th>
                            <th scope="col"></th>
                        </tr>   
                    </thead>
                    <tbody>
                    {paginatedMovies.map((data)=>(
                     <tr key={data._id}>
                        <td>{data.title}</td>
                        <td>{data.genre.name}</td>
                        <td>{data.numberInStock}</td>
                        <td>{data.dailyRentalRate}</td>
                        <td><Like 
                                movie = {data}
                                handleFavourite={()=>this.handleFavourite(data)} />
                        </td>
                        <td><button className="btn btn-danger" 
                            onClick ={()=>this.handleDelete(data)}>
                                Delete</button></td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
            <Pagination 
                itemsCount = {count} 
                pageSize={pageSize} 
                onPageChange = {this.handlePageChange}
                currentPage = {currentPage}/>
            
            <Filter 
                filterHandler={this.filterHandler}/>
            </React.Fragment>
        )
    }
}
export default Movies;


