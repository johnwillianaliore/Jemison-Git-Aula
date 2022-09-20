import React from 'react';
import { CardContainer } from './Cstyled';

export default function Card(props) {
  console.log(props)
  const {img,name,species,id} = props
  const {removeCharacter} = props
  const {changePage} = props
 return (
   <CardContainer>
    <img src={img} alt={name}/>
      <h2>{name}</h2>
      <p>{species}</p>
      <button onClick={() =>changePage('DetailPage',id)}>Detalhes</button>
      <button onClick={() =>removeCharacter(id)}>Remover</button>
   </CardContainer>
 );
}