import React  from "react";
import { Dropdown } from 'react-bootstrap';



  
  /* constructor(props){

    super(props)
    const action = this.props.movies.filter((movies)=>movies.genre.name ==="Action")
    const thriller = this.props.movies.filter((movies)=>movies.genre.name ==="Thriller")
    const comedy= this.props.movies.filter((movies)=>movies.genre.name ==="Comedy")
    const allMovies = this.props.movies 
  }*/

    const Filter =props=>{

      //const {movies} = props;
      //console.log("filter component", movies)

        return(

          <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filter Movies
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item 
                  onClick={()=>props.filterHandler("Action")}>Action</Dropdown.Item>
                <Dropdown.Item 
                  onClick={()=>props.filterHandler("Thriller")}>Thriller</Dropdown.Item>
                <Dropdown.Item 
                  onClick={()=>props.filterHandler("Comedy")}>Comedy</Dropdown.Item>
                <Dropdown.Item 
                  onClick={()=>props.filterHandler("allMovies")}>All Movies</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>)
    } 
    export default Filter;