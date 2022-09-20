import React from 'react';
import Header from '../../Components/Header/Header';
export default function DetailPage(props) {

const{ characters,id} = props
const [character] = characters.filter(char => char.id === id)
const {changePage} = props

 return (
   <>
    <Header/>
    <div>
      <h2>{character.name}</h2>
      <img src={character.image} alt=''/>
      <p>{character.species}</p>
      <button onClick={() =>changePage('HomePage')}>Home</button>
    </div>
   </>
 );
}