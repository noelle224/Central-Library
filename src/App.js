import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes } from 'react-router-dom'
import Add from './Add';
import './App.css';
import Books from './Books';
import Header from './Header';
import Library from './Library';
import Search from './Search';
import Update from './Update';

function App() {
  return (
    <div className="App">
     <Header/>
     <Add/>
     <Search/>
     <Books/>
    </div>
  );
}

export default App;
