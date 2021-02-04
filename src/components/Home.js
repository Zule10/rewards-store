import Header from "../components/containers/Header";
import Banner from "../components/global/Banner";
import Products from "../components/containers/Products";

const Home= ()  =>{
  return (
    <div>
      <Header />
      <Banner title="Product List" />
      <Products />
    </div>
  );
}

export default Home;
