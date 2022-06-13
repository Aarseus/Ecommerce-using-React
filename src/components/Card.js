import React from "react";
import './card.css'
const Card = () => {
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
  return (
    <>
    <div className="container-fluid">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {items.map((item,i) => {
          return <div key={i}>
          <div className="col shadow-lg">
              <div className="card">
                <div className="img-container">
                <img src={`${item.image}`}className="card-img-top" alt="..." />
                </div>
                
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-title">{item.price}</h6>
                  <p className="card-text text-truncate">
                    {item.description}
                  </p>
                  <button className="btn btn-success">View Details</button>
                </div>
              </div>
            </div>
            </div>
        })}
      </div>
      </div>
    </>
  );
};

export default Card;
