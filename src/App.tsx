import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      {/* ts 'de props kullanımı 1. adım: Component import edilir 2. adım: Prop geçilir. 3.adım: Component sayfasına gidilir*/}
      <Home name="Büşra Yılmaz" />
    </div>
  );
}

export default App;
