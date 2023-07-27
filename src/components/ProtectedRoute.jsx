import React from 'react';
import { Navigate } from 'react-router-dom';
import { useFirebase } from '../context/Firebase';
// import About from '../pages/About';

const ProtectedRoute = ({component: Component}) => {
    const firebase = useFirebase();
    


    if(!firebase.isLoggedIn){
      return  <Navigate  to='/login'/> 
    }

return <Component/>;
    
};

export default ProtectedRoute
