import babyNamesData from "./babyNamesData.json";
import "./names.css";

// interface babyNamesType {
//   id: number;
//   name: string;
//   sex: string;
// }

export default function Gender(): JSX.Element {
  babyNamesData.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <>
      {babyNamesData.map((baby, i) =>
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

// return all names with colours
