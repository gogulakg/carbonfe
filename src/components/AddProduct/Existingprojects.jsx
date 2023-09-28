import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
// import Sidebar from './Shared/Sidebar';


const Existingprojects = () => {
  return (
   <>
   
   <div style={{ display:"flex", flexDirection:"column", columnGap:"2px"}}>
   <div style={{ width:"30%"}}>
   <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Search Contractor</InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
   </div>
   <div>
   <Table striped bordered hover>
      <thead>
        <tr>
          <th>Contractor</th>
          <th>Contract Name</th>
          <th>Contract ID</th>
          <th> Reference</th>
          <th> Start Date</th>
          <th> End Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>15/06/22</td>
          <td>15/06/23</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry </td>
          <td>the Bird</td>

          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
   </div>
   </div>
   </>
  )
}

export default Existingprojects
