import { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function EditModal({ modal, toggle, id, reCall }) {
  const [student, setStudent] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const newUrl =
    "https://627ef576b1cc1b12624eaac1.mockapi.io/api/v1/students/" + id;

  const fetcheEditData = async () => {
    try {
      const response = await fetch(newUrl);
      if (!response.ok) {
        throw new Error("Response failed");
      }
      const deleteData = await response.json();
      setStudent(deleteData);
      setIsLoading(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetcheEditData();
  }, []);

  const { fname, lname, age, avatar } = student;

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e, id) => {
    e.preventDefault();

    const url =
      "https://627ef576b1cc1b12624eaac1.mockapi.io/api/v1/students/" +
      id.toString();

    console.log("url", url, id, student);
    fetch(url, {
      method: "PUT",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((response) => response.json())
      .then((data) => {
        toggle(null, null);
        reCall();
      })
      .catch((error) => console.log(error));
  };
  console.log(student);
  return (
    <Modal isOpen={modal.status}>
      <ModalHeader>
        Edit student:{" "}
        <b>
          <i style={{ color: "red", textDecoration: "underline" }}>
            {fname} {lname}
          </i>
        </b>
      </ModalHeader>
      <ModalBody>
        <Form inline onSubmit={(e) => handleSubmit(e, id)}>
          <FormGroup>
            <Input
              id="fname"
              name="fname"
              placeholder="Firts name ..."
              type="text"
              value={fname}
              onChange={handleInput}
            />
          </FormGroup>{" "}
          <FormGroup>
            <Input
              id="lname"
              name="lname"
              placeholder="Last name ..."
              type="text"
              value={lname}
              onChange={handleInput}
            />
          </FormGroup>{" "}
          <FormGroup>
            <Input
              id="age"
              name="age"
              placeholder="Age ..."
              type="text"
              value={age}
              onChange={handleInput}
            />
          </FormGroup>{" "}
          <FormGroup>
            <Input
              id="avatar"
              name="avatar"
              placeholder="Last name ..."
              type="text"
              value={avatar}
              onChange={handleInput}
            />
          </FormGroup>{" "}
          <Button color="info">Submit</Button>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={() => toggle(null, null)}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default EditModal;
