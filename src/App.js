import { useState } from "react";
import Modal1 from "./Components/Modal_1";
import Modal2 from "./Components/Modal_2";
import { CSSTransition, Transition } from "react-transition-group";
import List from "./Components/List";

function App() {
  const [modal1Display, toggleModal1] = useState(false);
  const [modal2Display, toggleModal2] = useState(false);
  const [blockDisplay, toggleBlock] = useState(false);

  const modal1DisplayHandler = function () {
    toggleModal1((prevState) => !prevState);
  };

  const modal2DisplayHandler = function () {
    toggleModal2((prevState) => !prevState);
  };

  const blockDisplayHandler = function () {
    toggleBlock((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={modal1DisplayHandler}>Open Modal 1</button>
      <button onClick={modal2DisplayHandler}>Open Modal 2</button>
      <button onClick={blockDisplayHandler}>Test </button>

      <Transition in={modal1Display} timeout={1000} mountOnEnter unmountOnExit>
        {(state) => (
          <Modal1 onClose={modal1DisplayHandler} transitionState={state} />
        )}
      </Transition>
      <CSSTransition
        in={modal2Display}
        timeout={1000}
        classNames="modal"
        unmountOnExit
      >
        <Modal2 onClose={modal2DisplayHandler} />
      </CSSTransition>
      <Transition in={blockDisplay} timeout={1000} unmountOnExit>
        {(state) => {
          console.log(state, "here");
          return (
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "red",
                opacity: state === "entered" ? 1 : 0,
                transition: "opacity 1s",
              }}
            ></div>
          );
        }}
      </Transition>
      <List />
    </div>
  );
}

export default App;
