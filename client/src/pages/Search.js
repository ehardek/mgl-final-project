import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import {Jumbotron, Container, InputGroup, FormControl, Row} from "react-bootstrap";
import {searchGames} from '../utils/API';
// import ResultList from "../components/List";
import GameCard from "../components/GameCard"


function Search() {
   const [search , setSearch] = useState("");
  //  const [name, gameName] = useState("");
   const [list, setList] = useState([]);
   const [games, addGame] = useState([]);
   
   function saveGame(event){
    console.log(event.target)
    // addGame((games)=>[...games,id])
    // console.log(id)
    // let newGames = games
    // newGames.push(id)
    // addGame([...games])
    // console.log(games)
  }
  
   function submitSearch(event) {
      event.preventDefault();
    console.log(search)
        searchGames(search).then(
          results=>{
            let gameArray = results.data.results
            setList(gameArray)
            console.log(list)
          }
        )
    }
return(
<>
<Jumbotron fluid className = "text-light bg-dark">
  <Container> 
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Search Your Game"
      aria-label="Search Your Game"
      aria-describedby="basic-addon2"
      onChange={event=>(setSearch(event.target.value))}
    />  
    <InputGroup.Append>
      <Button onClick={submitSearch} type="Submit" variant="outline-light">Search</Button>
    </InputGroup.Append>
  </InputGroup>
 </Container>
 <Container>
{/* <ResultList name="hello" url="world"/> */}
<Row>
  {list.length ? (
   list.map(game=>(
     <GameCard
      name = {game.name}
      background_image = {game.background_image}
      id = {game.id}
      onClick = {saveGame}
      // key = {game.id}
    />
   ))):(
     <h3> What the Heck is that?</h3>
   ) } 
</Row>
 </Container>
</Jumbotron>
</>
    )
}

export default Search;
 
    