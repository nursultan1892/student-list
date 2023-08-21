import { Button } from "reactstrap";

export const SingleStudent = ({ age, avatar, fname, lname, id, toggle }) => {
  // console.log("aa", toggle);
  return (
    <tr className="table-primary">
      <td>{id}</td>
      <td>
        <img
          width={100}
          src="https://th.bing.com/th/id/OIP.SyOhGf0myohxNOscuZG0NgAAAA?pid=ImgDet&rs=1"
          alt=""
        />
      </td>
      <td>
        {fname} {lname}
      </td>
      <td>{age}</td>
      <td>
        <Button onClick={() => toggle("info", id)} color="primary">
          Info
        </Button>
        <Button onClick={() => toggle("edit", id)} color="success">
          Edit
        </Button>
        <Button onClick={() => toggle("delete", id)} color="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
