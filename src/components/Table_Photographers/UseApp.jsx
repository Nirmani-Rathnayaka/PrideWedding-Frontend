import React, { useState,useEffect} from "react";
import Datatable from "./datatable";

require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function UseApp() {
  const [data,setData] = useState([])
  const [q,setQ]  = useState("")
  const [searchColumns,setSearchColumns] = useState(["companyName","locatedDistrict"]);

  useEffect(()=>{
    fetch("https://prideweddingapi.azurewebsites.net/api/PhotographyVendors")
    .then(response=>response.json())
    .then((json) => setData(json))

  },[])

  function search(rows){
   
    return rows.filter((row)=>
    searchColumns.some(
      (column)=> 
       row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
       )
  
    );
  }

  const columns = data[0] && Object.keys(data[0])

  return(
  <>
   <div>Here you can search details of photographers by company name location and packages</div>
  
    <div><input placeholder="Search" type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" type="text" value={q} on onChange={(e)=>setQ(e.target.value)}/>
     {
      columns && columns.map(column => <lable class="custom-control custom-checkbox">
        <input type="checkbox" checked={searchColumns.includes(column)}
         onChange={(e) =>{
           const checked =searchColumns.includes(column)
           setSearchColumns(prev=>checked
            ? prev.filter(sc => sc !== column)
            :[...prev,column])
          }
        }/>
        {column}
      </lable>)
    }

    </div>
    

    <div >
      
      <Datatable data={search(data)}/> 
    </div>


  </>
  
  );
}
