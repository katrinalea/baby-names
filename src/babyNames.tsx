import babyNamesData from "./babyNamesData.json";
import "./names.css";
import {useState} from "react";

interface babyInterface {
    id: number;
    name: string;
    sex: string
}


//cant use a names array because this removes the sex which is needed further down


// need to loop through the babynamesdata, if the name.match 'e' in the search box, the name needs to be pushed to the array newNamesArray so that it is rendered
//there is nothing in the search box all names pushed to new name array

function SearchNames (): JSX.Element {

const [faveName, setFaveName] = useState<babyInterface[]>([]);


 //if set fave name is included in the name list, setfave name becomes the name, and this is push to the newName Array to be rendered
 const Search = () => {
    for (const item of babyNamesdata){
        if (item.match(setFaveName)){
            setFaveName(item)
        }
    }
    newNamesArray.push(faveName)
    }
 }
return (
 <>
 <input value="text" onChange={(e) => setFaveName(e.target.value)}/>
 <button onClick = {Search}> Search</button>
 </>
)
}




const newNamesArray: babyInterface[]= []
export default function Gender(): JSX.Element {
    newNamesArray.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      {newNamesArray.map((baby, i) =>
        baby.sex === "f" ? (
          <li key={i} className="girls">
            {" "}
            {baby.name}{" "}
          </li>
        ) : (
          <li key={i} className="boys">
            {" "}
            {baby.name}{" "}
          </li>
        )
      )}
    </>
  );
}

// used the above code to check if it orders them and colours them based on sex, it does
//now chnaged the array being sorted to newNamesArray, so that newState can be used to push to this array and filter based off a search box

