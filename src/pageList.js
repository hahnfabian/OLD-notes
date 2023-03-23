import {doubleRight} from "./icons"
import { useState } from "react";

const allPages = [
  {name:"Page 1", id:"1"},
  {name:"Page 2", id:"1"}];


export function PageList() {
  const [pageNumber, setPageNumber] = useState(0);

  return (allPages.map(page => 
    <div className="menu-list">
      <img src={doubleRight} alt="double Right"></img>
      <span>{page.name}</span> 
    </div>)
    )
  }
  
export function pageName() {
  return(allPages[1])
}

export function CurrentPageNumber() {
  const [pageNumber, setPageNumber] = useState(0);
  return (pageNumber)
}