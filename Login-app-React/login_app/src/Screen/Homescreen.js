import React from 'react'
import { useLocation } from 'react-router-dom'
function Homescreen() {
  const location = useLocation();
  const {dataaa}=location.state;
  return (
    <div>Homescreen : {dataaa}</div>
  )
}

export default Homescreen