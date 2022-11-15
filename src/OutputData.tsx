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
  const [clicked, setClicked] = useState<string>("")

  // const handleClick = () => {
  // setClicked(!clicked)
  // console.log(clicked)},,, this sets allll the buttons as false so they will all stop rendering 

const faveNames: string[] = []
  const handleClick = () => {
    setClicked()
    faveNames.push(clicked)
  }


  const data = babyNamesData
    .sort((a, b) => a.name.localeCompare(b.name))
  const orderedData = data
    .filter((data: babyInterface) => data.name.toLowerCase().includes(name.toLowerCase())) // && clicked = false, when one button is clicked they all go
    .map((data: babyInterface) => 
      <>
        <button id="{data.id}" className={data.sex} onClick={handleClick}>{data.name}</button>
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
      <p>{orderedData}</p>
      <hr />
      <p>{orderedData}</p>
      
    </p>
    </>
    // want to output all the 'true' buttons to favourited names
    // all the false buttons to favourtied names
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
export default OutputData;
