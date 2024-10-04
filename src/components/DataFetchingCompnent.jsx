import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchingComponent = () => {
  const [dataType, setDataType] = useState('characters'); // State for the dataType  
  const [items, setItems] = useState([]); // State to store API data  

  useEffect(() => {  
    const fetchData = async () => {  
      try {  
        const response = await axios.get(`https://rickandmortyapi.com/api/${dataType}`);  
        setItems(response.data.results); // Update items with fetched data  
      } catch (error) {  
        console.log('Error fetching data:', error);  
      }  
    };  

    fetchData();  
  }, [dataType]); // Fetch data when dataType changes  

  return (  
    <div>  
   
   

      
<h1>Rick and Morty   </h1>  

      <select value={dataType} onChange={(event)=>setDataType(event.target.value)}>
        <option value="character">Characters</option>
        <option value="episode">Episodes</option>
        <option value="location">Locations</option>
      </select>


     
      <h1>{dataType}</h1>
      <ul>  
        {items.map(item => (  
          <li key={item}>
            {item.id} : {item.name}
          </li> // Display id and name  
        ))}  
      </ul>  
      
      
     
    </div>  
  );  
};  

     



export default DataFetchingComponent;