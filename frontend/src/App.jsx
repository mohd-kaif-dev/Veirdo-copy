import AnnouncementBar from "./components/AnnouncementBar";
import Footer from "./components/footer";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
