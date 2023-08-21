import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function DeleteModal({ modal, toggle, id, reCall }) {
  const fetchDeleteData = () => {
    const url =
      "https://627ef576b1cc1b12624eaac1.mockapi.io/api/v1/students/" + id;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        reCall();
        toggle();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Modal isOpen={modal.status}>
        <ModalHeader> Delete the stdudent</ModalHeader>
        <ModalBody>
          Are you sure want to delete this student with ID: {id}?
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => fetchDeleteData()}>
            Yes
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DeleteModal;
