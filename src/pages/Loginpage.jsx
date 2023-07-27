import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/Firebase";

const Loginpage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebase = useFirebase();
  const navigate = useNavigate();


  useEffect(()=>{
    if(firebase.isLoggedIn){
        navigate('/');
    }
}, [firebase, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault();
   try{
    console.log("logging in a user...")
    const result = await firebase.loginUserWithEmailAndPassword(email, password);
    console.log("success:" , result);
    navigate('/');

   }

   catch (error){
    console.error('Error signing in:' , error)
   }
  
};

  return (
    <div className="container mt-5">
      <h1>Login Page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
        <div className="mt-5">
            Are you new here? <Link to={'/register'}>Click to SignUp!</Link>
        </div>
    </div>
  )
};

export default Loginpage;
