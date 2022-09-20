import {MeuComponente } from "./Components/Componente";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";
import HomePage from "./Pages/HomePage/HomePage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import { GlobalStyle } from "./Components/Styled/Styled";
import { results } from "./Components/Data/Data";
import { useState } from "react";



function App() {

  const [characters,setCharacters] = useState(results)
  const[image,setImage] = useState('')
const[name,setName] = useState('')
const[species,setSpecies] = useState('')
const [query, setQuery] = useState('')
const [orderParam,setOrderParam] = useState('')
const [page,setPage] = useState('HomePage')
const [ id,setId] = useState(0)
 


const handleInputImage = (event) => setImage(event.target.value)
const handleInputName = (event) => setName(event.target.value)
const handleInputSpecies = (event) => setSpecies(event.target.value)
const handleQuery = (event) => setQuery(event.target.value)
const handleOrderParam = (event) => setOrderParam(event.target.value)

const changePage = (page,id) =>{
  setPage(page)
  setId(id)
}


const addCharacter = (event) =>{
  event.preventDefault()
const newCharacter = {
  id: Date.now(),
            name,
            status: '',
            species,
            type: "",
            gender: "Female",
            origin: {
                "name": "Earth (Replacement Dimension)",
                "url": "https://rickandmortyapi.com/api/location/20"
            },
            "location": {
                "name": "Earth (Replacement Dimension)",
                "url": "https://rickandmortyapi.com/api/location/20"
            },
            image,
}
const newCharacterList =  [...characters, newCharacter]
setCharacters(newCharacterList)

setImage('')
setName('')
setSpecies('')


}


const removeCharacter = (id) =>{
  const filterList = characters.filter(char =>{
    return char.id !== id
  })

  setCharacters(filterList)
}

const renderPage = () =>{
  switch(page) {
    case 'HomePage':
      return <HomePage
      characters={characters}
      states = {{image,name,species,query,orderParam}}
      handlers = {{handleInputImage,handleInputName,handleInputSpecies,handleQuery,handleOrderParam}}
      addCharacter = {addCharacter}
      removeCharacter={removeCharacter}
      changePage={changePage}
      />
      case 'DetailPage':
        return <DetailPage
        characters={characters}
        id={id}
        changePage={changePage}
        />
    
  }
}

  return (
    <div>
      <GlobalStyle/>
      {renderPage()}
        
        
      
    </div>
  );
}

export default App;

//pagina home
