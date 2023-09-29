import React, { useEffect, useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';


function DisCarboncalc() {
  const [data, setData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch('http://54.164.164.202:8000/carbon/')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <>
      <div style={{ display:'flex', flexDirection:"row", columnGap:'3px' }}>
        <Form.Select aria-label="Default select example">
          <option>Select Clients</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
       
      </div>

      <div>
     

      
     {isVisible ? (
   
   <Table striped bordered hover>
     
     <thead>
       <tr>
       </tr>
       <br/>
       <br/>
       <tr>
         
         <th style={{background:"blue", textAlign:"center", color:"black"}}>                Carbon Calculations</th>
         
         <th colSpan={10} style={{background:"darkorange", textAlign:"center", color:"black"}}>Building Stages Embodied Carbon[tCO2e]</th>

       </tr>
       <tr>
         <th></th>
         
         <th>Product</th>
         <th>Transport</th>
         <th>Construction</th>
         <th>In Use</th>
         <th>End of Life</th>
         <th>Beyond</th>

       </tr>
       <tr>
         <th></th>
         
         <th>A1-A3</th>
         <th>A4</th>
         <th>A5w</th>
         <th>B1-B5</th>
         <th>C2-C4</th>
         <th>D</th>

       </tr>
     </thead>
     <tbody>
     {data.map(row => (
         <tr key={row.timestamp}>
           <th>{row.substructural_element_name}</th>
           <td>{row.A1_A3}</td>
           <td>{row.A4}</td>
           <td>{row.A5w}</td>
           <td>{row.C2}</td>
           <td>{row.C2_C4}</td>
           <td>{row.D}</td>


         </tr>
       ))}
     </tbody>
   </Table>
 ) : null}
 {isVisible ? null : (
 
 <><Table striped bordered hover>

         <thead>
           <tr>
           </tr>
           <br />
           <br />



           <tr>

             <th style={{ background: "grey", textAlign: "center", color: "black" }}>                Carbon Calculations</th>

             <th colSpan={6} style={{ background: "grey", textAlign: "center", color: "black" }}>Building Stages Embodied Carbon[tCO2e]</th>

           </tr>
           <tr>
             <th></th>

             <th>Product</th>
             <th>Transport</th>
             <th>Construction</th>
             <th>In Use</th>
             <th>End of Life</th>
             <th>Beyond</th>

           </tr>
           <tr>
             <th></th>

             <th>A1-A3</th>
             <th>A4</th>
             <th>A5w</th>
             <th>C2</th>
             <th>C3-C4</th>
             <th>C2-C4</th>
             <th>D</th>
             <th>Total(A1-A5)</th>
             <th>Total(A-C)</th>
             <th>CO2</th>
           </tr>
         </thead>
         <tbody>
           
             <tr >
               <th>Structural Element</th>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>
               <td></td>


             </tr>
          
         </tbody>
       </Table><Button onClick={() => setIsVisible(true)}>
           Show Carbon Calculations

         </Button></>)}
   </div>
    </>
  );
}

export default DisCarboncalc;
