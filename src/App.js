import "./App.css";
import Child from "./Child";

function App() {
    return (
        <div className="App">
            <Child elem={<h3>it is my child, not you</h3>} />
        </div>
    );
}

export default App;
