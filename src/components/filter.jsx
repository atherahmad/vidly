import React , {Component} from "react";


class Filter extends Component{
  
  /* constructor(props){

    super(props)
    const action = this.props.movies.filter((movies)=>movies.genre.name ==="Action")
    const thriller = this.props.movies.filter((movies)=>movies.genre.name ==="Thriller")
    const comedy= this.props.movies.filter((movies)=>movies.genre.name ==="Comedy")
    const allMovies = this.props.movies 
  }*/

    render(){

        return(

        <div className="dropdown show">
    
        <p className="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          All Movies
        </p>
      
        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <p className="dropdown-item" >Action</p>
          <p className="dropdown-item" >Drama</p>
          <p className="dropdown-item" >Romance</p>
        </div>
        
      </div>)
    }
}

export default Filter;