import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [item, setItem ] = useState({ firstName: '', lastName: '', age: ''}); 
  const [itemList, setItemList] = useState([]);

  useEffect(
    ()=> {
      const fetchData = async () => {
        const response = await fetch("https://dummyjson.com/users/1");
        const data = await response.json();        
        setItemList([...itemList, data]);        
      }
      fetchData();      
    }, []
  )

   

  return (
    <div className="App">
      <div className='flx'>   
      <form>
        <label>Enter First Name:</label>
        <input
            value={item.firstName}
            onChange={(e)=>setItem({...item, firstName: e.target.value})}
            type='text'
        />
        <label>Enter Last Name:</label>
        <input
          value={item.lastName}
          onChange={(e)=> setItem({...item, lastName: e.target.value})}
        />
        <label>Enter Age:</label>
        <input
          value={item.age}
          onChange={(e)=>setItem({...item, age: e.target.value})}
        />
        <button className='btn' onClick={(e)=>{
          e.preventDefault();
          setItemList( (prevList) => {
            return [...itemList, item]
          }            
          ); 
          setItem({firstName: '', lastName: '', age: '' });       
      }}>Submit</button>
        {console.log(item.firstName, item.lastName, item.age)}
        {console.log(itemList)}
      </form>

      <ul>
        {itemList.map((i)=>(<li key={i.firstName}>{i.firstName} {i.lastName} {i.age}
        <button className='btn' onClick={()=> setItemList(itemList.filter((it)=> it.firstName !== i.firstName))}>Delete</button>
         </li>))}
      </ul>
      </div>   
    </div>    
  );
}

export default App;
