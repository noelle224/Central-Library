import React from 'react'
import './Searchresult.css'
function Searchresult(props) {
    console.log(props);
  return (
    <div className='Searchresult'>
    <div className='imagediv'>
    <img className='image' src='https://images.unsplash.com/photo-1507842217343-583bb7270b66?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290'/>
    </div>
    <div className='details'>
    <p>This book is present in our library</p>
    <h3>{props.list.name} </h3>
    <p>Year : {props.list.year}</p>
    <p>{props.list.author}</p>
    <p>Domain : {props.list.domain}</p>
    <p>Availability : {props.list.isavailable}</p>
    </div>
    </div>
  )
}

export default Searchresult