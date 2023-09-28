import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { saveAs } from 'file-saver';
import axios from 'axios';
import Papa from 'papaparse';
import Show from './Show';
import Materials from './Materials';



const Upload = () => {

 
    const handleClick = () => {
        const csvData = "Material Specifications,Structural element,Element Group,Qunatity,GIA[m2]";
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
        saveAs(blob, 'data.csv');
      };

      

  return (
    <>
    <h3>Upload Products</h3>
    <p>Download the file and complete it and upload</p>
    <button className='btn w-fit ' onClick={handleClick}>Download</button>
    <div>
        

    <Show/>
    </div>

    <Materials/>
    </>
  )
}

export default Upload
