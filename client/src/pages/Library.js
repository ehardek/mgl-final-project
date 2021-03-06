import React from "react";
import {Card} from "react-bootstrap";


const gameLibrary = () => {
const gamesList = [
  {image: "", title:"", text: ""},
  {image: "", title:"", text: ""},
  {image: "", title:"", text: ""},
  {image: "", title:"", text: ""},
];



const renderCard = (card,index) =>{
  return(
  <Card style={{ width: '18rem' }}>  
  <Card.Img variant="top" src={card.image}  />
  <Card.Body>
  <Card.Title>{card.title}</Card.Title>
    <Card.Text>
     {card.text}
    </Card.Text>
  </Card.Body>
</Card>
);
};
return (<div classname = "App">
 {gamesList.map(renderCard)}
</div>
)
};


export default gameLibrary
