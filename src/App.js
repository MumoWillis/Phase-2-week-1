import React from 'react'
import ReactDOM from 'react-dom';
import './App.css';
import Search from './Components/Search.jsx'
import Table from './Components/Table.jsx'
import AddTransactionButton from './Components/Addbutton.jsx';
import Form from './Components/Form.jsx';

function App() {
  return (<>
    <header>
    <h1 id ="header1">The Royal Bank of Flatiron</h1>
    </header>
    <Search/>
    <Form/>
    <AddTransactionButton/>
    <Table/>
    
    </>
  );
  
}

export default App;
ReactDOM.render(<App/> , document.getElementById('root'))