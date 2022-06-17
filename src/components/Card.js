import React from "react";
import './card.css'
const Card = (myitem) => {
  const item=myitem.item
  return (
    <>
    
          <div className="col shadow-lg">
              <div className="card">
                <div className="img-container">
                <img src={`${item.image}`}className="card-img-top" alt="..." />
                </div>
                
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <h6 className="card-title">{item.price}</h6>
                  <p className="card-text text-truncate" title={item.description}>
                    {item.description}
                  </p>
                  <button className="btn btn-success">View Details</button>
                </div>
              </div>
            </div>
         
     
  
    </>
  );
};

export default Card;
