import React, { Component } from 'react';
import Like from "./common/like.jsx"
import Pagination from "./common/pagination"
import {getMovies} from '../services/fakeMovieService';
import {paginate} from "../utils/paginate"




 class Movies extends Component {
     state={
         movies: getMovies(),
         pageSize : 4,
         currentPage : 1
     }
     handlePageChange=(page)=>{
         console.log(page)
         this.setState({currentPage:page})
     }
     handleDelete = selectedMovie=>{
        
        const movies= this.state.movies.filter(m=>m._id !== selectedMovie._id)
        this.setState({movies:movies})
        console.log("deleteing activated")
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

        const count = this.state.movies.length;
        const {pageSize, currentPage, movies} = this.state;

        if(count === 0)

          return <p>There are no movies in the database</p>;
        
        const paginatedMovies = paginate(movies, currentPage, pageSize)
       
        return (
            <React.Fragment>
            <p>Showing {count} movies in the Database</p>
            
            <div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Rent</th>
                            <th scope="col">Favourites</th>
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
            </React.Fragment>
        )
    }
}
export default Movies;


