import React,{useState} from 'react'
import Header from './Header'
import './Update.css'
import axios from 'axios';

function Update(props) {
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
    const url = 'http://localhost:5000/API/library/'+props.uqid
    const res = await axios.put(url, object)
    .then(response => alert("("+response.status+")" + "  The Book has successfully been updated"))
    .catch(error => {
       console.log(error)
    });

    setName('');
    setYear('');
    setAuthor('');
    setDomain('');
    setAvail('');
  }

  return (
    <div className='Update'>
    <form className='Updateform'>
    <label>Update the name</label>
    <input type='text' className='inp' placeholder='Update name' value={name} onChange={namehandler}></input>
    <label>Update the year</label>
    <input type='text' className='inp' placeholder='Update year' value={year} onChange={yearhandler}></input>
    <label>Update the author</label>
    <input type='text' className='inp' placeholder='Update author' value={author} onChange={authorhandler}></input>
    <label>Update the domain</label>
    <input type='text' className='inp' placeholder='Update domain' value={domain} onChange={domainhandler}></input>
    <label>Update availability</label>
    <input type='text' className='inp' placeholder='Update availability' value={avail} onChange={availhandler}></input>
    <button className='addbutton' onClick={submitHandler}>Update</button>
    </form>
    </div>
  )
}

export default Update