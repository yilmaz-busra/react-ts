import React from "react";

type RequestProps = {
  status: "loading" | "success" | "error";
};
function Request(props: RequestProps) {
  let message = "";
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data has been loaded successfully!";
  } else if (props.status === "error") {
    message = "An error occurred while loading the data!";
  }
  return <div>{message}</div>;
}

export default Request;
