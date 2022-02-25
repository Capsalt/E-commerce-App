import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiUser } from "react-icons/fi";

const TopBar = () => {
  return (
    <div className="topbar">
       <Container>
           <Row>
               <Col xs={7}>
               <ul className="tb1">
                   <li>eCommerce</li>
                   <li>Products</li>
               </ul>
               </Col>
               <Col xs={5}>
               <ul className="tb2">
                   <li>
                       <Button>
                            <FiUser /> Login
                        </Button>
                    </li>
                   <li>
                       <Button>
                            <FiUser /> Register
                        </Button>
                    </li>
               </ul>
               </Col>
           </Row>
       </Container>
    </div>
  )
}

export default TopBar