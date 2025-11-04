import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer mensaje={"De la Quinta a tu mesa"} />
    </>
  );
}

export default App;
