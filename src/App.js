import "./App.css";
import Child from "./Child";

function App() {
    return (
        <div className="App">
            <Child
                elem={
                    <div id="find-child" style={{ backgroundColor: "orange" }}>
                        <h1>it is my child, not you</h1>
                        <h3>where is your child?</h3>
                        <h4>chul soo~</h4>
                        just joke lol lol
                    </div>
                }
            />
        </div>
    );
}

export default App;
