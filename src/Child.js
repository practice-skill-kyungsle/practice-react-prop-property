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
