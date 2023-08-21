import { Table } from "reactstrap";
import { SingleStudent } from "./singleStudent";

export const StudentList = ({ data, toggle }) => {
  return (
    <div className="student-list">
      <Table>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Avatar</th>
            <th>Full Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((student) => (
            <SingleStudent {...student} key={student.id} toggle={toggle} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
