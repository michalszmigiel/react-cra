import React from "react";

const ManageCoursePage = props => (
  <>
    <h2>Manage Course</h2>
    <p>{props.match.params.slug}</p>
  </>
);

export default ManageCoursePage;
