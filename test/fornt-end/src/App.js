// import logo from './logo.svg';
// import './App.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [result,setResult] = useState([])
//   const [input,setInput]= useState([])

//   useEffect(()=>{
//     if(input != ""){
//       axios.get(`http://127.0.0.1:8000/api/search/${input}`).then((response)=>{
//       console.log(response.data)
//       setResult(response.data)
//     });
//     }else{
//       setInput("")
//     }

//   },[input])


//   function handelChange(e){
//     e.preventDefault();
//       const input = e.target.value
//       setInput(input)
//   }






//   return (
//     <div className="App">
//       <input onChange={handelChange}></input>
//        <p>{result}</p>
//     </div>
//   );
// }

// export default App;












import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [result,setResult] = useState([]);
  const [table2,setTable2] = useState([]);
  const [input,setInput]= useState([]);

  useEffect(()=>{
    if(input != ""){
      axios.get(`http://127.0.0.1:8000/api/search/${input}`).then((response)=>{
      console.log(response.data)
      setResult(response.data)
    });
    }else{
      setInput("")
    }

  },[input])


  function handelChange(e){
    e.preventDefault();
      const input = e.target.value
      setInput(input)
  }

  function handelMoveToDown(item){
      setTable2((old)=>[...old, item])
      setResult(result.filter((obj)=> obj.id !== item.id))
      console.log(item)
    
  }








  return (
    <div className="App">
      <input onChange={handelChange}></input>
      <h1>table 1</h1>
        {result.map(item=>(
        <tr key={item.id}>
        <td>{item.name}</td>
        <td><button onClick={()=>handelMoveToDown(item)}>+</button></td>
        </tr>

        ))}
        
        
        <h1>table 2</h1>
          {table2.map(list=>(
            <li key={list.id} >{list.name}<button onClick={()=>handelMoveToDown([list])}>-</button> </li>
          ))}
      
    </div>
  );
}

export default App;
