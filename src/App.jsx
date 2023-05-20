import "./index.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Team from "./Components/Team";
import Landing from "./Components/Landing";
import Vision from "./Components/Vision";

function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <Landing></Landing>
      <Vision></Vision>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
}

export default App;
