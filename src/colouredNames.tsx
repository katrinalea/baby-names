import babyNamesData from "./babyNamesData.json";
import "./names.css";
import { useState } from "react";

interface babyInterface {
  id: number;
  name: string;
  sex: string;
}

function ColourSort(): JSX.Element {
  const [name, setName] = useState("");

  const data = babyNamesData
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((data: babyInterface) =>
      data.name.includes(name.toLowerCase()) ? (
        <>
          <button className={data.sex}>{data.name}</button>
        </>
      ) : (
        <p></p>
      )
    );

  return (
    <>
      <input
        id="searchbar"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setName("")}>Clear search</button>
      <p> {data}</p>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
export default ColourSort;
