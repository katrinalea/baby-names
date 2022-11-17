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
  const [favouritedNameIDs, setFavouritedNameIDs] = useState<number[]>([]);


  const handleClickAdd = (favouritedID: number) => {
    console.log("add function is being called" + favouritedID);
    setFavouritedNameIDs([...favouritedNameIDs, favouritedID]);
    console.log({favouritedNameIDs})
  };
  const handleClickRemove = (favouritedID: number) => {
    console.log(" remove function is being called" + favouritedID);
    const filteredNamesRemovedID = favouritedNameIDs.filter((ID) => ID !== favouritedID)
    console.log({filteredNamesRemovedID})
    setFavouritedNameIDs([...filteredNamesRemovedID]);
  };

  const data = babyNamesData.sort((a, b) => a.name.localeCompare(b.name));
  const orderedData = data
    .filter(
      (data: babyInterface) =>
        data.name.toLowerCase().includes(name.toLowerCase()) &&
        !favouritedNameIDs.includes(data.id))
    .map((data: babyInterface) => (
      <>
        <button
          key={data.id}
          className={data.sex}
          onClick={() => handleClickAdd(data.id)}
        >
          {data.name}
        </button>
      </>
    ));

  const favouritedData = data
    .filter(
      (data: babyInterface) =>
        data.name.toLowerCase().includes(name.toLowerCase()) &&
        favouritedNameIDs.includes(data.id))
    .map((data: babyInterface) => (
      <>
        <button
          key={data.id}
          className={data.sex}
          onClick={() => handleClickRemove(data.id)}
        >
          {data.name}
        </button>
      </>
    ));

  return (
    <>
      <p className="page">
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
  );
}

export default OutputData;
