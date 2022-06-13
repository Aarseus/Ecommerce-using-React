import React from 'react'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'

const Cart = () => {
  return (
    <>
      <Navbar/>
    <h3 className='text-center'>Cart Items</h3>
<table className="table table-bordered text-center table-hover table-striped align-middle w-75 mx-auto my-3">
    <thead>
        <tr>
            <th>S.No.</th>
            <th>Product Image</th>
            <th>Product Description</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> 1</td>
            <td>
                <img src="./mobile-img/mobile1.png" alt="samsung note" height={'100px'} />
            </td>
            <td>
                <h3>Samsung note 9</h3>
                <h4>Rs. 1,30,000</h4>
                <p>A very handy phone at resonable price</p>
            </td> 
            <td>
                <button className="btn btn-warning">Update</button>
                <button className="btn btn-danger">Remove</button>
            </td>
        </tr>

        <tr>
            <td> 2</td>
            <td>
                <img src="./mobile-img/mobile3.png" alt="iphone 11 pro" height={'100px'} />
            </td>
            <td>
                <h3>Iphone 11 pro</h3>
                <h4>Rs. 1,40,000</h4>
                <p>A very handy phone at resonable price</p>
            </td> 
            <td>
                <button className="btn btn-warning">Update</button>
                <button className="btn btn-danger">Remove</button>
            </td>
        </tr>

        <tr>
            <td> 3</td>
            <td>
                <img src="./mobile-img/mobile2.png" alt="samsung s10" height={'100px'} />
            </td>
            <td>
                <h3>Samsung S10</h3>
                <h4>Rs. 1,30,000</h4>
                <p>A very handy phone at resonable price</p>
            </td> 
            <td>
                <button className="btn btn-warning">Update</button>
                <button className="btn btn-danger">Remove</button>
            </td>
        </tr>
    </tbody>
</table>
  






<Footer/>
    </>
  )
}

export default Cart
