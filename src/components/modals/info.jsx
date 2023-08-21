import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function InfoModal({ modal, toggle, id }) {
  const [infoData, setInfoData] = useState([]);

  const fetchInfoData = async () => {
    try {
      const response = await fetch(
        "https://627ef576b1cc1b12624eaac1.mockapi.io/api/v1/students/" + id
      );
      if (!response.ok) {
        throw new Error("Respnse failed");
      }
      const infodata = await response.json();
      setInfoData(infodata);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchInfoData();
  }, []);
  console.log(infoData);
  return (
    <div>
      <Modal isOpen={modal.status}>
        <ModalHeader>
          {infoData?.fname} {infoData?.lname}
        </ModalHeader>
        <ModalBody>
          <p>Country: {infoData?.country}</p>
          <p>Company: {infoData?.company}</p>
          <p>Phone: {infoData?.phone}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => toggle(null, null)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default InfoModal;
