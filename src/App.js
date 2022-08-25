import "./App.css";
import MyProducts from "./components/MyProducts";

function App() {
  return (
    <div className="App">
      <MyProducts
        emri_i_produktit={"Molla"}
        pershkrimi={"E shijshme"}
        qmimi={0.5}
      />
      <hr />
      <MyProducts
        emri_i_produktit={"Dardha"}
        pershkrimi={"E shijshme"}
        qmimi={0.7}
      />
    </div>
  );
}

export default App;
