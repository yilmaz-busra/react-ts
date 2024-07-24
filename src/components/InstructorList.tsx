import React from "react";
import { instructorListType } from "./propstype";

function InstructorList(props: instructorListType) {
  return (
    <div>
      InstructorList{" "}
      {props.instructorNameLastNameList.map((item) => {
        return (
          <h1 key={item.firstName}>
            {item.firstName} {item.lastName}
          </h1>
        );
      })}
    </div>
  );
}

export default InstructorList;
