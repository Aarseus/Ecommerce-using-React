import React, { useContext } from 'react'
import Card from '../Card';
import { GlobalContext } from '../GlobalContext';

const Display = () => {
    const items = [
        {
          name: "Samsung Note",
          price: "Rs 1,30,000",
          description: "a very handy phone",
          image: "./mobile-img/mobile1.png",
        },
        {
          name: "Samsung s10",
          price: "Rs 1,20,000",
          description: "a very handy phone",
          image: "./mobile-img/mobile2.png",
        },
        {
            name: "Iphone 11 pro",
            price: "Rs 1,40,000",
            description: "a very handy phone",
            image: "./mobile-img/mobile3.png",
          },
        {
          name: "Nokia",
          price: "Rs 13,000",
          description: "a very handy phone",
          image: "./mobile-img/mobile4.png",
        },
      ];

      const msg=useContext(GlobalContext)
  return (
    <>



<div className="container-fluid">
  <h1>{msg}</h1>
<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
{items.map(i=>{
    return <Card item={i}/>
})}
</div>



</div>
      
    </>
  )
}

export default Display
