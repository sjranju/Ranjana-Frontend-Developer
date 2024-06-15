import Banner from "./components/Banner";
import Capsules from "./components/Capsules";
import Footer from "./components/Footer";
import Search from "./components/Search";

function App() {

  return (
    <div className="min-h-screen">
      <Banner />
      <Search />
      <Capsules />
      <Footer />
    </div>
  );
}

export default App;
