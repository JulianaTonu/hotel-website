import React, { useContext, useState} from 'react';
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Register.css'

import signup from '../../images/signup.webp'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { FcGoogle } from "react-icons/fc";


const Register = () => {
    const {createUser, signInWithGoogle} =useContext(AuthContext)
const [error, setError] =useState(null)
    const handleSubmit=event=>{
        event.preventDefault()
        const form =event.target;
        const name =form.name.value
        const email =form.email.value
        const password =form.password.value
        const confirm =form.confirm.value
        console.log(name, email, password,confirm)

        if(password.length <6){
            setError('at least 6characters')
        }
        if(password !== confirm){
       setError('Password didnot match')
        }
 
        createUser(email, password)
        .then(result=>{
            const user =result.user
            console.log('register user', user)
            form.reset()
        })

        .catch(error=>{
            console.error('myerroor', error)
        })
    }

const handleGoogleSignIn=()=>{
  signInWithGoogle()
  .then(result=>{
    const user =result.user
    console.log(user)
  })
  .catch(error=>console.error(error))
}


    return (
        <Container className=''>
        <Row>
          <Col sm={11} lg={6}>
          <img src={signup} alt="" className='w-75 mt-4' />
          </Col>


          <Col sm={12} lg={6} ><div className='register w-75  mx-auto'>
            <h1 className='mb-1 text-center'>Register </h1>

            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2" controlId="formBasicName">
        <Form.Label className='formlabel fw-bold'>Your Name</Form.Label>
        <Form.Control type="name" name="name" placeholder="Enter your name" />  
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className='formlabel fw-bold'>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />  
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label className='formlabel fw-bold'>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-2" >
        <Form.Label className='formlabel fw-bold'>Confirm Password</Form.Label>
        <Form.Control type="password" name="confirm" placeholder="confirm Password" />
      </Form.Group>
      <p className='text-danger fw-bold text-center'><small>{error}</small></p>
      <button className='sub-btn ms-5' type='submit'>REGISTER</button>
     
      <button onClick={handleGoogleSignIn} className='google-btn ms-5 mt-3' type='submit'><FcGoogle/> GOOGLE</button>
     
      <p className='text-center'><small>Already Have an account? please <Link to='/login'>Login</Link></small></p>
      
      
    </Form>
        </div></Col>
        </Row>
        
      </Container>
      



        
    );
};

export default Register;