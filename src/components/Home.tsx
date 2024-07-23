import React from "react";

// 4.adım :gelen propların typlerı tanımlanır
type HomeProps = {
  name: string;
  courseNumber: number;
  isNow: boolean;
};

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
