import React,{useState} from 'react'
import './Search.css'
import axios from 'axios'
import Searchresult from './Searchresult'

function Search() {
    const[search, setSearch] = useState('')
    const[searchlist, setSearchlist] = useState([])

    console.log(searchlist);
    const searchinputhandler = (e) => {
           e.preventDefault();
           setSearch(e.target.value);
           
    }

    const searchhandler = async(e) => {
        e.preventDefault();
        const url = `http://localhost:5000/API/library/library?name=`+search
        const list = await axios.get(url)
      .then(response => {
          console.log(response.data)
          setSearchlist(response.data);
          
        })
    }




    

  return (
    <div className='Search'>
    <input type='text' className = "searchinput" placeholder='Search by Title' onChange={searchinputhandler}/>
    <button className = "searchbutton" onClick={searchhandler}>Search</button>
    {
        searchlist.map((object)=> (<Searchresult list={object}/>))
    }
    </div>
  )
}

export default Search