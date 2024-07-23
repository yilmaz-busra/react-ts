import React from "react";

type instructorListType = {
  instructorNameLastNameList: {
    firstName: string;
    lastName: string;
  }[];
};

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
