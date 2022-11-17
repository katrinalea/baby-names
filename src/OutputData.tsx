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
  const [sex, setSex] = useState<boolean | undefined>(undefined)
  // girls = true, males = false, all = undefined

  const handleClickAdd = (favouritedID: number) => {
    console.log("add function is being called" + favouritedID);
    setFavouritedNameIDs([...favouritedNameIDs, favouritedID]);
    console.log({ favouritedNameIDs });
  };

  const handleClickRemove = (favouritedID: number) => {
    console.log(" remove function is being called" + favouritedID);
    const filteredNamesRemovedID = favouritedNameIDs.filter(
      (ID) => ID !== favouritedID
    );
    console.log({ filteredNamesRemovedID });
    setFavouritedNameIDs([...filteredNamesRemovedID]);
  };


  const handleClickGirls = () => {
    setSex(true)
  }

  const handleClickBoys = () => {
    setSex(false)
  }

  const handleClickReset = () => {
    setSex(undefined)
  }


// ordering the data alphabetically, then filtering it to only contain that that has been searched for
  const data = babyNamesData.sort((a, b) => a.name.localeCompare(b.name));

  const orderedData = data
    .filter(
      (data: babyInterface) =>
        data.name.toLowerCase().includes(name.toLowerCase()) &&
        !favouritedNameIDs.includes(data.id))
    .filter((data: babyInterface) =>
        sex === true ? data.sex === "f" : ( sex === false ? data.sex === "m" : data.sex)
    )
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


// filtering data to only contain that thats been searched for and favourited
  const favouritedData = data
    .filter(
      (data: babyInterface) =>
        data.name.toLowerCase().includes(name.toLowerCase()) &&
        favouritedNameIDs.includes(data.id) 
    )
    .filter((data: babyInterface) =>
        sex === true ? data.sex === "f" : ( sex === false ? data.sex === "m" : data.sex)
    )
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
        <h2>Please search for a name: </h2>
        <input
          id="searchbar"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button onClick={() => setName("")}>Clear search</button>
        <br />
        <button className="f" onClick = {handleClickGirls}> Girls </button>
        <button className="m" onClick = {handleClickBoys}> Boys </button>
        <button onClick = {handleClickReset}> Reset </button>
        <br />
        <h2> Your favourited names are:</h2>
        <p>{favouritedData}</p>
        <hr />
        <p>{orderedData}</p>
      </p>
    </>
  );
}

export default OutputData;
