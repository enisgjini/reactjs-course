import "./App.css";
import Kushtezimi from "./components/Kushtezimi";
import Kushtezimi_2 from "./components/Kushtezimi_2";

function App(props) {
  const messages = ["A do te vjen", "Test123", "Test12345", "A do te vjen"];
  return (
    <div className="App">
      {/* <Kushtezimi isLoggedIn={false} /> */}
      <Kushtezimi_2 unreadMessages={messages} />
    </div>
  );
}

export default App;
