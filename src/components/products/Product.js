import React from "react";

const Product = ({ category, cost, img, name, redeemPoints, points }) => {
  return (
    <div>
      <div className="card">
        <img
          className="card-image"
          src={
            img
              ? img
              : process.env.PUBLIC_URL + "/product-pics/MacbookPro-x1.png"
          }
          alt={name}
        />
        <hr />
        <div className="card-content">
          <p className="card-category">{category}</p>
          <p className="card-name">{name}</p>
        </div>     
        {points > cost ? (
          <div className="card-redeem">
            <>
              <div className="card-price" >
                <span>{cost}</span>
                <img
                  src={process.env.PUBLIC_URL + "/icons/coin.svg"}
                  alt="Coins"
                ></img>
              </div>
              <button className="card-button" onClick={redeemPoints}>
                Redeem 
              </button>
            </>
          </div>
        ) : null}
        {points > cost ? (
          <div className="error"></div>
        ) : (
          <div className="success">
            <span>Missing {cost - points}</span>
            <img
              src={process.env.PUBLIC_URL + "/icons/coin.svg"}
              alt="Coins"
            ></img>
          </div>
        )}
           
    </div>      
      
    </div>
  );
};

export default Product;
