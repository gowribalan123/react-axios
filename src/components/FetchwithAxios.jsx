import React ,{useEffect,useState} from 'react'
import axios from 'axios'

const FetchwithAxios = () => {

const [dataType,setDataType]=useState('characters');// State for the dataType  
const [items,setItems]=useState([])// State to store API data  


useEffect(()=>{

    const fetchAPI = ()=>
    {
        axios.get(`https://rickandmortyapi.com/api/${dataType}`)
        .then(response =>setItems(response.data.results))

        .catch(error=>{
            console.log(error)
        })
    }
     fetchAPI()
     //Clean up code

     return()=>{
        console.log("cleaned up the connection to API")
     }

},[dataType])

 

  return (
    <>
    
    
    <div>
    <h1>Rick and Morty Data  
    
      </h1>
       
      <select value={dataType} onChange={(event)=>setDataType(event.target.value)}>
        <option value="character">Characters</option>
        <option value="episode">Episodes</option>
        <option value="location">Locations</option>
      </select>
      <h1> {dataType.charAt(0).toUpperCase() + dataType.slice(1)}</h1>
  
      <ul>
          {items.map((item) => ( 
         <li key={item}>
            {item.id}:{item.name}  

        </li>  // Display id and name  

        

         ))}
        </ul>
      
       </div>
   
     
    </>
  )
}

export default FetchwithAxios