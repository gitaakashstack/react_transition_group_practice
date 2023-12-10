import { Fragment, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./List.css";

const List = function () {
  const [itemList, addOrRemoveItem] = useState([1, 2, 3]);

  function addItemToList() {
    addOrRemoveItem((prevList) => [
      ...prevList,
      Math.floor(Math.random() * 10),
    ]);
  }

  function removeItemFromList(delindx) {
    addOrRemoveItem((prevList) =>
      prevList.filter((item, indx) => indx !== delindx)
    );
  }

  const integerList = itemList.map((item, indx) => (
    <CSSTransition classNames="item" key={indx} timeout={1000}>
      <li onClick={() => removeItemFromList(indx)}>{item}</li>
    </CSSTransition>
  ));

  return (
    <div className="center">
      <button onClick={addItemToList}> Add Item</button>
      <TransitionGroup component="ul" className="list">
        {integerList}
      </TransitionGroup>
    </div>
  );
};

export default List;
