## child component로 jsx tag를 내려줄 때, property를 새로 붙이는 방법

### 상위 컴포넌트

```jsx
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
```

elem이라는 property로 jsx tag 뭉치들을 보내주고 있다.

### 하위 컴포넌트

```jsx
import { createElement } from "react";

export default function Child({ elem }) {
    const Component = () =>
        createElement(elem.type, { ...elem.props, style: { ...elem.props?.style, color: "red" } }, elem.props.children);

    return (
        <>
            {/* {elem} */}
            <Component />
        </>
    );
}
```

elem에 중괄호를 붙여 바로 렌더링할 수 있지만, 이 방식을 사용하면 property를 동적으로 붙이지 못한다.

고민 결과, property를 붙이려면 함수형 컴포넌트를 동적으로 만들어야 한다는 생각으로 이어졌다.

`createElement` 을 사용하여 이를 해결했다. 이 함수는 세 개의 인자를 받아서 새로운 함수형 컴포넌트를 만들어준다.

1. tag의 이름 (ex. input)
2. 새롭게 들어갈 property들 (이전 property 들은 모두 삭제됨)
3. child nodes (유사 배열 형식으로 들어가야 함)

2번을 이용하면 property를 새롭게 추가해줄 수 있는 것이다.
