import React from "react";
import "./Resource.css";

function Resource({ image, summary, listing, title }) {
  return (
    <div className="resource">
      <img className="resource__img" src={image} alt="" />
      <div className="resource_info">
        <div className="resource__text">
          <h4>{title}</h4>
          <p>{summary}</p>
          <p>{listing}</p>
        </div>
      </div>
    </div>
  );
}

export default Resource;
