import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Library from './Library';

function Books() {
    const[books, setBooks] = useState([]);

    useEffect(() => {
       const temp = async() => {
        const list = await axios.get('http://localhost:5000/API/library/library')
      .then(response => {
          console.log(response);
          setBooks(response.data);
          console.log(books);
      },
      (error) => {
        console.log(error);
    })
      
       }

       temp();
    }, []);

  return (
    <div className='List'>
    <ul className='container'>
    {
        books.map((object)=> (<Library list={object}/>))
    }
    </ul>
   </div>
  )
}

export default Books