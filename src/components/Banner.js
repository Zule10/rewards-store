import React from 'react';

const Banner = ({ title, background }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: background
          ? `url(${background})`
          : `url(${process.env.PUBLIC_URL}/header-x1.png)`,
      }}
    >
      <div className="b-container">
          <h1 className="b-title">{title}</h1>
      </div>
    </div>
  )
};

export default  Banner;