import React, { useState,useEffect } from 'react';
import Card from '../../Components/Card/Card';
import Header from '../../Components/Header/Header';
import { HomeContainer } from './HomeSty';

export default function HomePage(props) {

const {characters} = props
const{ image,name,species,query,orderParam} = props.states
const { handleInputImage,handleInputName,handleInputSpecies,handleQuery,handleOrderParam} = props.handlers
const { addCharacter} = props
const {removeCharacter} = props
const {changePage} = props

const renderList = characters
.filter(char => query === '' || char.name.toLowerCase().includes(query))
.sort((a,b) => orderParam === '' || orderParam === 'Crescente' && a.name>b.name ? 1 : -1)
.sort((a,b) => orderParam === '' || orderParam === 'Decrescente' && a.name>b.name ? -1 : 1)
.map(char =>{

  return(
    <Card
    key={char.id}
    id={char.id}
    img = {char.image}
    name = {char.name}
   species = {char.species}
   removeCharacter={removeCharacter}
   changePage ={changePage}
   />
  )
})


  
  
 return (
  <>
   
        
       <Header/>
       <HomeContainer>
       <aside>
       <form>
       
       <label htmlFor='image'>imagem:</label>
       <input type={'text'} id='image' 
       onChange={handleInputImage} 
       value={image}/>

       <label htmlFor='name'>Nome:</label>
       <input type={'text'} id='name' 
       onChange={handleInputName}
       value={name}/>
       
       <label htmlFor='specie'>specie:</label>
       <input type={'text'} id='species'
       onChange={handleInputSpecies}
       value={species}/>

       <button onClick={addCharacter}>Criar</button>

       <h2>BUSCA</h2>
       <input type='text' value={query} onChange={handleQuery}/>
       <h2>Ordenar</h2>
       <select name='' id='' value={orderParam} onChange={handleOrderParam}>
         <option value='Crecente'>Crescente</option>
         <option value='Decrescente'>Decrescente</option>
       </select>

      </form>
        
       </aside>
       
       <main>
       {renderList}
       </main>
   </HomeContainer>
       </>
 );
}