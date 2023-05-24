import './App.css';
import { useEffect, useState } from 'react'
import SearchBar from './Components/SearchBar';
import Gallery from './Components/Gallery';


function App() {
let [ search, setSearch] = useState("")
let [data, setData] = useState([])
let [message, setMessage] = useState ("Search for music!")

const API_URL = 'https://itunes.apple.com/search?term='


useEffect(() => {
  //console.log(API_URL+ search)
  if(search) {
  document.title = `${search} Music`
fetch (API_URL + search)
.then(res => res.json())
.then(resData => {
  if (resData.results.length > 0) {
    setData(resData.results)
  } else {
    setMessage("No results found!")
  }
})
}
}, [search])

const handleSearch = (e, term) => {
  e.preventDefault()
  setSearch(term)
}
  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      {message}
      <Gallery data={data}/>
      
    </div>
  );
}

export default App;
