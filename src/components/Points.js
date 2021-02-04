import Header from "../components/containers/Header";
import Banner from "../components/global/Banner";
import AddPoints from "../components/containers/Points";

const Points= ()  =>{
  return (
    <div>
      <Header />
      <Banner title="Add Points" />
      <AddPoints />
    </div>
  );
}

export default Points;
