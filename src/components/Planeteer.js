import React,{useState} from "react";

function Planeteer({image,name,bio,quote,twitter,fromUsa}) {

  const [isToggle, setIsToggle]= useState(true)
function handleToggle(){
  setIsToggle(!isToggle)
}


  return (
    <li className="cards__item">
      <div className="card">
        <img
          src={image}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text" onClick = {handleToggle} >{isToggle? bio: quote}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>{fromUsa? "USA-based": "working overseas"}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
