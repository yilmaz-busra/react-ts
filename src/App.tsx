import "./App.css";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorList from "./components/InstructorList";
import Request from "./components/Request";

function App() {
  const instructor = {
    firstName: "Büşra",
    lastName: "Yılmaz",
  };

  const instructorList = [
    {
      firstName: "Büşra",
      lastName: "Yılmaz",
    },
    {
      firstName: "Büş",
      lastName: "Yilmaz",
    },
    {
      firstName: "Bus",
      lastName: "Yilmaz",
    },
  ];

  return (
    <div className="App">
      {/* ts 'de props kullanımı 1. adım: Component import edilir 2. adım: Prop geçilir. 3.adım: Component sayfasına gidilir*/}
      <Home name="Büşra Yılmaz" courseNumber={10} isNow={true} />
      <Instructor instructorNameLastName={instructor} />
      <InstructorList instructorNameLastNameList={instructorList} />
      <Request status="loading" />
    </div>
  );
}

export default App;
