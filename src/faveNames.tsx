//import {useState} from "react";
//import babyNamesData from "./babyNamesData.json";
//import ColourSort from "./colouredNames"

interface babyInterface {
  id: number;
  name: string;
  sex: string;
}

export default function FaveNames(
  search: string,
  object: babyInterface
): number[] {
  const faveNamesID = [];
  if (object.name.includes(search)) {
    faveNamesID.push(object.id);
  }
  return faveNamesID;
}

// this takes the input and check if the item name includes the search value
