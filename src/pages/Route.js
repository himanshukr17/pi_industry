import React from 'react';
import {useNavigate} from "react-router-dom"
  
const Route = () => {
  const navigate = useNavigate();
  
  return (
  <>
     <h1 style={{color:"green"}}>This is Route Page</h1>
     <button onClick={()=>navigate(-1)}>Go Back Home</button>
  </>
  )
};
  
export default Route;