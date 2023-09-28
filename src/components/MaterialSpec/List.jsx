import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { postSelectedSpecsData } from '../../components/Services/materialService';

// getting the values of session storage
const getDatafromLS = (name) => {
  const data = sessionStorage.getItem(name);
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export const List = () => {


  const [books, setbooks] = useState(getDatafromLS('CarbonCalcList'));

  // input field states
  const [gia, setGia] = useState(getDatafromLS('gia'));


  // form submit event
  // const handleAddBookSubmit = (e: any) => {
  //   e.preventDefault();
  //   // creating an object
  //   let book = {
  //     title,
  //     author,
  //     isbn
  //   }
  //   setbooks([...books, book]);
  //   setTitle('');
  //   setAuthor('');
  //   setIsbn('');
  // }

  // delete book from LS
  const deleteBook = (index) => {
    // const filteredBooks = books.filter((element: { isbn: any; }, index: any) => {
    //   return element.isbn !== isbn
    // })

    // remove element at index 'index'
    console.log("removing element at index: ", index);
    const curList = [...books];
    curList.splice(index, 1);
    console.log(curList)
    setbooks(curList);
  }

  // saving data to local storage
  useEffect(() => {
    sessionStorage.setItem('CarbonCalcList', JSON.stringify(books));
  }, [books])

  const submitData = () => {
    let data= []
    books.forEach((each) => {
      console.log(each);
      data.push({
        'carbon_table': Number(each['materialSpec'].split(';')[1]),
        'substructural_element': Number(each['StructrualElem'].split(';')[1]),
        'element_group': Number(each['ele'].split(';')[1]),
        'quantity': Number(each['isbn']),
        'gia': Number(gia)

      })
    })
    postSelectedSpecsData(data);
    sessionStorage.removeItem('CarbonCalcList');
    sessionStorage.removeItem('gia');
  }


  return (
    <div className='wrapper'>
      <h1>List </h1>
      <div className='main'>

        <div className='view-container'>
          {books.length > 0 && <>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Material Specifications</th>
                    <th>Structural Element</th>
                    <th>Element Group</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    books.map((book, index) => (

                      <tr key={index}>

                        <td>{book.materialSpec.split(';')[0]}</td>
                        <td>{book.StructrualElem.split(';')[0]}</td>
                        <td>{book.ele.split(';')[0]}</td>
                        <td>{book.isbn.split(';')[0]}</td>

                        <td className='delete-btn' onClick={() => deleteBook(index)}>
                          Delete
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div style={{ display:"flex", gap:"5px"}}>

              <Link to='/retailer/materialspecifications'>
                <button className='btn btn-warning btn-md'>Back</button>
              </Link>
              <Link to='/dashboard/list/saved'>
                <button 
                className='btn btn-danger btn-md'
                onClick={() => submitData()}
                >Save</button>
              </Link>

            </div>


          </>}
          {books.length < 1 && <div>No Items are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default List