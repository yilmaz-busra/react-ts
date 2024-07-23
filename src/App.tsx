import "./App.css";
import Home from "./components/Home";
import Instructor from "./components/Instructor";

function App() {
  const instructor = {
    firstName: "Büşra",
    lastName: "Yılmaz",
  };
  return (
    <div className="App">
      {/* ts 'de props kullanımı 1. adım: Component import edilir 2. adım: Prop geçilir. 3.adım: Component sayfasına gidilir*/}
      <Home name="Büşra Yılmaz" courseNumber={10} isNow={true} />
      <Instructor instructorNameLastName={instructor} />
    </div>
  );
}

export default App;
