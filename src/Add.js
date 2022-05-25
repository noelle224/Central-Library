import React, {useState}from 'react'
import './Add.css'
import axios from 'axios';

function Add() {
  const[name, setName] = useState('');
  const[year, setYear] = useState('')
  const[author, setAuthor] = useState('')
  const[domain, setDomain] = useState('')
  const[avail, setAvail] = useState('')

  const namehandler = (e) => {
       e.preventDefault();
       setName(e.target.value);
  }

  const yearhandler = (e) => {
    e.preventDefault();
    setYear(e.target.value);
}

const authorhandler = (e) => {
  e.preventDefault();
  setAuthor(e.target.value);
}

const domainhandler = (e) => {
  e.preventDefault();
  setDomain(e.target.value);
}

const availhandler = (e) => {
  e.preventDefault();
  setAvail(e.target.value);
}

const submitHandler = async(e) => {
  e.preventDefault();
  const object = {
    "name" : name,
    "year" : year,
    "author" :author,
    "domain" :domain,
    "isavailable" :avail
  }
  const res = await axios.post('http://localhost:5000/API/library/add', object)
  .then(response => alert("("+response.status+")" + "  The Book is successfully added to the library"))
  .catch(error => {
     console.log(error)
  });
}

  return (
    <div >
    <form className='Create'>
    <label>Name of the book</label>
    <input className='inp' type='text' placeholder='Name of the book...' onChange={namehandler}></input>
    <label>Published</label>
    <input className='inp' type='text' placeholder='Published year...' onChange={yearhandler}></input>
    <label>Author</label>
    <input className='inp' type='text' placeholder='Author...' onChange={authorhandler}></input>
    <label>Domain</label>
    <input className='inp'  type='text' placeholder='Domain...' onChange={domainhandler}></input>
    <label>Availability</label>
    <input className='inp' type='text' placeholder='available?...' onChange={availhandler}></input>
    <button className='addbutton' onClick={submitHandler}>Add to Library</button>
    </form>
    </div>
  )
}

export default Add