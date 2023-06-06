import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./CardList";
import { robots } from "./Robots";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";


function App() {
  const [filter, setFilter] = useState({
    robots: robots,
    searchField: "",
  });

  var FilteredRobots = ''

 
  const [state,setState]= useState(robots)
const onSearchChange = (event) => {
  setFilter(
    { searchField: event.target.value ,
    robots: robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(filter.searchField.toLowerCase());
    })}
  );
   
  //  FilteredRobots = filteredRobots;
    // console.log(event.target.value)
    // console.log(filteredRobots);
    // console.log(FilteredRobots);
    // console.log(filter.robots);
    // console.log(state.searchField);
    // console.log(state.robots)
    // console.log(filter.robots)
    
  }

  useEffect(() => {

  }, [state])
  

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {filter.robots.length===0 ? (
        <div>
        <h1>Loading</h1>
         <SearchBox SearchChange={onSearchChange} />
         </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1>Robo Friends</h1>
          <SearchBox SearchChange={onSearchChange} />
          <Scroll>
            <CardList robots={filter.robots} />
          </Scroll>
        </div>
      )}
    </div>
  );
}

export default App;
