import React from 'react'
import Navigationbar from '../components/Navigationbar';
import { useFirebase } from '../context/Firebase';



const Home = () => {
  const firebase = useFirebase();
  
  
  
  return (
    <>
    <Navigationbar/>
      <h1>This is Home Page</h1>
      {firebase.user ? <h3>Welcome {firebase.user.email}</h3> : <h3>Welcome</h3> }
    </>
  )
}

export default Home

