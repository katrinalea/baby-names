import babyNamesData from "./babyNamesData.json";
import "./names.css";
import FaveNames from "./faveNames";
import { useState } from "react";

interface babyInterface {
  id: number;
  name: string;
  sex: string;
}


function OutputNames(): JSX.Element {
  const [name, setName] = useState("");

  //name is used as an arguemnt for fave places, to get a true or false output
  function Search(): number[] {
    for (const item of babyNamesData) {
      faveNamesID = FaveNames(name, item);
    }
    return faveNamesID;
  }

  return (
    <>
      <input
        id="searchbar"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={Search}>Search</button>
      <button onClick={() => setName("")}>Clear search</button>
    </>
  );
}


let faveNamesID: number[] = [];


function ColourSort(babyNamesData: babyInterface[]): JSX.Element {
  babyNamesData.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      {babyNamesData.map((baby, i) => faveNamesID.includes(baby.id)
         ?  baby.sex === "f" :
        <>
          <li key={i} className="girls">
            {" "}
            {baby.name}{" "}
            </li>
        :   
           <li key={i} className="boys">
            {" "}
            {baby.name}{" "}
          </li>
          </>)}
</>) }
   
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
export default ColourSort ; OutputNames;