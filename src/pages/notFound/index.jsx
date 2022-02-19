import React from 'react'
import Nav from '../../components/nav/index'
import img from '../../assets/img/pika.jpg'

function NotFound() {
  return (
<>
<Nav></Nav>

<h1 className='text-center font-weight-bold m-5 text-primary shadow'>This is Not the Web Page your Looking For</h1>

<div className='d-flex justify-content-center'>

<img src={img} alt="" className="img-fluid rounded" style={{height:"70vh"}} />
</div>

</>
  )
}

export default NotFound