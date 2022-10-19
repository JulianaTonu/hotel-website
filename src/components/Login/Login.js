import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Login.css'
import login from '../../images/login.webp'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const Login = () => {
const {signIn} =useContext(AuthContext)
  const handleSubmit=event =>{
    event.preventDefault()
    const form =event.target
    const email =form.email.value
    const password =form.password.value
    console.log(email, password)

    signIn(email, password)
    .then(result=>{
      const user =result.user 
      console.log('login user', user) 
    })
    .catch(error=>{
      console.error(error)
    })
  }
    return (
        <Container className=''>
        <Row>
          <Col  sm={11} lg={6}>
          <img src={login} alt="" className='w-100 mt-5' />
          </Col>


          <Col sm={12} lg={6}>
            <div className='login w-75 mx-auto  pt-4 pb-5 login'>
            <h1 className='mb-4 text-center'>Login</h1>

            <Form onSubmit={handleSubmit}>
      

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='formlabel fw-bold'>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />  
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='formlabel fw-bold'>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <button className='sub-btn ms-5' type='submit'>Login</button>
      <p className='text-center'><small>New to this website? please <Link to='/register'>Register</Link></small></p>
      
      {/* <Button className='btn btn-info' type="submit">
        Submit
      </Button> */}
    </Form >
        </div></Col>
        </Row>
        
      </Container>
      
    );
};

export default Login;