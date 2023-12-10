import "./Modal.css";

const Modal2 = function (props) {
  console.log(props.transitionState);

  return (
    <div className="modal">
      <div className="modal-content ">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          voluptatibus sunt fuga rerum, doloremque accusantium animi velit!
          Obcaecati, laboriosam animi quis a molestiae impedit perferendis
          quidem temporibus nesciunt odit inventore.
        </p>
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal2;
