import React from 'react'
import './Library.css'
import axios from 'axios';
import Update from './Update';

function Library(props) {
console.log(props.list._id)

const deletehandler = async(e) => {
  e.preventDefault();
  const url = 'http://localhost:5000/API/library/'+props.list._id
    const res = await axios.delete(url)
    .then(response => alert("("+response.status+")" + "  The Book has  been deleted"))
    .catch(error => {
       console.log(error)
    });

}

  return (
    <div className='plus'>
    <li className='list'>
    <img className='image' src='https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290'/>
    <h3>{props.list.name} </h3>
    <p>{props.list.year}</p>
    <p>{props.list.author}</p>
    <p>{props.list.domain}</p>
    <p>{props.list.isavailable}</p>
    <Update uqid={props.list._id}/>
    <button className='delete' onClick={deletehandler}>Delete</button>
    </li>
    
    </div>
  )
}

export default Library