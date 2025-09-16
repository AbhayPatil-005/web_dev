
import { useEffect } from 'react';
import useFetch from './customHooks/useFetch'
import axios from 'axios';



function App() {
  const url = 'https://crudcrud.com/api/4c30ffc448d648c88ec9b98341e0a5ac/notes'
  useEffect(()=>{ // dummy data posted befor fetching 
    axios.post(url,{
    hello:'sadfasd',
    asd:'adsfsad'
  }).then((res)=>console.log(res.data)).catch((error)=>console.log(error));
  },[])

  
  const {data, error, loading}= useFetch(url);
  if (error) return <p>{error}</p>;
  if (loading) return <p>{loading}</p>
  
  return (
    <>
      {data.map((note)=>(
        <li key={note._id}>
          <p>{note._id}</p>
        <p>{note.hello}</p></li>
        
      ))}
      
    </>
  )
}

export default App
