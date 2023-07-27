
import React, { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useFirebase } from '../context/Firebase';


const Signuppage = () => {
    const navigate = useNavigate();
    const firebase = useFirebase();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        if(firebase.isLoggedIn){
            navigate('/')
        }
    }, [firebase, navigate])

    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log('Signing up a user...');
        try{
     const result = await  firebase.signupUserWithEmailAndPassword(email, password);
        console.log('successful', result);
        navigate("/");

        } catch (error){
            console.error('Error signing up:', error);
        }

    };



  return (
    <div className='container mt-5'>
    <h1>Register Page</h1> 
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Account
      </Button>
      <h3 className="my-5">OR</h3>
      <Button variant="danger" onClick={firebase.signinWithGoogle}>
        Signin with Google
      </Button>
    </Form>
    </div>
  )
}

export default Signuppage
