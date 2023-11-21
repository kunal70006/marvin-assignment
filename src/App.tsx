import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="min-h-screen font-lato flex flex-col">
      <Header />
      <Hero />
      <Carousel />
    </div>
  );
};

export default App;
