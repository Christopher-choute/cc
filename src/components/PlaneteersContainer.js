import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planeteerData}) {
  const planeteers = planeteerData.map((planeteer) => {
    return(
      <Planeteer
      image={planeteer.pictureUrl}
      name={planeteer.name}
      bio={planeteer.bio}
      twitter={planeteer.twitter}
      quote = {planeteer.quote}
      fromUsa = {planeteer.fromUsa}
      />
    )
  }) 

  return (
    <ul className="cards">
      {planeteers}
    </ul>
  );
}

export default PlaneteersContainer;
