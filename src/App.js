import Header from "./components/containers/Header";
import Banner from "./components/global/Banner";
import Products from "./components/containers/Products";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner title="Product List" />
      <Products />
    </div>
  );
}

export default App;
