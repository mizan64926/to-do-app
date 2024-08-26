import React from "react";
import { useState } from "react";
import "../App.css";
import todo from "../image/todo.svg";

const Todo = () => {
  const [inputdata, setinputdata] = useState("");
  const [items, setitems] = useState([]);
  const additems = () => {
    if (!inputdata) {
    } else {
      setitems([...items, inputdata]);
    }
    setinputdata("");
  };
  const deleteitem = (id) => {
    const updateitems = items.filter((val, ind) => {
      return ind != id;
    });
    setitems(updateitems);
  };
  const removeAll = () => {
    setitems([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="" />
            <figcaption>add your list here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="additems...."
              value={inputdata}
              onChange={(event) => {
                setinputdata(event.target.value);
              }}
            />
            <i className="fa fa-solid fa-plus" onClick={additems}></i>
          </div>
          <div className="showItems">
            {items.map((val, ind) => {
              return (
                <>
                  <div className="eachItem" key={ind}>
                    <h3>{val}</h3>
                    <i
                      class="fa fa-solid fa-trash-can"
                      onClick={() => {
                        deleteitem(ind);
                      }}
                    ></i>
                  </div>
                </>
              );
            })}
          </div>

          {/* clear all button */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span> CHECK LIST </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
