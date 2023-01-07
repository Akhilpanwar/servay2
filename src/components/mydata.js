import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
function Mydata() {
    const data=useSelector((state)=>state);
    console.log(data)
  return (
    <div>
      hhh
    </div>
  )
}

export default Mydata
