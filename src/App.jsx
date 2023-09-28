import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import Existingprojects from './components/AddProduct/Existingprojects'
import DisCarboncalc from './components/Carboncalc'
import Layouts from './components/Shared/Layouts'
import Upload from './components/MaterialSpec/Upload'
import List from './components/MaterialSpec/List'
import ListOrderSuccess from './components/MaterialSpec/Listsuccess'
const App = () => {

 
 
  return (
   <>


  <Router>
    
    <Routes>
      
    
   {/* <Route  path='/' element={<Login />} /> */}
   <Route path='/' element={<Layouts/>}>
   <Route index element={<Dashboard />} />
   <Route path='dashboard/products/' element={<Products />} />
   <Route path='dashboard/existingprojects/' element={<Existingprojects/>}/>
   <Route path='dashboard/carboncalc/' element={<DisCarboncalc/>}/>
   <Route path='dashboard/materialspec/' element={<Upload />} />
   <Route path='dashboard/list/' element={<List />} />
   <Route path='dashboard/list/saved/' element={<ListOrderSuccess />} />


   </Route>   
  
   </Routes>
   
     
      </Router>
   </>
  )
}

export default App
