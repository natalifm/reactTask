import React from "react";
import Modal from "react-modal";

//(What shoud i do)
const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleOkayButton}
    contentLabel="Selected Option"
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}

    <button className="button" onClick={props.handleOkayButton}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
