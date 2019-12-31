import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService'


 class Movies extends Component {

    state = {movies: getMovies()};
    handleDelete = selectedMovie=>{
        
        console.log(selectedMovie)
        const movies= this.state.movies.filter(m=>m._id !== selectedMovie._id)
        this.setState({movies:movies})
    }

    
    render() {

        const count = this.state.movies.length;

        if(count === 0)

          return <p>There are no movies in the database</p>;
       
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
                            <th scope="col"></th>
                        </tr>   
                    </thead>
                    <tbody>
                    {this.state.movies.map((data)=>(
                     <tr key={data._id}>
                        <td>{data.title}</td>
                        <td>{data.genre.name}</td>
                        <td>{data.numberInStock}</td>
                        <td>{data.dailyRentalRate}</td>
                        <td><button className="btn btn-danger" onClick ={()=>this.handleDelete(data)}>Delete</button></td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
            </React.Fragment>
        )
    }
}
export default Movies;