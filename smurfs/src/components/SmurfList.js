import React, { useState } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/actions";
import { v4 as uuid } from "uuid";

const SmurfList = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: uuid(),
  });

  const handleChange = (e) => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addSmurf(smurf);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={smurf.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />

        <input
          name="age"
          value={smurf.age}
          onChange={handleChange}
          placeholder="Enter Age"
        />

        <input
          name="height"
          value={smurf.height}
          onChange={handleChange}
          placeholder="Enter Height in cm"
        />

        <button type="submit"> Add Smurf </button>
      </form>
    </div>
  );
};

export default connect(null, { addSmurf })(SmurfList);