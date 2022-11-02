import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect, useState } from 'react';
import AppProfile from './components/AppProfile';
import Avatar from './components/Avatar';
import Counter from './components/Counter';

function App() {
  const [total, setTotal] = useState(0);
  const [employee, setEmployee] = useState([
    {name: "James Kim", level:1, position:"FE Developer", profile:"https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"},
    {name: "Levin Joe", level:3, position:"BE Developer", profile:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"},
    {name: "Brian chris", level:4, position:"iOS Developer", profile:"https://images.unsplash.com/photo-1474447976065-67d23accb1e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"},
  ]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("newitem.json")
    .then(res => res.json())
    .then(data => setItems(data))
    return () => {
      console.log("Hi");
    };
  }, []);
  return (
    <div className='layout'>
      {employee.map((person,index) => (
        <div key={index}>
          <AppProfile person={person}/>
        </div>
      ))}
      {items.map((item,index) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.email}</p>
    </div>
      ))}
    </div>
  );
}
export default App;
