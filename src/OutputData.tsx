import babyNamesData from "./babyNamesData.json";
import "./names.css";
import { useState } from "react";

interface babyInterface {
  id: number;
  name: string;
  sex: string;
}

function OutputData(): JSX.Element {
  const [name, setName] = useState("");
  const [favouritedNameIDs, setFavouritedNameIDs] = useState<number[]>([])

  // const handleClick = () => {
  // setClicked(!clicked)
  // console.log(clicked)},,, this sets allll the buttons as false so they will all stop rendering 

//const faveNamesIDs: number[] = []

  const handleClick = (favouritedID:number) => {
    console.log("function is being called" + favouritedID)
    favouritedNameIDs.includes(favouritedID) ? setFavouritedNameIDs(favouritedNameIDs.splice(favouritedID)) : setFavouritedNameIDs([...favouritedNameIDs, favouritedID])
    
  }

  //want to add the id to fave names, but remove it when the button is clicked again


  const data = babyNamesData
    .sort((a, b) => a.name.localeCompare(b.name))
  const orderedData = data
    .filter((data: babyInterface) => data.name.toLowerCase().includes(name.toLowerCase()) && !favouritedNameIDs.includes(data.id))
    .map((data: babyInterface) => 
      <>
        <button key = {data.id} className={data.sex} onClick={() => handleClick(data.id)}>{data.name}</button>
      </>
    );

    const favouritedData = data
    .filter((data: babyInterface) => data.name.toLowerCase().includes(name.toLowerCase()) && favouritedNameIDs.includes(data.id))
    .map((data: babyInterface) => 
      <>
        <button key = {data.id} className={data.sex} onClick={() => handleClick(data.id)}>{data.name}</button>
      </>
    );

    
  
  return (
    <>
    <p className = "page">
      <p>Please search for a name: </p>
      <input
        id="searchbar"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={() => setName("")}>Clear search</button>
      <br />
      <p> Your favourited names are:</p>
      <p>{favouritedData}</p>
      <hr />
      <p>{orderedData}</p>
      
    </p>
    </>
    // want to output all the 'true' buttons to favourited names
    // all the false buttons to favourtied names
  );
}


export default OutputData;
