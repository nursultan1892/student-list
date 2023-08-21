import { useState, useEffect } from "react";
import "./App.css";
import { StudentList } from "./components/studentList";
import { MainModal } from "./components/modals/modal";

const App = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState({ type: null, status: false });
  const [id, setId] = useState("");

  const toggle = (type, id) => {
    setModal({ type: type, status: !modal.status });
    setId(id);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://627ef576b1cc1b12624eaac1.mockapi.io/api/v1/students"
      );
      if (!response.ok) {
        throw new Error("Response failed");
      }
      const data = await response.json();
      setData(data);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const reCall = () => {
    console.log("calling");
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Student List</h1>
      <MainModal modal={modal} toggle={toggle} id={id} reCall={reCall} />
      {data.length > 0 && <StudentList data={data} toggle={toggle} />}
    </>
  );
};

export default App;
