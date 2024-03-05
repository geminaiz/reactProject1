import './App.css';
import CardForm from "./components/CardForm";
import Example from "./components/Example";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Example></Example>
      <h1>Aggiungi una città</h1>
      <CardForm></CardForm>
    </>
  );
}

export default App;