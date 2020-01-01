import React, {Component} from "react";
import "./App.css";
import Filter from "./components/filter"
import Movies from "./components/movies"

class App extends Component{

    
    render(){
        return(
            <React.Fragment>
                <Movies/>
                <Filter />
                
            </React.Fragment>
        )
    }
  }
    export default App;
