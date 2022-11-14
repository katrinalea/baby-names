import babyNamesData from "./babyNamesData.json";
import "./names.css";
import FaveNames from "./faveNames";
import { useState } from "react";

interface babyInterface {
  id: number;
  name: string;
  sex: string;
}

let faveNamesID: number[] = [];

function ColourSort(): JSX.Element {
  const [name, setName] = useState("");

  function Search(): number[] {
    for (const item of babyNamesData) {
      faveNamesID = FaveNames(name, item);
    }
    return faveNamesID;
  }

  const data = babyNamesData
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((data: babyInterface) => {
      return (
        <>
          <button key={data.id} className={data.sex}>
            {data.name}
          </button>
        </>
      );
    });

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
      <p> {data}</p>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
export default ColourSort;
