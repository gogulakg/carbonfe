import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import{ Navbar, Container, Nav} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import Imagenew from './../../assets/Images/logo.png'


const Headernew = () => {
  const { adminId } = useParams();
  return (
    <Navbar style={{background:"white", color:"#ffa500"}}>
        <Container>
          <LinkContainer to={``}>
          <Navbar.Brand >
          <img
              src={Imagenew}
              width="180"
              height="50"
              className=""
              alt="React Bootstrap logo"
             
            />
          </Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto">
          <LinkContainer to='/dashboard/list'>
            <Nav.Link ><i className='fas fa-shopping-cart'></i>List</Nav.Link>
            </LinkContainer>
            <LinkContainer to={`/dashboard/products`}>
            <Nav.Link><i className='fas fa-user'></i>Products</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Headernew