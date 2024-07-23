import React from "react";

// 4.adım :gelen propların typlerı tanımlanır
type HomeProps = {
  name: string;
};

function Home(props: HomeProps) {
  return <div> {props.name} benim adım</div>;
}

export default Home;
