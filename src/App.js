import Header from "./components/containers/Header";
import Banner from "./components/Banner";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner title="Products" />
    </div>
  );
}

export default App;
