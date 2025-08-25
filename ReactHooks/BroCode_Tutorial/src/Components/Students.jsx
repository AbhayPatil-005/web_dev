// we need to install prop-types package first to use PropTypes for type checking
import PropTypes from "prop-types";

const Students = (props) => {
    const isTrue = props.student ? "Yes" : "No";
  return (
    <div className="student">
      <p><span className="student-details">Name: </span>{props.name}</p>
      <p><span className="student-details">Age : </span>{props.age}</p>
      <p><span className="student-details">Student :</span>{isTrue}</p>
    </div>
  );
}
// Type checking with PropTypes
Students.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    student: PropTypes.bool, 
};

export default Students;

// This how props are passed from App.jsx to Students.jsx component
// <Students name="SpongeBob" age={20} student={true} />