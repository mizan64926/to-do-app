import React from "react";
const Catitems = ({ filteritem, catitems }) => {
  return (
    <>
      <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around">
        {
            catitems.map((curelem)=>{return <button className="btn btn-warning" onClick={() => filteritem(curelem)}>{curelem}</button>})
        }
        </div>
      </div>
    </>
  );
};

export default Catitems;
