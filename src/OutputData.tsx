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

  const handleClickAdd = (favouritedID:number) => {
    console.log("function is being called" + favouritedID)
    setFavouritedNameIDs([...favouritedNameIDs, favouritedID])
    console.log(favouritedNameIDs)
    
  }
  const handleClickRemove = (favouritedID:number) => {
    console.log(" remove function is being called" + favouritedID)
    setFavouritedNameIDs(favouritedNameIDs.filter((ID) => ID !== favouritedID)) 
    console.log(favouritedNameIDs)
  }

  //want to add the id to fave names, but remove it when the button is clicked again
  
  const isThisIDFavourite = (ID:number) => {
    for (const item of favouritedNameIDs){
      if (ID === item){
        return true
      } else {
        return false
      }
    }
  }

  const data = babyNamesData
    .sort((a, b) => a.name.localeCompare(b.name))
  const orderedData = data
    .filter((data: babyInterface) => data.name.toLowerCase().includes(name.toLowerCase()) && !isThisIDFavourite(data.id)) 
    .map((data: babyInterface) => 
      <>
        <button key = {data.id} className={data.sex} onClick={() => handleClickAdd(data.id)}>{data.name}</button>
      </>
    );

    const favouritedData = data
    .filter((data: babyInterface) => data.name.toLowerCase().includes(name.toLowerCase()) && isThisIDFavourite(data.id))
    .map((data: babyInterface) => 
      <>
        <button key = {data.id} className={data.sex} onClick={() => handleClickRemove(data.id)}>{data.name}</button>
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
