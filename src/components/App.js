import React, {useState} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";
import { useEffect } from "react";

function App() {

const [planeteerData, setPlaneteerData] = useState([]);
const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:8003/planeteers')
    .then(response => response.json())
    .then(data => setPlaneteerData(data))
  }, []);


const filteredPlaneteerArray = planeteerData.filter((planteer) =>{
  return planteer.name.toLowerCase().includes(search.toLowerCase());
})


  return (
    <div>
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <RandomButton />
      <PlaneteersContainer planeteerData={filteredPlaneteerArray}/>
    </div>
  );
}

export default App;

