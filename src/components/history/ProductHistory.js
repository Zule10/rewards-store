import React from "react";

function ProductHistory ({category, img, name }) {

  const img_name = img.split('/');

  return (
    <div className="grid-item">
      <div className="card">
        <img
          className="card-image"
          src={process.env.PUBLIC_URL + "/product-pics/" + img_name[img_name.length-1]}
          alt={name}
        />
        <hr />
        <div className="card-content">
          <p className="card-category">{category}</p>
          <p className="card-name">{name}</p>
        </div>    
      </div>     
    </div>
  );
}

export default ProductHistory;
