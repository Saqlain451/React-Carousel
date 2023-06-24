import React from "react";

const Card = ({img,title, description}) => {
  return (
    <>
    
      <div className="card"  style={{width:"18rem"}}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <button className="btn btn-primary">
            Go Inside
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
