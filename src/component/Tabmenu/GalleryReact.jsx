import React, { useState } from "react";
import "../Tabmenu/tab.css";
import Menu from "../Tabmenu/Menu";
import Menuitems from "./Menuitems";
import Catitems from "./Catitems";

const allCatValues = [...new Set(Menu.map((curelem) => {return curelem.category})),"all"];
console.log(allCatValues);

const GalleryReact = () => {
  const [items, setitems] = useState(Menu);
  const [catitems,setcatitems]=useState(allCatValues)
  const filteritem = (categitem) => {
    if(categitem==="all"){
      setitems(Menu);
      return;
    }
    const updateditem = Menu.filter((curelem) => {
      return curelem.category === categitem;
    });
    setitems(updateditem);
  };

  return (
    <>
      <h1 className="mt-5 text-center main-heading">Order your favourite dish</h1>
      <hr />
      <Catitems filteritem={filteritem} catitems={catitems}/>
      {/* my main item section */}
      <Menuitems items={items} />
    </>
  );
};
export default GalleryReact;
