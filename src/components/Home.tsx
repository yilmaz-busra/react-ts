import React from "react";
import { HomeProps } from "./propstype";

// 4.adım :gelen propların typlerı tanımlanır ya da typeların oluşturulduğu dosya import edilir.
// type HomeProps = {
//   name: string;
//   courseNumber: number;
//   isNow: boolean;
// };

function Home(props: HomeProps) {
  return (
    <div>
      {" "}
      {props.name} benim adım. Kurs Sayısı {props.courseNumber}
      {props.isNow ? (
        <p>Şu anda kurs izliyorum</p>
      ) : (
        <p>"Şu anda kurs izlemiyorum</p>
      )}
    </div>
  );
}

export default Home;
