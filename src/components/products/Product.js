import React from "react";

const Product = ({ category, cost, img, name, redeemPoints, points }) => {
  return (
    <div className="grid-item">
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
        {points >= cost ? (
          <div className="card-redeem">
            <>
              <div className="card-price" >
                <div className="card-cost">
                  <span>{cost}</span>
                </div>
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
        {points >= cost ? (
            <img
            className="card-buy"
              src={process.env.PUBLIC_URL + "/icons/buy-blue.svg"}
              alt="Buy"
            ></img>
        ) : (
          <div className="card-missing-coins">              
            <div className="card-price">
              <div className="card-cost">
                  <span>{cost}</span>
              </div>
              <img
                  src={process.env.PUBLIC_URL + "/icons/coin.svg"}
                  alt="Coins"
              ></img>  
            </div>  
            <button className="card-missing-button">              
                Missing                  
            </button>  
          </div> 
        )}           
    </div>     
    </div>
  );
};

export default Product;
