import Lists from "./components/Lists";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <Lists numbers={numbers} />
    </div>
  );
}

export default App;
