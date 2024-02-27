import React ,{useEffect, useState} from "react";
import './App.css';
import SearchIcon from './search.svg';
import MoviesCard from "./MoviesCard";

const api="http://www.omdbapi.com?apikey=3a786a42"
 

const App =() =>{
    const[movies,setMovies]=useState([]);
    const[searchTerm,setSearchTerm]=useState('');

    useEffect( ()=>{
        searchMovies("Conjuring");
        
            }, []);

    const searchMovies =async (title) =>{
    const response= await fetch(`${api}&s=${title}`);
    const data= await response.json();

setMovies(data.Search);
};

const handleKeyPress =(e)=>{
    if(e.key ==='Enter'){
       searchMovies(searchTerm);
        
           }
}

    return(
        <div className="app">
        <h1>MovieLand</h1>
        <div className="menu">
  <a href="#">Home</a>
  <a href="#">SearchMovies</a>
  <a href="#">BookTickets</a>
  <a href="#">Contact</a>
  <a href="#">About</a>
</div>
        
        <div className="search">
        <input 
        placeholder="Search for movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        />
        
        

        <img 
        src={SearchIcon}
        alt="search"
        onClick={()=>searchMovies(searchTerm)}
        
        />
        

        </div>

        


        {movies?.length > 0 ? (
                <div className="container">
            {movies.map((movie)=>(
                <MoviesCard movie={movie}/>
            ))}
        </div>
            ) : (
                <div className="empty">
                    <h3>No Movies!!</h3>
                    </div>
            )}
            </div>
        );
    }
export default App;