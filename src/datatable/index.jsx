import React from "react";

export default function Datatable({data}){
    const columns = data[0] && Object.keys(data[0])
    return(
        
    <table  class="table table-sm table-striped"  cellPadding={0} cellSpacing={0}>
        <thead class="thead-dark">
        <tr>{data[0] && columns.map((heading)=> <th  scope="col">{heading}</th>)} </tr>
        </thead>

        <tbody>
           {data.map((row) => (
           <tr>
             {
               columns.map((column) => (
               <td>{row[column]}</td>))
           }
           </tr>
           ))}
        </tbody>
    </table>
    );
}