import { useContext } from 'react'
import { SearchContext } from '../Context/SearchContext'

function SearchBar () {

    const { term, handleSerach } = useContext(SearchContext)
    return (
       <form>
        <input type="text" placeholder="Enter a search term here" ref={term}/>
        <input type="submit" onClick={(e) => handleSerach(e, term.current.value)}/>
        </form>
    )
}

export default SearchBar